import Image from "next/image";

function FietsverzekeringList() {
  return (
    <div className="bg-linear-to-br from-[#09182b] to-[#0F2542] lg:rounded-l-none lg:rounded-r-2xl lg:w-[84%] w-full sm:py-15 lg:pl-30 sm:px-8 p-4 relative flex sm:flex-row flex-col-reverse justify-between gap-10 rounded-2xl">
      <div className="absolute hidden hexagon lg:block -left-35 top-18 opacity-5"></div>
      <div className="absolute hidden hexagon-small lg:block left-10 top-30 opacity-5"></div>
      <div className="mx-auto">
        <p className="text-3xl font-medium text-white">
          Kies de Dekking die bij U Past
        </p>
        <p className="max-w-2xl mt-2 text-gray-300">
          Van een basis diefstalverzekering tot een compleet Allrisk-pakket
          inclusief pechhulp.
        </p>
        <ul className="mt-5 ml-4 space-y-2 text-gray-300 list-disc">
          <li>
            <b>Diefstal:</b> De basisdekking. Keert de aanschafwaarde uit bij
            diefstal van uw fiets.
          </li>
          <li>
            <b>Diefstal + Schade (Allrisk):</b> Dekt ook schade aan uw fiets
            door een val, ongeval of vandalisme.
          </li>
          <li>
            <b>Doorlopend:</b> Een verzekering die elk jaar automatisch
            doorloopt.
          </li>
          <li>
            <b>Kortlopend:</b> Een verzekering voor een vaste periode,
            bijvoorbeeld 3 of 5 jaar.
          </li>
        </ul>

        <p className="my-5 text-xl font-medium text-white">
          Populaire aanvullende dekkingen
        </p>
        <div className="grid max-w-3xl grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Pechhulp
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Opzittende
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Rechtsbijstand Verkeer
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Accessoires
          </div>
        </div>
      </div>
      <Image
        src="/img/red-hair-bearded-mechanic-removing-bicycle-rear-cassette-workshop.jpg" // <-- Nieuwe relevante afbeelding
        width={300}
        height={600}
        alt="Fietsenmaker is bezig met de reparatie van een moderne e-bike"
        className="relative z-10 object-cover object-right max-sm:w-full lg:-mr-25 rounded-2xl"
      />
      <div className="bg-[#00af76] rounded-full w-40 h-40 absolute top-3 right-23 sm:block hidden"></div>
    </div>
  );
}

export default FietsverzekeringList;
