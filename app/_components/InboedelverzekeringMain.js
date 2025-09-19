import Image from "next/image";
import Link from "next/link";

function InboedelverzekeringMain() {
  return (
    <div className="p-4 w-full h-[65vh] md:h-[75vh]">
      <div className="relative w-full h-full">
        <Image
          src="/img/father-teaching-son-play-guitar-daughter-helping-mother-kitchen.jpg"
          fill
          alt="Stijlvol interieur van een moderne woonkamer met een comfortabele bank"
          className="object-cover w-full h-full rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>

        <div
          className="
            absolute w-[90%] max-w-5xl
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            md:left-[10%] md:top-1/2 md:-translate-x-0 md:-translate-y-1/2
            md:w-auto 
          "
        >
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Inboedelverzekering Vergelijken
              <span className="block mt-2 text-2xl font-normal sm:text-3xl md:text-4xl">
                Bescherm alles wat je lief is.
              </span>
            </h1>

            <p className="mt-6 mb-10 text-base italic text-gray-100 md:text-lg">
              Van je bank tot je laptop en van je kleding tot je sieraden.{" "}
              <br className="hidden md:block" />
              Zorg ervoor dat je spullen goed verzekerd zijn tegen diefstal,
              brand en waterschade.
            </p>

            <Link
              href="/plan-een-gesprek"
              className="group relative inline-block text-lg font-medium
                bg-[#00af76] text-white 
                py-2 px-8 rounded-full
                shadow-md-custom
                overflow-hidden 
                transition-all duration-300
              "
            >
              <span className="absolute top-0 w-full h-full transition-transform duration-500 ease-in-out transform -skew-x-12 -left-[105%] bg-gradient-to-r from-transparent to-white/30 group-hover:translate-x-[110%]"></span>
              <span className="relative">Start gratis vergelijking</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InboedelverzekeringMain;
