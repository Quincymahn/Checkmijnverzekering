import Image from "next/image";
import Link from "next/link";

function RechtsbijstandverzekeringCards() {
  return (
    <div className="px-4 mt-20 mb-30">
      <div className="mx-auto mb-12 text-center">
        <p className="mb-4 text-3xl font-medium ">
          Waarom een Rechtsbijstandverzekering?
        </p>
        <p className="max-w-md mx-auto text-gray-600">
          Een juridisch geschil kan iedereen overkomen. Deze verzekering maakt
          het mogelijk om voor uw recht op te komen, zonder het risico op een
          torenhoge rekening.
        </p>
      </div>

      <div className="relative grid items-center justify-center max-w-5xl grid-cols-1 gap-6 mx-auto md:grid-cols-3">
        <div className="absolute bg-[#00af76] rounded-full w-40 h-40 -top-10 -left-10"></div>
        <div className="flex flex-col items-center h-full px-6 py-5 text-center border border-white rounded-2xl backdrop-blur-md bg-gray-400/20 shadow-md-custom">
          <Image
            src="/img/gavel.png" // <-- Nieuw relevant icoon
            width={60}
            height={60}
            alt="Hamer van een rechter icoon"
            className="w-20 h-20 mb-4"
          />
          <p className="mb-5 text-xl font-semibold">Juridische Experts</p>
          <p className="mb-5 text-gray-600">
            Krijg direct toegang tot een team van ervaren juristen en advocaten
            die u met raad en daad bijstaan.
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
            src="/img/pre-built-module.png"
            width={60}
            height={60}
            alt="Modulaire blokken icoon"
            className="w-20 h-20 mb-4"
          />
          <p className="mb-5 text-xl font-semibold">Dekking op Maat</p>
          <p className="mb-5 text-gray-600">
            Kies zelf welke modules (Consument, Wonen, Werk, Verkeer) u wilt
            verzekeren. Zo betaalt u nooit voor iets wat u niet nodig heeft.
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
            src="/img/affordable.png" // <-- Nieuw relevant icoon
            width={60}
            height={60}
            alt="Kosten besparen icoon"
            className="w-20 h-20 mb-4"
          />
          <p className="mb-5 text-xl font-semibold">Kosten Gedekt</p>
          <p className="mb-5 text-gray-600">
            De kosten van juridisch advies, experts, getuigen en zelfs de
            proceskosten worden door de verzekeraar betaald.
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

export default RechtsbijstandverzekeringCards;
