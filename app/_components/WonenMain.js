import { Car, HousePlus, Plane } from "lucide-react";
import Image from "next/image";

function WonenMain() {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-full pt-40 pb-5 overflow-hidden md:py-40"
      style={{
        background:
          "linear-gradient(to bottom, #355371 0%, #84a3ca 50%, #d0dae7 75%, #ffffff 100%)",
      }}
    >
      <div className="absolute hidden md:block hexagon -right-35 top-50 opacity-30"></div>
      <div className="absolute hidden md:block hexagon-small right-10 top-60 opacity-30"></div>

      <div className="absolute hidden md:block hexagon -left-35 top-80 opacity-30"></div>
      <div className="absolute hidden md:block hexagon-small left-10 top-90 opacity-30"></div>
      <h1 className="px-4 text-4xl font-bold text-center text-white">
        Verzekeringen voor uw Huis en Thuis
      </h1>
      <p className="px-4 my-6 italic text-center text-gray-200 md:w-190">
        Uw huis is meer dan alleen muren en een dak. het is de plek waar u
        leeft, lacht en zich veilig voelt. Met het juiste woonpakket beschermt u
        niet alleen uw kostbaarste bezit, maar ook de waardevolle spullen en de
        mensen erin. Wij helpen u een complete dekking samen te stellen die
        perfect aansluit op uw woonsituatie.
      </p>
      <div className="grid w-full h-full grid-cols-1 px-4 mt-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-7">
        <div className="relative">
          <div className="relative flex flex-col items-center w-full h-full px-6 py-8 bg-white rounded-2xl">
            <Image
              src="/img/Generated Image September 11, 2025 - 10_13AM.png"
              width={170}
              height={170}
              alt="Car icon"
            />
            <p className="mt-4 text-base font-medium">Opstalverzekering</p>
            <p className="mt-5 text-center text-gray-600">
              De verzekering voor uw woning zelf. Dekt schade aan de muren, het
              dak en alles wat &apos;aard en nagelvast&apos; zit, zoals uw
              keuken en badkamer.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative flex flex-col items-center w-full h-full px-6 py-8 bg-white rounded-2xl">
            <Image
              src="/img/Generated Image September 12, 2025 - 2_42PM.png"
              width={170}
              height={170}
              alt="Car icon"
            />
            <p className="mt-4 text-base font-medium">Inboedelverzekering</p>
            <p className="mt-5 text-center text-gray-600">
              Bescherm al uw waardevolle spullen in huis tegen diefstal, brand
              en waterschade. Van uw meubels en elektronica tot uw kleding en
              sieraden.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative flex flex-col items-center w-full h-full px-6 py-8 bg-white rounded-2xl">
            <Image
              src="/img/Generated Image September 12, 2025 - 2_44PM.png"
              width={170}
              height={170}
              alt="Car icon"
            />
            <p className="mt-4 text-base font-medium">
              Aansprakelijkheidsverzekering
            </p>
            <p className="mt-5 text-center text-gray-600">
              Een ongeluk zit in een klein hoekje. Deze onmisbare verzekering
              dekt de schade die u of uw gezinsleden per ongeluk bij anderen
              veroorzaken.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative flex flex-col items-center w-full h-full px-6 py-8 bg-white rounded-2xl">
            <Image
              src="/img/Generated Image September 12, 2025 - 2_51PM.png"
              width={170}
              height={170}
              alt="Car icon"
            />
            <p className="mt-4 text-base font-medium">Glasverzekering</p>
            <p className="mt-5 text-center text-gray-600">
              Een snelle en vakkundige oplossing bij een gebroken ruit in uw
              deuren of ramen. Vaak zonder eigen risico en inclusief
              herstelservice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WonenMain;
