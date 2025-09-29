import Image from "next/image";
import Link from "next/link";

function InboedelverzekeringCards() {
  return (
    <div className="px-4 mt-20 mb-30">
      <div className="max-w-md mx-auto mb-12 text-center">
        <p className="mb-4 text-3xl font-medium">Hoe werkt het?</p>
        <p className="text-gray-600">
          In drie heldere stappen bepalen we samen de juiste dekking voor jouw
          persoonlijke bezittingen.
        </p>
      </div>

      <div className="relative grid items-center justify-center max-w-5xl grid-cols-1 gap-6 mx-auto md:grid-cols-3">
        <div className="absolute bg-[#00af76] rounded-full w-40 h-40 -top-10 -left-10"></div>
        <div className="flex flex-col items-center h-full px-6 py-5 text-center border border-white rounded-2xl backdrop-blur-md bg-gray-400/20 shadow-md-custom">
          <Image
            src="/img/bank-icon.png"
            width={60}
            height={60}
            alt="Bankstel icoon"
            className="w-20 h-20 mb-4"
          />
          <p className="mb-5 text-xl font-semibold">Bepaal de waarde</p>
          <p className="mb-5 text-gray-600">
            Aan de hand van je gezinssamenstelling, inkomen en type woning
            schatten we de waarde van je inboedel met de inboedelwaardemeter.
          </p>
          <Link
            href="/plan-een-gesprek"
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
            src="/img/encrypted.png"
            width={60}
            height={60}
            alt="Schild icoon"
            className="w-20 h-20 mb-4"
          />
          <p className="mb-5 text-xl font-semibold">Vergelijk dekkingen</p>
          <p className="mb-5 text-gray-600">
            Kies tussen een basis- of allriskdekking en bekijk aanvullende
            opties voor glas, sieraden of je mobiele elektronica.
          </p>
          <Link
            href="/plan-een-gesprek"
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
            src="/img/right-arrow.png"
            width={60}
            height={60}
            alt="Pijlen icoon"
            className="w-20 h-20 mb-4"
          />
          <p className="mb-5 text-xl font-semibold">Kies & wees verzekerd</p>
          <p className="mb-5 text-gray-600">
            De beste polis gevonden? Wij regelen de aanvraag en zorgen ervoor
            dat je spullen direct goed verzekerd zijn.
          </p>
          <Link
            href="/plan-een-gesprek"
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

export default InboedelverzekeringCards;
