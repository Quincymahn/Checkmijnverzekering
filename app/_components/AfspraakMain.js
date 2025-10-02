"use client";

import React from "react";
import Image from "next/image";
import Form from "./Form"; // Importeer het nieuwe Form component

function AfspraakMain() {
  return (
    <section className="relative flex justify-center px-3 sm:px-4 pt-24 sm:pt-32 lg:pt-40 pb-6 sm:pb-10 overflow-hidden rounded-2xl bg-[#09182b]">
      <div className="absolute inset-0 z-0 -top-1">
        <Image
          src="/img/Line 21.svg"
          alt="wavy line"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative w-full max-w-7xl">
        <div className="px-2 text-center">
          <h2 className="mb-3 text-2xl font-medium text-white sm:mb-4 sm:text-3xl">
            We helpen u graag verder!
          </h2>
          <p className="text-sm text-gray-300 sm:text-base">
            Binnen enkele minuten helder inzicht in{" "}
            <br className="hidden sm:block" />
            <span className="sm:hidden">
              premie, dekking en kleine lettertjes
            </span>
            <span className="hidden sm:inline">
              premie, dekking en kleine lettertjes
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-6 sm:gap-6 lg:gap-8 sm:mt-8 lg:mt-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Visuele sectie - ongewijzigd */}
          <div className="hidden sm:flex order-2 w-full gap-4 lg:flex-col md:col-span-2 max-[650px]:flex-col lg:order-none">
            <div className="flex-1 w-full bg-white rounded-2xl shadow-md-custom">
              <div className="flex items-center justify-center w-full h-full p-4">
                <div className="w-48 h-48 sm:w-60 sm:h-60 border border-[#1b7ced] p-6 sm:p-8 rounded-full relative">
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
                  <div className="w-full h-full border border-[#1b7ced]/60 p-6 sm:p-8 rounded-full relative">
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
              <p className="absolute bottom-0 left-0 w-full px-4 py-4 text-xs font-medium text-center text-white sm:text-sm sm:py-7 sm:px-15 bg-gray-700/40 backdrop-blur-sm rounded-b-2xl">
                Persoonlijke & heldere begeleiding. upload uw polis voor een
                snelle analyse.
              </p>
            </div>
          </div>

          {/* Formulier sectie */}
          <div className="order-1 col-span-1 md:col-span-2 lg:order-none lg:col-span-3">
            <Form /> {/* Gebruik hier het nieuwe, herbruikbare component */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AfspraakMain;
