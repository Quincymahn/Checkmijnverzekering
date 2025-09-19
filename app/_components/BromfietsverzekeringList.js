import Image from "next/image";

function BromfietsverzekeringList() {
  return (
    <div className="bg-linear-to-br from-[#09182b] to-[#0F2542] lg:rounded-l-none lg:rounded-r-2xl lg:w-[84%] w-full sm:py-15 lg:pl-30 sm:px-8 p-4 relative flex sm:flex-row flex-col-reverse justify-between gap-10 rounded-2xl">
      <div className="absolute hidden hexagon lg:block -left-35 top-18 opacity-5"></div>
      <div className="absolute hidden hexagon-small lg:block left-10 top-30 opacity-5"></div>
      <div className="mx-auto">
        <p className="text-3xl font-medium text-white">
          Wat bepaalt de premie van je bromfiets?
        </p>
        <ul className="mt-5 ml-4 space-y-2 text-gray-300 list-disc">
          <li>
            Leeftijd: de premie is vaak het hoogst voor bestuurders onder de 25
            jaar.
          </li>
          <li>
            Woonplaats: in grote steden is het risico op diefstal en schade
            hoger.
          </li>
          <li>
            Soort bromfiets: een snorfiets is vaak goedkoper te verzekeren dan
            een snelle scooter.
          </li>
          <li>
            Beveiliging: een goedgekeurd slot kan korting op je premie geven.
          </li>
          <li>
            Schadevrije jaren: als je al jaren schadevrij rijdt, word je beloond
            met korting.
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
            Rechtsbijstand verkeer
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Opzittendenverzekering
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Helm & kleding
          </div>
        </div>
      </div>
      <Image
        src="/img/Cartoon happy man and woman riding motorbike in summer.jpg" // <-- Nieuwe relevante afbeelding
        width={300}
        height={600}
        alt="Scooter geparkeerd in een straat in Amsterdam"
        className="relative z-10 object-cover object-right max-sm:w-full lg:-mr-25 rounded-2xl"
      />
      <div className="bg-[#00af76] rounded-full w-40 h-40 absolute top-3 right-23 sm:block hidden"></div>
    </div>
  );
}

export default BromfietsverzekeringList;
