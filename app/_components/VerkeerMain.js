import { Car, HousePlus, Plane } from "lucide-react";
import Image from "next/image";

function VerkeerMain() {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-full pt-40 pb-5 overflow-hidden md:py-40"
      style={{
        background:
          "linear-gradient(to bottom, #355371 0%, #84a3ca 50%, #d0dae7 75%, #ffffff 100%)",
      }}
    >
      <div className="absolute hidden hexagon md:block -right-35 top-50 opacity-30"></div>
      <div className="absolute hidden hexagon-small md:block right-10 top-60 opacity-30"></div>

      <div className="absolute hidden hexagon md:block -left-35 top-80 opacity-30"></div>
      <div className="absolute hidden hexagon-small md:block left-10 top-90 opacity-30"></div>
      <h1 className="px-4 text-4xl font-bold text-center text-white">
        Verzekeringen voor uw Voertuig
      </h1>
      <p className="px-4 my-6 italic text-center text-gray-200 md:w-190">
        Of u nu dagelijks de weg op gaat met uw auto, in het weekend toert op de
        motor, of uw klassieker koestert, uw voertuig verdient de beste
        bescherming. Met het juiste verzekeringspakket bent u gedekt tegen
        schade, diefstal en aansprakelijkheid. Wij helpen u de polis te vinden
        die perfect aansluit op uw voertuig en uw rijgedrag.
      </p>
      <div className="grid w-full h-full grid-cols-1 px-4 mt-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-7">
        <div className="relative">
          <div className="relative flex flex-col items-center w-full h-full px-6 py-8 bg-white rounded-2xl">
            <Image
              src="/img/Generated-Image-September-11-2025-10_11AM.png"
              width={170}
              height={170}
              alt="Car icon"
            />
            <p className="mt-4 text-base font-medium">Autoverzekering</p>
            <p className="mt-5 text-center text-gray-600">
              De juiste dekking voor uw personenauto. Van de verplichte
              WA-verzekering tot een complete Allrisk-polis die ook schade aan
              uw eigen auto dekt.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative flex flex-col items-center w-full h-full px-6 py-8 bg-white rounded-2xl">
            <Image
              src="/img/Generated-Image-September-15-2025-2_49PM.png"
              width={170}
              height={170}
              alt="Car icon"
            />
            <p className="mt-4 text-base font-medium">Motorverzekering</p>
            <p className="mt-5 text-center text-gray-600">
              Speciaal voor uw motor of scooter. Een verzekering die rekening
              houdt met seizoensgebruik, de waarde van uw kleding en
              accessoires.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative flex flex-col items-center w-full h-full px-6 py-8 bg-white rounded-2xl">
            <Image
              src="/img/Generated-Image-September-15-2025-2_45PM.png"
              width={170}
              height={170}
              alt="Car icon"
            />
            <p className="mt-4 text-base font-medium">Oldtimerverzekering</p>
            <p className="mt-5 text-center text-gray-600">
              Een unieke verzekering voor uw klassieker. Gebaseerd op
              taxatiewaarde in plaats van dagwaarde, voor liefhebbers die hun
              passie goed willen verzekeren.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative flex flex-col items-center w-full h-full px-6 py-8 bg-white rounded-2xl">
            <Image
              src="/img/Generated-Image-September-15-2025-2_52PM.png"
              width={170}
              height={170}
              alt="Car icon"
            />
            <p className="mt-4 text-base font-medium">Bestelautoverzekering</p>
            <p className="mt-5 text-center text-gray-600">
              Of u uw bestelauto nu zakelijk of particulier gebruikt, wij vinden
              de polis die past bij uw situatie, inclusief opties voor uw lading
              en gereedschap.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerkeerMain;
