import Image from "next/image";

function AutoverzekeringList() {
  return (
    <div className="bg-linear-to-br from-[#09182b] to-[#0F2542] lg:rounded-l-none lg:rounded-r-2xl lg:w-[84%] w-full sm:py-15 lg:pl-30 sm:px-8 p-4 relative flex sm:flex-row flex-col-reverse justify-between gap-10 rounded-2xl">
      <div className="absolute hidden hexagon lg:block -left-35 top-18 opacity-5"></div>
      <div className="absolute hidden hexagon-small lg:block left-10 top-30 opacity-5"></div>
      <div className="mx-auto">
        <p className="text-3xl font-medium text-white">
          Waarom verschilt de premie?
        </p>
        <ul className="mt-5 ml-4 space-y-2 text-gray-300 list-disc">
          <li>Leeftijd & ervaring: jonge bestuurders betalen vaak meer.</li>
          <li>
            Autowaarde: nieuwere en duurdere auto&apos;s zijn duurder om te
            verzekeren.
          </li>
          <li>
            Kilometrage: wie meer rijdt, loopt meer risico en betaalt meer.
          </li>
          <li>
            Winter & weersomstandigheden: regio kan invloed hebben (stad vs
            platteland).
          </li>
          <li>
            Schadevrije jaren: no-claim korting verlaagt je premie naarmate je
            langer schadevrij rijdt.
          </li>
        </ul>

        <p className="my-5 text-xl font-medium text-white">
          Populaire extra dekkingen
        </p>
        <div className="grid max-w-3xl grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Pechhulp 24/7
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Rechtsbijstand verkeer
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Vervangend vervoer
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Inzittendenverzekering
          </div>
        </div>
      </div>
      <Image
        src="/img/businesspeople-having-discussion-office.jpg" // <-- Nieuwe relevante afbeelding
        width={300}
        height={300}
        alt="business people having a discussion"
        className="relative z-10 object-cover object-right max-sm:w-full lg:-mr-25 rounded-2xl"
      />
      <div className="bg-[#00af76] rounded-full w-40 h-40 absolute top-3 right-23 sm:block hidden"></div>
    </div>
  );
}

export default AutoverzekeringList;
