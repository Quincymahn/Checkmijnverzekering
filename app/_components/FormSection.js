"use client";

// components/AfspraakMain.jsx
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useForm, useWatch } from "react-hook-form";

// --- START: Logica voor het blokkeren van neppe telefoonnummers ---

const PLACEHOLDERS = new Set([
  "123456",
  "1234567",
  "12345678",
  "123456789",
  "000000",
  "0000000",
  "999999999",
  "111111",
  "555555",
]);

function quickReject(digits) {
  if (!digits) return true;
  if (PLACEHOLDERS.has(digits)) return true;
  if (/^0{6,}$/.test(digits)) return true;
  if (/^(.)\1{5,}$/.test(digits)) return true;
  if (digits.length < 7) return true;
  return false;
}

function hasLongRepeatedSequence(s, minLen = 6) {
  const re = new RegExp(`(.)\\1{${minLen - 1},}`);
  return re.test(s);
}

function hasLongTrailingZeros(s, minLen = 6) {
  return new RegExp(`0{${minLen},}$`).test(s);
}

function isMostlySameDigit(s, threshold = 0.75) {
  if (!s) return false;
  const counts = {};
  for (const ch of s) counts[ch] = (counts[ch] || 0) + 1;
  const max = Math.max(...Object.values(counts));
  return max / s.length >= threshold;
}

function hasSequentialRun(s, minLen = 6) {
  if (s.length < minLen) return false;
  let ascCount = 1;
  let descCount = 1;
  for (let i = 1; i < s.length; i++) {
    const prev = parseInt(s[i - 1], 10);
    const cur = parseInt(s[i], 10);
    if (cur === prev + 1) {
      ascCount++;
      descCount = 1;
    } else if (cur === prev - 1) {
      descCount++;
      ascCount = 1;
    } else {
      ascCount = 1;
      descCount = 1;
    }
    if (ascCount >= minLen || descCount >= minLen) return true;
  }
  return false;
}

function flaggedByHeuristics(nationalNumber) {
  if (!nationalNumber) return false;
  if (hasLongRepeatedSequence(nationalNumber, 6)) return true;
  if (hasLongTrailingZeros(nationalNumber, 6)) return true;
  if (isMostlySameDigit(nationalNumber, 0.75)) return true;
  if (hasSequentialRun(nationalNumber, 6)) return true;
  if (
    nationalNumber.length >= 8 &&
    nationalNumber.startsWith("6") &&
    /^6?0{6,}$/.test(nationalNumber)
  )
    return true;
  return false;
}

// --- EINDE: Logica voor het blokkeren van neppe telefoonnummers ---

function FormSection() {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isCheckingPostcode, setIsCheckingPostcode] = useState(false);
  const [postcodeError, setPostcodeError] = useState(null);
  const [addressDetails, setAddressDetails] = useState(null);

  const insuranceOptions = [
    {
      label: "Recht en Zekerheid",
      options: ["Ongevallen", "Rechtsbijstand"],
    },
    {
      label: "Verkeer",
      options: ["Auto", "Bestelauto", "Bromfiets", "Motor", "Oldtimer"],
    },
    {
      label: "Vrije Tijd",
      options: ["Caravan", "Fiets", "Pleziervaartuig", "Reis"],
    },
    {
      label: "Wonen",
      options: ["Aansprakelijkheid", "Glas", "Inboedel", "Opstal"],
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
    setValue,
    clearErrors,
    control,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      wens: "",
      postcode: "",
      huisnummer: "",
      huisnummerToevoeging: "",
      street: "",
      city: "",
      opmerking: "",
    },
  });

  const watchedPostcode = useWatch({ control, name: "postcode" });
  const watchedHuisnummer = useWatch({ control, name: "huisnummer" });
  const watchedToevoeging = useWatch({ control, name: "huisnummerToevoeging" });

  useEffect(() => {
    if (addressDetails) {
      setAddressDetails(null);
      setPostcodeError(null);
      setValue("street", "");
      setValue("city", "");
    }
  }, [watchedPostcode, watchedHuisnummer, watchedToevoeging]);

  const handleAddressLookup = async () => {
    setPostcodeError(null);
    setAddressDetails(null);
    setIsCheckingPostcode(true);

    const { postcode, huisnummer, huisnummerToevoeging } = getValues();

    if (!postcode || !huisnummer) {
      setPostcodeError("Voer een postcode en huisnummer in");
      setIsCheckingPostcode(false);
      return;
    }

    try {
      const response = await fetch("/api/postcode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          postcode,
          housenumber: huisnummer,
          houseNumberAddition: huisnummerToevoeging,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Adres kon niet worden gevonden");
      }

      setAddressDetails(result);
      setValue("street", result.street, {
        shouldValidate: true,
        shouldDirty: true,
      });
      setValue("city", result.city, {
        shouldValidate: true,
        shouldDirty: true,
      });
      clearErrors(["street", "city"]);
    } catch (error) {
      setPostcodeError(error.message);
      setValue("street", "");
      setValue("city", "");
      setAddressDetails(null);
    } finally {
      setIsCheckingPostcode(false);
    }
  };

  const triggerAddressLookup = () => {
    if (isCheckingPostcode) return;

    const { postcode, huisnummer } = getValues();
    const postcodeRegex = /^[1-9][0-9]{3}\s?[A-Za-z]{2}$/i;

    if (postcodeRegex.test(postcode) && huisnummer.trim() !== "") {
      handleAddressLookup();
    }
  };

  const [uploadedFileUrl, setUploadedFileUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState(null);

  const handleFileUpload = async (file) => {
    if (!file) return null;

    setIsUploading(true);
    setUploadError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload-file", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Upload mislukt");
      }

      setUploadedFileUrl(result.url);
      setSelectedFileName(file.name);
      return result.url;
    } catch (error) {
      console.error("Upload error:", error);
      setUploadError(error.message);
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  const onSubmit = async (data) => {
    setSubmitStatus(null);

    // Upload het bestand eerst als het er is
    let polisFileUrl = uploadedFileUrl;

    if (data.polis && data.polis[0] && !uploadedFileUrl) {
      polisFileUrl = await handleFileUpload(data.polis[0]);

      if (!polisFileUrl && data.polis[0]) {
        setSubmitStatus({
          type: "error",
          message: "Bestand uploaden mislukt. Probeer het opnieuw.",
        });
        return;
      }
    }

    let phoneNumber = String(data.phone).replace(/[\s-()]/g, "");

    if (phoneNumber.startsWith("0")) {
      phoneNumber = "31" + phoneNumber.substring(1);
    }

    const finalData = {
      ...data,
      phone: phoneNumber,
      polisFileUrl: polisFileUrl || "", // Voeg de URL toe in plaats van het bestand
    };

    // Verwijder het polis veld (het echte bestand)
    delete finalData.polis;

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Uw formulier is succesvol verzonden!",
        });
        reset();
        setUploadedFileUrl(null);
        setSelectedFileName(null);
      } else {
        throw new Error(result.message || "Er is een fout opgetreden");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error.message ||
          "Er is een fout opgetreden bij het verzenden van het formulier",
      });
    }
  };

  return (
    <section className="relative flex justify-center px-4 py-20 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 z-0 -top-1">
        <Image
          src="/img/Line 20.svg"
          alt="wavy line"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative w-full max-w-7xl">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-medium">
            We helpen u graag verder!
          </h2>
          <p className="text-gray-600">
            Binnen enkele minuten helder inzicht in <br />
            premie, dekking en kleine lettertjes
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2 lg:grid-cols-5">
          {/* --- CHANGE: Added order-2 and lg:order-none --- */}
          {/* This column will now appear SECOND on mobile */}
          <div className="flex order-2 w-full gap-4 lg:flex-col md:col-span-2 max-[650px]:flex-col lg:order-none">
            <div className="flex-1 w-full bg-white rounded-2xl shadow-md-custom">
              <div className="flex items-center justify-center w-full h-full p-4">
                <div className="w-60 h-60 border border-[#1b7ced] p-8 rounded-full relative">
                  <Image
                    src="/img/front-view-business-woman-suit.jpg"
                    width={25}
                    height={25}
                    alt="head shot of a business woman"
                    className="absolute object-cover rounded-full top-3 w-6.5 h-6.5 shadow-md-custom"
                  />
                  <Image
                    src="/img/smiling-middle-aged-man-using-tablet-street-cafe.jpg"
                    width={25}
                    height={25}
                    alt="head shot of a business woman"
                    className="absolute object-cover rounded-full right-14 bottom-0 w-6.5 h-6.5 shadow-md-custom"
                  />
                  <div className="w-full h-full border border-[#1b7ced]/60 p-8 rounded-full relative">
                    <Image
                      src="/img/businesswoman-happy-be-back-work.jpg"
                      width={25}
                      height={25}
                      alt="head shot of a business woman"
                      className="absolute object-cover rounded-full -left-1 bottom-10 w-6.5 h-6.5 shadow-md-custom"
                    />
                    <Image
                      src="/img/handsome-happy-bearded-man.jpg"
                      width={25}
                      height={25}
                      alt="head shot of a business woman"
                      className="absolute object-cover rounded-full right-2 top-5 w-6.5 h-6.5 shadow-md-custom"
                    />
                    <div className="w-full h-full border border-[#1b7ced]/30 rounded-full relative">
                      <Image
                        src="/img/therapist.jpg"
                        width={25}
                        height={25}
                        alt="head shot of a business woman"
                        className="absolute object-cover rounded-full -top-1.5 left-5 w-6.5 h-6.5 shadow-md-custom"
                      />
                      <Image
                        src="/img/smiling-man-suit-looking-camera.jpg"
                        width={25}
                        height={25}
                        alt="head shot of a business woman"
                        className="absolute object-cover rounded-full bottom-3 right-0 w-6.5 h-6.5 shadow-md-custom"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex-1 w-full backdrop-blur-sm rounded-2xl shadow-md-custom">
              <Image
                src="/img/Generated-Image-September-15-2025-11_47AM.png"
                width={1000}
                height={1000}
                alt="vector image of happy customers"
                className="object-cover h-full rounded-2xl"
              />
              <p className="absolute bottom-0 left-0 w-full text-sm font-medium text-center text-white py-7 px-15 bg-gray-400/40 backdrop-blur-sm rounded-b-2xl">
                Persoonlijke & heldere begeleiding. upload uw polis voor een
                snelle analyse.
              </p>
            </div>
          </div>

          {/* --- CHANGE: Added order-1 and lg:order-none --- */}
          {/* This column will now appear FIRST on mobile */}
          <div className="order-1 col-span-1 md:col-span-2 lg:order-none lg:col-span-3">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="h-full p-4 bg-white sm:p-6 lg:p-8 shadow-md-custom rounded-2xl"
              aria-label="Afspraak formulier"
            >
              <h3 className="text-base font-medium sm:text-lg text-slate-800">
                Meer inzicht, minder premie.
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500">
                Vul het formulier in om alles verder te bespreken
              </p>

              {submitStatus && (
                <div
                  className={`mt-3 sm:mt-4 p-3 sm:p-4 rounded-lg text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="grid grid-cols-1 gap-3 mt-4 sm:gap-4 sm:mt-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs font-medium sm:text-sm text-slate-700"
                  >
                    Voornaam
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Bijv. Jan"
                    disabled={isSubmitting}
                    className={`mt-1.5 sm:mt-2 block w-full rounded-lg border px-3 sm:px-4 py-2.5 sm:py-3 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1b7ced] disabled:opacity-50 ${
                      errors.firstName
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200 bg-gray-50"
                    }`}
                    {...register("firstName", {
                      required: "Voornaam is verplicht",
                      minLength: {
                        value: 2,
                        message: "Voornaam moet minimaal 2 karakters zijn",
                      },
                    })}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-red-600 sm:text-sm">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs font-medium sm:text-sm text-slate-700"
                  >
                    Achternaam
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Bijv. Jansen"
                    disabled={isSubmitting}
                    className={`mt-1.5 sm:mt-2 block w-full rounded-lg border px-3 sm:px-4 py-2.5 sm:py-3 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1b7ced] disabled:opacity-50 ${
                      errors.lastName
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200 bg-gray-50"
                    }`}
                    {...register("lastName", {
                      required: "Achternaam is verplicht",
                      minLength: {
                        value: 2,
                        message: "Achternaam moet minimaal 2 karakters zijn",
                      },
                    })}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-red-600 sm:text-sm">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium sm:text-sm text-slate-700"
                  >
                    E-mailadres
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="naam@voorbeeld.com"
                    disabled={isSubmitting}
                    className={`mt-1.5 sm:mt-2 block w-full rounded-lg border px-3 sm:px-4 py-2.5 sm:py-3 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1b7ced] disabled:opacity-50 ${
                      errors.email
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200 bg-gray-50"
                    }`}
                    {...register("email", {
                      required: "E-mailadres is verplicht",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Voer een geldig e-mailadres in",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-600 sm:text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-medium sm:text-sm text-slate-700"
                  >
                    Telefoonnummer
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="06 12345678"
                    disabled={isSubmitting}
                    className={`mt-1.5 sm:mt-2 block w-full rounded-lg border px-3 sm:px-4 py-2.5 sm:py-3 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1b7ced] disabled:opacity-50 ${
                      errors.phone
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200 bg-gray-50"
                    }`}
                    {...register("phone", {
                      required: "Telefoonnummer is verplicht",
                      validate: (value) => {
                        const cleanNumber = String(value).replace(
                          /[\s-()]/g,
                          ""
                        );

                        const validPattern = /^((\+|00)31|0)[1-9]\d{8}$/;
                        if (!validPattern.test(cleanNumber)) {
                          return "Voer een geldig Nederlands telefoonnummer in.";
                        }

                        const digitsOnly = cleanNumber.replace(/\D/g, "");
                        if (
                          quickReject(digitsOnly) ||
                          flaggedByHeuristics(digitsOnly)
                        ) {
                          return "Dit lijkt een ongeldig telefoonnummer te zijn.";
                        }

                        return true;
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-600 sm:text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="wens"
                    className="block text-xs font-medium sm:text-sm text-slate-700"
                  >
                    Uw wens
                  </label>
                  <select
                    id="wens"
                    disabled={isSubmitting}
                    className={`mt-1.5 sm:mt-2 block w-full rounded-lg border px-3 sm:px-4 py-2.5 sm:py-3 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1b7ced] disabled:opacity-50 ${
                      errors.wens
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200 bg-gray-50"
                    }`}
                    {...register("wens", {
                      required: "Kies alstublieft een verzekering",
                    })}
                  >
                    <option className="hidden" value="" disabled>
                      Maak een keuze
                    </option>
                    {insuranceOptions.map((group) => (
                      <optgroup key={group.label} label={group.label}>
                        {group.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                  {errors.wens && (
                    <p className="mt-1 text-xs text-red-600 sm:text-sm">
                      {errors.wens.message}
                    </p>
                  )}
                </div>

                {/* Adres velden - verbeterde layout voor mobiel */}
                <div className="sm:col-span-2">
                  <div className="grid grid-cols-12 gap-2 sm:gap-4">
                    <div className="col-span-5 sm:col-span-4">
                      <label
                        htmlFor="postcode"
                        className="block text-xs font-medium sm:text-sm text-slate-700"
                      >
                        Postcode
                      </label>
                      <input
                        id="postcode"
                        type="text"
                        placeholder="1234AB"
                        disabled={isSubmitting}
                        className={`mt-1.5 sm:mt-2 block w-full rounded-lg border px-2 sm:px-4 py-2.5 sm:py-3 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1b7ced] disabled:opacity-50 ${
                          errors.postcode
                            ? "border-red-300 bg-red-50"
                            : "border-gray-200 bg-gray-50"
                        }`}
                        {...register("postcode", {
                          required: "Postcode is verplicht",
                          pattern: {
                            value: /^[1-9][0-9]{3}\s?[A-Za-z]{2}$/,
                            message: "Voer een geldige postcode in",
                          },
                        })}
                        onBlur={triggerAddressLookup}
                      />
                      {errors.postcode && (
                        <p className="mt-1 text-xs text-red-600 sm:text-sm">
                          {errors.postcode.message}
                        </p>
                      )}
                    </div>

                    <div className="col-span-5 sm:col-span-4">
                      <label
                        htmlFor="huisnummer"
                        className="block text-xs font-medium sm:text-sm text-slate-700"
                      >
                        Huisnr.
                      </label>
                      <input
                        id="huisnummer"
                        type="text"
                        placeholder="12"
                        disabled={isSubmitting}
                        className={`mt-1.5 sm:mt-2 block w-full rounded-lg border px-2 sm:px-4 py-2.5 sm:py-3 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1b7ced] disabled:opacity-50 ${
                          errors.huisnummer
                            ? "border-red-300 bg-red-50"
                            : "border-gray-200 bg-gray-50"
                        }`}
                        {...register("huisnummer", {
                          required: "Huisnummer is verplicht",
                          pattern: {
                            value: /^[1-9]\d{0,4}[a-zA-Z]?$/,
                            message: "Voer een geldig huisnummer in",
                          },
                        })}
                        onBlur={triggerAddressLookup}
                      />
                      {errors.huisnummer && (
                        <p className="mt-1 text-xs text-red-600 sm:text-sm">
                          {errors.huisnummer.message}
                        </p>
                      )}
                    </div>

                    <div className="col-span-2 sm:col-span-4">
                      <label
                        htmlFor="huisnummerToevoeging"
                        className="block text-xs font-medium sm:text-sm text-slate-700"
                      >
                        Toev.
                      </label>
                      <input
                        id="huisnummerToevoeging"
                        type="text"
                        placeholder="A"
                        disabled={isSubmitting}
                        className={`mt-1.5 sm:mt-2 block w-full rounded-lg border border-gray-200 bg-gray-50 px-2 sm:px-4 py-2.5 sm:py-3 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1b7ced] disabled:opacity-50`}
                        {...register("huisnummerToevoeging")}
                        onBlur={triggerAddressLookup}
                      />
                    </div>
                  </div>
                </div>

                {(isCheckingPostcode || postcodeError) && (
                  <div className="sm:col-span-2">
                    {isCheckingPostcode && (
                      <div className="flex items-center text-xs sm:text-sm text-slate-500">
                        <svg
                          className="w-4 h-4 mr-2 sm:w-5 sm:h-5 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Adres wordt opgehaald...
                      </div>
                    )}
                    {postcodeError && (
                      <p className="text-xs text-red-600 sm:text-sm">
                        {postcodeError}
                      </p>
                    )}
                  </div>
                )}

                {addressDetails && (
                  <>
                    {/* Straat veld */}
                    <div>
                      <label
                        htmlFor="street"
                        className="block text-xs font-medium sm:text-sm text-slate-700"
                      >
                        Straat
                      </label>
                      <input
                        id="street"
                        type="text"
                        readOnly
                        disabled
                        className="mt-1.5 sm:mt-2 block w-full rounded-lg border border-gray-300 bg-gray-200 px-3 py-2.5 text-sm text-gray-700 cursor-not-allowed sm:px-4 sm:py-3"
                        {...register("street", {
                          required: "Straat is verplicht",
                        })}
                      />
                    </div>

                    {/* Woonplaats veld */}
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-xs font-medium sm:text-sm text-slate-700"
                      >
                        Woonplaats
                      </label>
                      <input
                        id="city"
                        type="text"
                        readOnly
                        disabled
                        className="mt-1.5 sm:mt-2 block w-full rounded-lg border border-gray-300 bg-gray-200 px-3 py-2.5 text-sm text-gray-700 cursor-not-allowed sm:px-4 sm:py-3"
                        {...register("city", {
                          required: "Woonplaats is verplicht",
                        })}
                      />
                    </div>
                  </>
                )}

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium sm:text-sm text-slate-700">
                    Polisbladen uploaden (optioneel)
                  </label>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mt-1.5 sm:mt-2">
                    <label
                      htmlFor="polis"
                      className={`inline-flex cursor-pointer items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-xs sm:text-sm shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1b7ced] ${
                        isSubmitting || isUploading
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      {isUploading ? (
                        <>
                          <svg
                            className="w-4 h-4 animate-spin"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          <span>Uploaden...</span>
                        </>
                      ) : (
                        <>
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden
                            className="sm:w-4 sm:h-4"
                          >
                            <path
                              d="M12 3v12"
                              stroke="#2563EB"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9 6l3-3 3 3"
                              stroke="#2563EB"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M21 21H3"
                              stroke="#2563EB"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>Bestand kiezen</span>
                        </>
                      )}
                      <input
                        id="polis"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        disabled={isSubmitting || isUploading}
                        className="sr-only"
                        onChange={async (e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            // Controleer bestandsgrootte (10MB)
                            if (file.size > 10 * 1024 * 1024) {
                              setUploadError("Bestand is te groot (max 10MB)");
                              e.target.value = "";
                              return;
                            }
                            await handleFileUpload(file);
                          }
                        }}
                      />
                    </label>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs sm:text-sm text-slate-400">
                        PNG, JPG, PDF — max 10MB
                      </span>
                      {selectedFileName && (
                        <div className="flex items-center gap-2">
                          <span className="flex items-center gap-1 text-xs text-green-600">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {selectedFileName}
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              setUploadedFileUrl(null);
                              setSelectedFileName(null);
                              document.getElementById("polis").value = "";
                            }}
                            className="text-xs text-red-600 hover:text-red-800"
                          >
                            Verwijderen
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  {uploadError && (
                    <p className="mt-1 text-xs text-red-600 sm:text-sm">
                      {uploadError}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="opmerking"
                    className="block text-xs font-medium sm:text-sm text-slate-700"
                  >
                    Opmerking
                  </label>
                  <textarea
                    id="opmerking"
                    rows="4"
                    placeholder="Eventuele toelichting..."
                    disabled={isSubmitting}
                    className={`mt-1.5 sm:mt-2 block w-full resize-none rounded-lg border px-3 sm:px-4 py-2.5 sm:py-3 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1b7ced] disabled:opacity-50 ${
                      errors.opmerking
                        ? "border-red-300 bg-red-50"
                        : "border-gray-200 bg-gray-50"
                    }`}
                    {...register("opmerking", {
                      maxLength: {
                        value: 500,
                        message:
                          "Opmerking mag maximaal 500 karakters bevatten",
                      },
                    })}
                  />
                  {errors.opmerking && (
                    <p className="mt-1 text-xs text-red-600 sm:text-sm">
                      {errors.opmerking.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4 sm:mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group relative inline-block text-base sm:text-lg font-medium py-2.5 sm:py-3 px-6 sm:px-8 rounded-md shadow-md-custom overflow-hidden transition-all duration-300 w-full ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#00af76] hover:bg-[#009865] text-white"
                  }`}
                >
                  {!isSubmitting && (
                    <span className="absolute top-0 w-full h-full transition-transform duration-500 ease-in-out transform -skew-x-12 -left-[105%] bg-gradient-to-r from-transparent to-white/30 group-hover:translate-x-[110%]"></span>
                  )}

                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 animate-spin"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Bezig met verzenden...
                      </>
                    ) : (
                      "Verzenden"
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormSection;
