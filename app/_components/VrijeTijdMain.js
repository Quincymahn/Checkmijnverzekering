import { Car, HousePlus, Plane } from "lucide-react";
import Image from "next/image";

function VrijeTijdMain() {
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
        Verzekeringen voor Vrije Tijd & Reizen
      </h1>
      <p className="px-4 my-6 italic text-center text-gray-200 md:w-190">
        Uw vrije tijd is kostbaar. Of u nu geniet van een welverdiende vakantie,
        een tocht maakt met de caravan of boot, of fietst door de natuur, wij
        zorgen ervoor dat u onbezorgd kunt ontspannen. Met de juiste
        verzekeringen bent u gedekt tegen onverwachte gebeurtenissen, waar uw
        avontuur u ook brengt.
      </p>
      <div className="grid w-full h-full grid-cols-1 px-4 mt-10 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-7">
        <div className="relative">
          <div className="relative flex flex-col items-center w-full h-full px-6 py-8 bg-white rounded-2xl">
            <Image
              src="/img/Generated-Image-September-24-2025-11_12AM.png"
              width={170}
              height={170}
              alt="Car icon"
            />
            <p className="mt-4 text-base font-medium">
              Reis- & Annuleringsverzekering
            </p>
            <p className="mt-5 text-center text-gray-600">
              Ga met een gerust hart op reis. Verzekerd tegen verloren bagage,
              onverwachte medische kosten en de noodzaak om uw reis te
              annuleren.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative flex flex-col items-center w-full h-full px-6 py-8 bg-white rounded-2xl">
            <Image
              src="/img/Generated-Image-September-24-2025-11_13AM.png"
              width={170}
              height={170}
              alt="Car icon"
            />
            <p className="mt-4 text-base font-medium">Caravanverzekering</p>
            <p className="mt-5 text-center text-gray-600">
              Bescherm uw tweede thuis tegen schade door storm, hagel en
              diefstal. Zowel onderweg, op de camping als in de winterstalling.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative flex flex-col items-center w-full h-full px-6 py-8 bg-white rounded-2xl">
            <Image
              src="/img/Generated-Image-September-24-2025-11_14AM.png"
              width={170}
              height={170}
              alt="Car icon"
            />
            <p className="mt-4 text-base font-medium">
              Pleziervaartuigverzekering
            </p>
            <p className="mt-5 text-center text-gray-600">
              Voor uw sloep, zeilboot of motorjacht. Een complete dekking voor
              schade, diefstal en aansprakelijkheid op het water.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative flex flex-col items-center w-full h-full px-6 py-8 bg-white rounded-2xl">
            <Image
              src="/img/Generated-Image-September-24-2025-11_16AM.png"
              width={170}
              height={170}
              alt="Car icon"
            />
            <p className="mt-4 text-base font-medium">Fietsverzekering</p>
            <p className="mt-5 text-center text-gray-600">
              Uw (elektrische) fiets is een kostbaar bezit. Verzeker hem tegen
              diefstal en schade, inclusief pechhulp onderweg.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VrijeTijdMain;
