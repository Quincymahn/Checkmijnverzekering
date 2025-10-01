"use client";

import React from "react";
import Image from "next/image";
import Form from "./Form"; // Stap 1: Importeer het herbruikbare Form component

function FormSection() {
  // Stap 2: Alle formulier-logica (useState, useForm, functies) is hier verwijderd.
  // De component is nu alleen verantwoordelijk voor de layout van de sectie.

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
          {/* Visuele sectie - ongewijzigd */}
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

          {/* Formulier sectie */}
          <div className="order-1 col-span-1 md:col-span-2 lg:order-none lg:col-span-3">
            {/* Stap 3: Vervang de hele <form>...</form> blok met het <Form /> component */}
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormSection;
