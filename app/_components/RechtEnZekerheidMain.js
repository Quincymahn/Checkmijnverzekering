import { Car, HousePlus, Plane } from "lucide-react";
import Image from "next/image";

function RechtEnZekerheidMain() {
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
        Verzekeringen voor Recht & Zekerheid
      </h1>
      <p className="px-4 my-6 italic text-center text-gray-200 md:w-190">
        Het leven is onvoorspelbaar. Een conflict, een ongeval of een overlijden
        kan uw wereld op zijn kop zetten. Met de juiste verzekeringen creëert u
        een financieel vangnet voor uzelf en uw dierbaren, zodat u ook in
        moeilijke tijden zekerheid heeft. Wij helpen u de risico&apos;s in kaart
        te brengen en de juiste dekking te vinden.
      </p>
      <div className="grid w-full h-full grid-cols-1 px-4 mt-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-7">
        <div className="relative">
          <div className="relative flex flex-col items-center w-full h-full px-6 py-8 bg-white rounded-2xl">
            <Image
              src="/img/Generated Image September 24, 2025 - 10_33AM.png"
              width={170}
              height={170}
              alt="Car icon"
            />
            <p className="mt-4 text-base font-medium">
              Rechtsbijstandverzekering
            </p>
            <p className="mt-5 text-center text-gray-600">
              Krijg toegang tot juridische experts bij conflicten over werk,
              wonen of in het verkeer, zonder angst voor hoge advocaatkosten.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative flex flex-col items-center w-full h-full px-6 py-8 bg-white rounded-2xl">
            <Image
              src="/img/Generated Image September 24, 2025 - 10_39AM.png"
              width={170}
              height={170}
              alt="Car icon"
            />
            <p className="mt-4 text-base font-medium">Ongevallenverzekering</p>
            <p className="mt-5 text-center text-gray-600">
              Een eenmalige uitkering na een ongeval met blijvende invaliditeit.
              Financiële ruimte om uw leven aan te passen als het tegenzit.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative flex flex-col items-center w-full h-full px-6 py-8 bg-white rounded-2xl">
            <Image
              src="/img/Generated Image September 24, 2025 - 10_50AM.png"
              width={170}
              height={170}
              alt="Car icon"
            />
            <p className="mt-4 text-base font-medium">
              Overlijdensrisicoverzekering
            </p>
            <p className="mt-5 text-center text-gray-600">
              Zorg ervoor dat uw dierbaren financieel beschermd zijn als u
              wegvalt. Essentieel voor het opvangen van de hypotheek en het
              inkomen.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative flex flex-col items-center w-full h-full px-6 py-8 bg-white rounded-2xl">
            <Image
              src="/img/Generated Image September 24, 2025 - 10_42AM.png"
              width={170}
              height={170}
              alt="Car icon"
            />
            <p className="mt-4 text-base font-medium">
              Aansprakelijkheidsverzekering
            </p>
            <p className="mt-5 text-center text-gray-600">
              Een onmisbaar vangnet dat de schade dekt die u of uw gezinsleden
              per ongeluk bij anderen veroorzaken.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RechtEnZekerheidMain;
