import { CornerDownRight, CornerUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function OveronsMain() {
  return (
    <div className="w-full p-4">
      <div className="w-full pt-30 pb-10 lg:py-40 px-4 lg:h-130 bg-gradient-to-br from-[#09182b] from-30% to-[#193355] rounded-t-2xl">
        {/* ... (rest of the top section code remains the same) ... */}
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center gap-5 text-center lg:justify-between lg:mx-0 lg:text-left lg:gap-10 lg:flex-row">
            <h1 className="text-5xl min-[1200px]:text-6xl text-white">
              Wie zit er achter <p>de check?</p>
            </h1>
            <p className="w-full text-gray-300 sm:w-120">
              Verzekeringen vergelijken saai en ingewikkeld? Niet met ons!
              Checkmijnverzekering maakt het makkelijk, overzichtelijk en
              eerlijk. Zo hou jij meer tijd en geld over voor de dingen die écht
              belangrijk zijn.
            </p>
            <Link
              href="/plan-een-gesprek"
              className=" bg-[#00af76] lg:hidden flex shadow-md-custom rounded-2xl text-white px-6 py-2  gap-4 items-center group text-lg font-medium overflow-hidden transition-all duration-300"
            >
              <span className="absolute top-0 w-full h-full transition-transform duration-500 ease-in-out transform -skew-x-12 -left-[105%] bg-gradient-to-r from-transparent to-white/30 group-hover:translate-x-[110%] hidden lg:block"></span>
              <span className="relative">Start vergelijken</span>
              <CornerDownRight className="w-5 h-5 text-white" />
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:pt-60 px-4 pb-30 bg-radial from-[#282828] to-[#181818] rounded-b-2xl">
        <div className="relative mx-auto max-w-7xl">
          {/* ... (rest of the SVG/image/link section code remains the same) ... */}
          <div className="absolute bg-[#00af76] lg:block hidden rounded-full w-7 h-7 -top-110.5 left-95 z-20" />
          <Link
            href="#"
            className="absolute bg-[#00af76] hidden shadow-md-custom rounded-2xl text-white -top-100 z-15 left-20 px-6 py-2 lg:flex gap-4 items-center group text-lg font-medium overflow-hidden transition-all duration-300"
          >
            <span className="absolute top-0 w-full h-full transition-transform duration-500 ease-in-out transform -skew-x-12 -left-[105%] bg-gradient-to-r from-transparent to-white/30 group-hover:translate-x-[110%]"></span>
            <span className="relative">Start vergelijken</span>
            <CornerDownRight className="w-5 h-5 text-white" />
          </Link>
          <div>
            <svg
              className="absolute hidden w-full h-105 z-5 -top-110 lg:block"
              viewBox="0 0 400 100"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="1"
                width="398"
                height="98"
                rx="170"
                stroke="white"
                strokeWidth="0.1"
                strokeDasharray="3 3"
              />
            </svg>
            <Image
              src="/img/over-ons-shaped-image.svg"
              alt="wavy line"
              width={2000}
              height={1200}
              className="absolute left-0 z-10 hidden w-full mx-auto -top-115 h-110 rounded-2xl lg:block"
              priority
            />
          </div>
          <div className="flex flex-col items-center justify-center text-center lg:flex-row lg:text-left lg:justify-between">
            <p className="mt-10 text-4xl text-white">
              Uw Zekerheid In Vier Heldere <br /> Stappen
            </p>
            <p className="mt-10 text-gray-300 sm:w-100">
              Van onduidelijkheid naar een persoonlijk plan dat perfect aansluit
              op uw leven. Wij nemen u bij de hand, stap voor stap.
            </p>
          </div>
          <div className="grid items-stretch grid-cols-1 gap-4 mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:mt-20">
            {/** Card 1 */}
            <div className="relative flex flex-col items-center justify-start h-full group">
              <div className="w-4 h-4 mb-5 rounded-full bg-gray-700/30 group-hover:bg-[#1b7ced] duration-300 transition-all" />
              <div className="absolute w-10 h-10 rounded-full bg-inherit group-hover:bg-[#1b7ced] -right-2 top-6 duration-300 transition-all" />
              <div className="relative flex flex-col h-full overflow-hidden text-center transition-transform duration-300 bg-transparent border border-gray-600 rounded-2xl shadow-md-custom backdrop-blur-md group-hover:-translate-y-1">
                {/* --- AANPASSING HIER: 'backdrop-blur-md' verwijderd --- */}
                <div className="relative overflow-hidden pt-6 px-4 pb-6 bg-radial from-[#00af76]/10 from-20% to-[#004931]/10 to-70% rounded-t-2xl h-28 md:h-25 lg:h-30 content-center">
                  <div className="absolute inset-0 bg-radial from-[#E6E6E6]/10 to-[#8b8b8b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <p className="relative text-white">
                    Kennismaking & Inventarisatie
                  </p>
                </div>
                <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 bg-gray-600 rounded-full -mt-6 mx-auto group-hover:bg-[#1b7ced] transition-all duration-300">
                  <p className="text-2xl text-white">01</p>
                </div>
                <div className="flex-grow p-4">
                  <p className="text-gray-300">
                    In een vrijblijvend gesprek brengen we uw huidige situatie,
                    wensen en toekomstplannen in kaart. We luisteren naar wat
                    voor u echt belangrijk is.
                  </p>
                </div>
              </div>
            </div>

            {/** Card 2 */}
            <div className="relative flex flex-col items-center justify-start h-full group">
              <div className="w-4 h-4 mb-5 rounded-full bg-gray-700/30 group-hover:bg-[#1b7ced] duration-300 transition-all" />
              <div className="absolute w-10 h-10 rounded-full bg-inherit group-hover:bg-[#1b7ced] -right-2 top-6 duration-300 transition-all" />
              <div className="relative flex flex-col h-full overflow-hidden text-center transition-transform duration-300 bg-transparent border border-gray-600 rounded-2xl shadow-md-custom backdrop-blur-md group-hover:-translate-y-1">
                {/* --- AANPASSING HIER: 'backdrop-blur-md' verwijderd --- */}
                <div className="relative overflow-hidden pt-6 px-4 pb-6 bg-radial from-[#00af76]/10 from-20% to-[#004931]/10 to-70% rounded-t-2xl h-28 md:h-25 lg:h-30 content-center">
                  <div className="absolute inset-0 bg-radial from-[#E6E6E6]/10 to-[#8b8b8b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <p className="relative text-white">Analyse & Vergelijking</p>
                </div>
                <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 bg-gray-600 rounded-full -mt-6 mx-auto group-hover:bg-[#1b7ced] transition-all duration-300">
                  <p className="text-2xl text-white">02</p>
                </div>
                <div className="flex-grow p-4">
                  <p className="text-gray-300">
                    Met onze expertise analyseren we uw huidige polissen en
                    vergelijken we onafhankelijk het aanbod van de beste
                    verzekeraars op prijs én voorwaarden.
                  </p>
                </div>
              </div>
            </div>

            {/** Card 3 */}
            <div className="relative flex flex-col items-center justify-start h-full group">
              <div className="w-4 h-4 mb-5 rounded-full bg-gray-700/30 group-hover:bg-[#1b7ced] duration-300 transition-all" />
              <div className="absolute w-10 h-10 rounded-full bg-inherit group-hover:bg-[#1b7ced] -right-2 top-6 duration-300 transition-all" />
              <div className="relative flex flex-col h-full overflow-hidden text-center transition-transform duration-300 bg-transparent border border-gray-600 rounded-2xl shadow-md-custom backdrop-blur-md group-hover:-translate-y-1">
                {/* --- AANPASSING HIER: 'backdrop-blur-md' verwijderd --- */}
                <div className="relative overflow-hidden pt-6 px-4 pb-6 bg-radial from-[#00af76]/10 from-20% to-[#004931]/10 to-70% rounded-t-2xl h-28 md:h-25 lg:h-30 content-center">
                  <div className="absolute inset-0 bg-radial from-[#E6E6E6]/10 to-[#8b8b8b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <p className="relative text-white">Persoonlijk Advies</p>
                </div>
                <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 bg-gray-600 rounded-full -mt-6 mx-auto group-hover:bg-[#1b7ced] transition-all duration-300">
                  <p className="text-2xl text-white">03</p>
                </div>
                <div className="flex-grow p-4">
                  <p className="text-gray-300">
                    U ontvangt een helder en begrijpelijk advies. We leggen de
                    voor- en nadelen uit en tonen waar u kunt besparen of uw
                    dekking kunt verbeteren.
                  </p>
                </div>
              </div>
            </div>

            {/** Card 4 */}
            <div className="relative flex flex-col items-center justify-start h-full group">
              <div className="w-4 h-4 mb-5 rounded-full bg-gray-700/30 group-hover:bg-[#1b7ced] duration-300 transition-all" />
              <div className="absolute w-10 h-10 rounded-full bg-inherit group-hover:bg-[#1b7ced] -right-2 top-6 duration-300 transition-all" />
              <div className="relative flex flex-col h-full overflow-hidden text-center transition-transform duration-300 bg-transparent border border-gray-600 rounded-2xl shadow-md-custom backdrop-blur-md group-hover:-translate-y-1">
                {/* --- AANPASSING HIER: 'backdrop-blur-md' verwijderd --- */}
                <div className="relative overflow-hidden pt-6 px-4 pb-6 bg-radial from-[#00af76]/10 from-20% to-[#004931]/10 to-70% rounded-t-2xl h-28 md:h-25 lg:h-30 content-center">
                  <div className="absolute inset-0 bg-radial from-[#E6E6E6]/10 to-[#8b8b8b]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <p className="relative text-white">Implementatie & Service</p>
                </div>
                <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 bg-gray-600 rounded-full -mt-6 mx-auto group-hover:bg-[#1b7ced] transition-all duration-300">
                  <p className="text-2xl text-white">04</p>
                </div>
                <div className="flex-grow p-4">
                  <p className="text-gray-300">
                    Gekozen? Wij regelen de volledige overstap of aanvraag van A
                    tot Z. Ook daarna blijven wij uw vaste aanspreekpunt voor
                    vragen, wijzigingen en hulp bij schade.
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* end grid */}
        </div>
      </div>
    </div>
  );
}

export default OveronsMain;
