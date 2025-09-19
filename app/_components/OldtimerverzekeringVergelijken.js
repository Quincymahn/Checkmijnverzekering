import Image from "next/image";
import Link from "next/link";

function OldtimerverzekeringVergelijken() {
  return (
    <div className="relative flex flex-col w-full gap-10 px-6 py-16 lg:flex-row lg:gap-20 lg:items-center lg:py-16 lg:px-12 bg-gradient-to-br from-[#09182b] to-[#0F2542] rounded-2xl lg:rounded-r-none lg:rounded-l-2xl lg:w-[84%] lg:ml-auto">
      <div className="absolute hidden hexagon -right-35 top-22 opacity-5 lg:block"></div>
      <div className="absolute hidden hexagon-small right-10 top-32 opacity-5 lg:block"></div>

      <div className="relative flex-shrink-0 mx-auto lg:mx-0 lg:-ml-36">
        <div className="bg-[#00af76] rounded-full w-32 h-32 absolute -top-8 -right-8"></div>
        <div className="relative z-10 grid grid-cols-3 gap-3">
          {/* Re-mapped for easier maintenance */}
          {[
            "abnamro.png",
            "asn.png",
            "unive.png",
            "inshared.jpg",
            "nationalenederlanden.png",
            "goudseverzekeringen.png",
            "asr.png",
            "anwb.png",
            "abnamro.png",
          ].map((logo, index) => (
            <div
              key={index}
              className="relative z-10 flex items-center justify-center w-20 h-20 p-1 overflow-hidden bg-white border border-gray-300 rounded-2xl shadow-md-custom"
            >
              <Image
                src={`/img/${logo}`}
                width={100}
                height={100}
                alt={`${logo.split(".")[0]} logo`}
                className="object-contain w-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <p className="text-2xl font-medium text-white lg:text-3xl">
          Een breed aanbod van betrouwbare verzekeraars
        </p>
        <p className="mt-1 italic text-white">
          Vergelijk de beste verzekeraars van Nederland op één plek.
        </p>
        <ul className="mt-5 ml-4 space-y-3 text-gray-300 list-disc">
          <li>
            <b>100% Onafhankelijk:</b> Wij hebben geen voorkeur. De beste deal
            voor jou staat altijd voorop.
          </li>
          <li>
            <b>Compleet Overzicht:</b> Krijg direct inzicht in premies,
            dekkingen en voorwaarden.
          </li>
          <li>
            <b>Bespaar Direct:</b> Onze gebruikers besparen gemiddeld €120 per
            jaar op hun inboedelverzekering.
          </li>
        </ul>
        <p className="mt-6 mb-2 text-lg font-medium text-white">
          Klaar om de beste verzekering te vinden?
        </p>
        <Link
          href="/plan-een-gesprek"
          className="group relative inline-block self-start text-lg font-medium
            bg-[#00af76] text-white text-center
            py-2 px-6 rounded-full
            shadow-md-custom
            overflow-hidden
            transition-all duration-300
          "
        >
          <span className="absolute top-0 w-full h-full transition-transform duration-500 ease-in-out transform -skew-x-12 -left-[105%] bg-gradient-to-r from-transparent to-white/30 group-hover:translate-x-[110%]"></span>
          <span className="relative">Start vergelijken</span>
        </Link>
      </div>
    </div>
  );
}

export default OldtimerverzekeringVergelijken;
