import Image from "next/image";

function RechtsbijstandverzekeringList() {
  return (
    <div className="bg-linear-to-br from-[#09182b] to-[#0F2542] lg:rounded-l-none lg:rounded-r-2xl lg:w-[84%] w-full sm:py-15 lg:pl-30 sm:px-8 p-4 relative flex sm:flex-row flex-col-reverse justify-between gap-10 rounded-2xl">
      <div className="absolute hidden hexagon lg:block -left-35 top-18 opacity-5"></div>
      <div className="absolute hidden hexagon-small lg:block left-10 top-30 opacity-5"></div>
      <div className="mx-auto">
        <p className="text-3xl font-medium text-white">
          Stel Zelf Uw Polis Samen met Modules
        </p>
        <p className="max-w-2xl mt-2 text-gray-300">
          Een rechtsbijstandverzekering is flexibel. U kiest de modules die voor
          uw levensfase relevant zijn, zodat u een dekking op maat heeft.
        </p>
        <ul className="mt-5 ml-4 space-y-2 text-gray-300 list-disc">
          <li>
            <b>Verkeer:</b> Conflicten na een aanrijding, met uw garage of over
            de aankoop van een voertuig.
          </li>
          <li>
            <b>Consument & Wonen:</b> Geschillen met (web)winkels,
            energieleveranciers, buren of uw (ver)huurder.
          </li>
          <li>
            <b>Werk & Inkomen:</b> Hulp bij conflicten over uw contract,
            ontslag, salaris of pensioen.
          </li>
          <li>
            <b>Fiscaal & Vermogen:</b> Onenigheid met de Belastingdienst of over
            uw beleggingen.
          </li>
        </ul>

        <p className="my-5 text-xl font-medium text-white">
          Meest voorkomende conflicten
        </p>
        <div className="grid max-w-3xl grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Burenruzie
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Conflict met werkgever
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Verkeersongeval
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Aankoopgeschil
          </div>
        </div>
      </div>
      <Image
        src="/img/blonde-woman-having-conversation-with-work-colleague.jpg" // <-- Nieuwe relevante afbeelding
        width={300}
        height={600}
        alt="Financieel adviseur geeft uitleg over documenten"
        className="relative z-10 object-cover max-sm:w-full lg:-mr-25 rounded-2xl"
      />
      <div className="bg-[#00af76] rounded-full w-40 h-40 absolute top-3 right-23 sm:block hidden"></div>
    </div>
  );
}

export default RechtsbijstandverzekeringList;
