import { Car, HousePlus, Plane } from "lucide-react";
import Image from "next/image";

function VerzekeringenMain() {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full px-4 py-40 overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #355371 0%, #84a3ca 50%, #d0dae7 75%, #ffffff 100%)",
      }}
    >
      <div className="absolute hidden sm:block hexagon -right-35 top-50 opacity-30"></div>
      <div className="absolute hidden sm:block hexagon-small right-10 top-60 opacity-30"></div>

      <div className="absolute hidden sm:block hexagon -left-35 top-80 opacity-30"></div>
      <div className="absolute hidden sm:block hexagon-small left-10 top-90 opacity-30"></div>
      <h1 className="text-4xl font-bold text-center text-white">
        Al je verzekeringen. Eén plek. De beste deal.
      </h1>
      <p className="mt-6 italic text-center text-gray-200">
        Krijg grip op je vaste lasten. Vergelijk onafhankelijk het grootste
        <br /> aanbod van verzekeraars en vind de beste dekking die perfect bij
        jou <br /> past, zonder gedoe.
      </p>
      <div className="grid w-full max-w-5xl grid-cols-1 mt-10 md:grid-cols-3 gap-7">
        <div className="relative">
          <div className="absolute inset-0 bg-gray-300 rounded-2xl blur-md"></div>
          <div className="relative flex flex-col items-center w-full h-full px-6 py-8 bg-white rounded-2xl md:-rotate-2">
            <Image
              src="/img/Generated-Image-September-11-2025-10_11AM.png"
              width={170}
              height={170}
              alt="Car icon"
            />
            <p className="mt-4 text-xl font-medium">Vervoer & Mobiliteit</p>
            <p className="mt-5 text-center text-gray-600">
              Of je nu de weg op gaat met de auto, motor of scooter. Vind de
              beste dekking en de scherpste premie voor jouw voertuig.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gray-300 rounded-2xl blur-md"></div>
          <div className="relative flex flex-col items-center w-full h-full px-6 py-8 -mt-2 bg-white rounded-2xl">
            <Image
              src="/img/Generated-Image-September-11-2025-10_13AM.png"
              width={170}
              height={170}
              alt="Car icon"
            />
            <p className="mt-4 text-xl font-medium">Wonen & Leven</p>
            <p className="mt-5 text-center text-gray-600">
              Bescherm je huis, je waardevolle spullen en jezelf tegen
              onverwachte gebeurtenissen. Vergelijk woon en
              aansprakelijkheidsverzekeringen.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gray-300 rounded-2xl blur-md"></div>
          <div className="relative flex flex-col items-center w-full h-full px-6 py-8 bg-white rounded-2xl md:rotate-2">
            <Image
              src="/img/Generated-Image-September-11-2025-10_14AM.png"
              width={170}
              height={170}
              alt="Car icon"
            />
            <p className="mt-4 text-xl font-medium">Persoonlijk & Reizen</p>
            <p className="mt-5 text-center text-gray-600">
              Ga met een gerust hart op reis, zorg voor je gezondheid of bied
              financiële zekerheid aan je naasten. Vind de verzekering die past
              bij jouw leven.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerzekeringenMain;
