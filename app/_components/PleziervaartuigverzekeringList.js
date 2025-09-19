import Image from "next/image";

function PleziervaartuigverzekeringList() {
  return (
    <div className="bg-linear-to-br from-[#09182b] to-[#0F2542] lg:rounded-l-none lg:rounded-r-2xl lg:w-[84%] w-full sm:py-15 lg:pl-30 sm:px-8 p-4 relative flex sm:flex-row flex-col-reverse justify-between gap-10 rounded-2xl">
      <div className="absolute hidden hexagon lg:block -left-35 top-18 opacity-5"></div>
      <div className="absolute hidden hexagon-small lg:block left-10 top-30 opacity-5"></div>
      <div className="mx-auto">
        <p className="text-3xl font-medium text-white">
          De Belangrijkste Dekkingen op een Rij
        </p>
        <p className="max-w-2xl mt-2 text-gray-300">
          Van een basis WA-verzekering tot een complete Allrisk-polis, u kiest
          de dekking die bij uw vaartuig past.
        </p>
        <ul className="mt-5 ml-4 space-y-2 text-gray-300 list-disc">
          <li>
            <b>WA (Aansprakelijkheid):</b> Dekt schade die u met uw boot aan
            anderen toebrengt. Vaak verplicht in havens en in het buitenland.
          </li>
          <li>
            <b>WA + Brand/Diefstal:</b> Dekt naast WA ook schade aan uw boot
            door brand, en diefstal van de boot zelf.
          </li>
          <li>
            <b>Casco (Allrisk):</b> De meest complete dekking. Dekt ook schade
            aan uw eigen boot door aanvaring, vandalisme of zinken.
          </li>
        </ul>

        <p className="my-5 text-xl font-medium text-white">
          Populaire aanvullende dekkingen
        </p>
        <div className="grid max-w-3xl grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Pechhulp op het water
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Trailerverzekering
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Ongevallen Opvarenden
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Rechtsbijstand
          </div>
        </div>
      </div>
      <Image
        src="/img/sailor-yacht.jpg" // <-- Nieuwe relevante afbeelding
        width={300}
        height={600}
        alt="Zeilboot vaart op open zee met de zeilen gehesen"
        className="relative z-10 object-cover object-right max-sm:w-full lg:-mr-25 rounded-2xl"
      />
      <div className="bg-[#00af76] rounded-full w-40 h-40 absolute top-3 right-23 sm:block hidden"></div>
    </div>
  );
}

export default PleziervaartuigverzekeringList;
