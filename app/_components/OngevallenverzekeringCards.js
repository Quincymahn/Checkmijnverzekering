import Image from "next/image";
import Link from "next/link";

function OngevallenverzekeringCards() {
  return (
    <div className="px-4 mt-20 mb-30">
      <div className="mx-auto mb-12 text-center">
        <p className="mb-4 text-3xl font-medium ">
          Waarom een Ongevallenverzekering?
        </p>
        <p className="max-w-md mx-auto text-gray-600">
          Het biedt financiële ruimte om uw leven aan te passen na een ongeval
          met blijvende gevolgen, ongeacht wie er schuld had.
        </p>
      </div>

      <div className="relative grid items-center justify-center max-w-5xl grid-cols-1 gap-6 mx-auto md:grid-cols-3">
        <div className="absolute bg-[#00af76] rounded-full w-40 h-40 -top-10 -left-10"></div>
        <div className="flex flex-col items-center h-full px-6 py-5 text-center border border-white rounded-2xl backdrop-blur-md bg-gray-400/20 shadow-md-custom">
          <Image
            src="/img/money.png" // <-- Nieuw relevant icoon
            width={60}
            height={60}
            alt="Financiële steun icoon"
            className="w-20 h-20 mb-4"
          />
          <p className="mb-5 text-xl font-semibold">Eenmalige uitkering</p>
          <p className="mb-5 text-gray-600">
            U ontvangt een afgesproken bedrag om bijvoorbeeld uw huis aan te
            passen, hulpmiddelen aan te schaffen of inkomensverlies op te
            vangen.
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
            src="/img/world.png" // <-- Nieuw relevant icoon
            width={60}
            height={60}
            alt="24/7 icoon"
            className="w-20 h-20 mb-4"
          />
          <p className="mb-5 text-xl font-semibold">24/7 Wereldwijde dekking</p>
          <p className="mb-5 text-gray-600">
            Of het ongeval nu thuis gebeurt, op uw werk, in het verkeer of op
            vakantie, u bent overal en altijd verzekerd.
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
            src="/img/family.webp"
            width={60}
            height={60}
            alt="Gezin icoon"
            className="w-20 h-20 mb-4"
          />
          <p className="mb-5 text-xl font-semibold">Voor het hele gezin</p>
          <p className="mb-5 text-gray-600">
            Kies voor een gezinsongevallenverzekering en zorg ervoor dat ook uw
            partner en kinderen financieel beschermd zijn.
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

export default OngevallenverzekeringCards;
