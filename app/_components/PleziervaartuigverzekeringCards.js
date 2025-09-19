import Image from "next/image";
import Link from "next/link";

function PleziervaartuigverzekeringCards() {
  return (
    <div className="px-4 mt-20 mb-30">
      <div className="mx-auto mb-12 text-center">
        <p className="mb-4 text-3xl font-medium ">
          Waarom uw Boot Verzekeren?{" "}
        </p>
        <p className="max-w-md mx-auto text-gray-600">
          Een goede bootverzekering is niet altijd verplicht, maar wel
          essentieel. Het beschermt u tegen de hoge kosten van schade, diefstal
          en aansprakelijkheid op het water.
        </p>
      </div>

      <div className="relative grid items-center justify-center max-w-5xl grid-cols-1 gap-6 mx-auto md:grid-cols-3">
        <div className="absolute bg-[#00af76] rounded-full w-40 h-40 -top-10 -left-10"></div>
        <div className="flex flex-col items-center h-full px-6 py-5 text-center border border-white rounded-2xl backdrop-blur-md bg-gray-400/20 shadow-md-custom">
          <Image
            src="/img/anchor.png" // <-- Nieuw relevant icoon
            width={60}
            height={60}
            alt="Anker icoon"
            className="w-20 h-20 mb-4"
          />
          <p className="mb-5 text-xl font-semibold">Aansprakelijkheid</p>
          <p className="mb-5 text-gray-600">
            Een aanvaring kan enorme (letsel)schade veroorzaken. De WA-dekking
            beschermt u tegen claims, en is in veel havens verplicht.
          </p>
          <Link
            href="#"
            className="text-[#1b7ced] hover:text-blue-800 transition-all duration-300 group mt-auto"
          >
            Ga er naartoe{" "}
            <span className="transition-all duration-300 group-hover:ml-1">
              →
            </span>
          </Link>
        </div>
        <div className="flex flex-col items-center h-full px-6 py-5 text-center border border-white rounded-2xl backdrop-blur-md bg-gray-400/20 shadow-md-custom">
          <Image
            src="/img/speed-boat.png" // <-- Nieuw relevant icoon
            width={60}
            height={60}
            alt="Boot met schade icoon"
            className="w-20 h-20 mb-4"
          />
          <p className="mb-5 text-xl font-semibold">Schade & Diefstal</p>
          <p className="mb-5 text-gray-600">
            Met een Casco-dekking is uw eigen boot verzekerd tegen schade door
            aanvaring, brand, vandalisme en diefstal.
          </p>
          <Link
            href="#"
            className="text-[#1b7ced] hover:text-blue-800 transition-all duration-300 group mt-auto"
          >
            Ga er naartoe{" "}
            <span className="transition-all duration-300 group-hover:ml-1">
              →
            </span>
          </Link>
        </div>
        <div className="flex flex-col items-center h-full px-6 py-5 text-center border border-white rounded-2xl backdrop-blur-md bg-gray-400/20 shadow-md-custom">
          <Image
            src="/img/propeller.png" // <-- Nieuw relevant icoon
            width={60}
            height={60}
            alt="Trailer icoon"
            className="w-20 h-20 mb-4"
          />
          <p className="mb-5 text-xl font-semibold">Motor & Trailer</p>
          <p className="mb-5 text-gray-600">
            Uw kostbare buitenboordmotor en boottrailer zijn diefstalgevoelig.
            Deze kunt u specifiek meeverzekeren.
          </p>
          <Link
            href="#"
            className="text-[#1b7ced] hover:text-blue-800 transition-all duration-300 group mt-auto"
          >
            Ga er naartoe{" "}
            <span className="transition-all duration-300 group-hover:ml-1">
              →
            </span>
          </Link>
        </div>
        <div className="absolute pointer-events-none -bottom-10 -right-10 w-23 h-23 -z-10">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <circle
              cx="50"
              cy="50"
              r="36"
              fill="none"
              stroke="#00af76"
              strokeWidth="16"
              strokeLinecap="round"
              strokeDasharray="240 360"
              transform="rotate(-18 50 50)"
            />
            <rect
              x="46"
              y="0"
              width="8"
              height="24"
              fill="#ffffff"
              transform="rotate(140 50 50)"
              rx="1"
            />
            <circle cx="50" cy="50" r="26" fill="#ffffff" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default PleziervaartuigverzekeringCards;
