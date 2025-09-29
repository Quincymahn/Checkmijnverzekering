import Image from "next/image";
import Link from "next/link";

function Main() {
  return (
    // We gebruiken 'min-h-screen' in plaats van 'h-screen' voor meer flexibiliteit op mobiel
    <div className="w-full md:h-screen h-[75vh] p-2 sm:p-4">
      <div className="relative w-full h-full">
        {" "}
        {/* Min-hoogte voor de container */}
        <Image
          src="/img/woman-driving-searching-camping-place.jpg"
          width={2000}
          height={2000}
          alt="Main hero section"
          // Op mobiel focussen we op het midden ('object-center'), op desktop meer naar rechts
          className="object-cover object-center w-full h-full rounded-2xl lg:object-right-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-100% via-black/30 to-transparent rounded-2xl"></div>
        {/*
          POSITIE & UITLIJNING AANGEPAST VOOR MOBIEL:
          - Standaard (mobiel): Gecentreerd, onderaan de pagina met padding.
          - Vanaf 'lg' (desktop): Links uitgelijnd en in het midden.
        */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center md:items-start md:justify-center md:p-0 md:text-left md:left-1/10 md:w-auto">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Slim vergelijken, <br />
            slimmer verzekeren.
          </h1>
          <Link
            href="/plan-een-gesprek"
            className="
              group relative inline-block text-lg font-medium
              bg-[#00af76] text-white 
              py-2 px-8 rounded-full
              shadow-lg
              overflow-hidden
              transition-transform duration-300 hover:scale-105
            "
          >
            <span className="absolute top-0 w-full h-full transition-transform duration-500 ease-in-out transform -skew-x-12 -left-[105%] bg-gradient-to-r from-transparent to-white/30 group-hover:translate-x-[110%]"></span>
            <span className="relative">Start met vergelijken →</span>
          </Link>
        </div>
        {/*
          POSITIE VAN DE REVIEW-KAART AANGEPAST:
          - Standaard (mobiel): Niet zichtbaar ('hidden').
          - Vanaf 'md' (tablet): Zichtbaar rechtsonder.
        */}
        <div className="absolute flex overflow-hidden shadow-lg bg-white/90 backdrop-blur-sm right-5 bottom-5 rounded-2xl">
          <Image
            src="/img/5369647.jpg"
            width={120}
            height={160} // Aangepaste maten
            alt="Illustratie van tevreden klanten"
            className="hidden object-cover md:h-40 md:w-28 md:block" // Vaste maten
          />
          <div className="flex flex-col justify-center gap-3 px-4 py-2">
            <Image
              src="/img/5369647.jpg"
              width={120}
              height={160} // Aangepaste maten
              alt="Illustratie van tevreden klanten"
              className="absolute top-0 left-0 block object-cover w-full h-full md:hidden" // Vaste maten
            />{" "}
            <div className="absolute top-0 left-0 block w-full h-full bg-black/40 md:hidden"></div>
            {/* Padding en gap aangepast */}
            <div className="relative z-10 flex flex-col justify-around h-full space-y-1">
              <p className="text-xl font-bold text-white md:text-3xl md:text-black">
                5000+
              </p>
              <div className="flex">
                <Image
                  src="/img/handsome-happy-bearded-man.jpg"
                  width={32}
                  height={32}
                  alt="Profielfoto van een klant"
                  className="object-cover w-8 h-8 border-2 border-white rounded-full"
                />
                <Image
                  src="/img/business-man-by-skyscraper.jpg"
                  width={32}
                  height={32}
                  alt="Profielfoto van een klant"
                  className="object-cover w-8 h-8 -ml-2 border-2 border-white rounded-full"
                />
                <Image
                  src="/img/close-up-blonde-woman-outdoors.jpg"
                  width={32}
                  height={32}
                  alt="Profielfoto van een klant"
                  className="object-cover w-8 h-8 -ml-2 border-2 border-white rounded-full"
                />
              </div>
              <p className="text-sm font-medium text-white md:text-base md:text-gray-800 md:font-base">
                Tevreden klanten
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
