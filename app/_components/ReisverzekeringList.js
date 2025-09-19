import Image from "next/image";

function ReisverzekeringList() {
  return (
    <div className="bg-linear-to-br from-[#09182b] to-[#0F2542] lg:rounded-l-none lg:rounded-r-2xl lg:w-[84%] w-full sm:py-15 lg:pl-30 sm:px-8 p-4 relative flex sm:flex-row flex-col-reverse justify-between gap-10 rounded-2xl">
      <div className="absolute hidden hexagon lg:block -left-35 top-18 opacity-5"></div>
      <div className="absolute hidden hexagon-small lg:block left-10 top-30 opacity-5"></div>
      <div className="mx-auto">
        <p className="text-3xl font-medium text-white">
          Stel Zelf Uw Ideale Reisverzekering Samen
        </p>
        <p className="max-w-2xl mt-2 text-gray-300">
          Een basis reisverzekering is vaak al heel compleet. U kunt deze verder
          uitbreiden met modules die passen bij uw reisplannen.
        </p>
        <ul className="mt-5 ml-4 space-y-2 text-gray-300 list-disc">
          <li>
            <b>Kortlopend of Doorlopend:</b> Kies voor een eenmalige verzekering
            of wees het hele jaar door verzekerd.
          </li>
          <li>
            <b>Europa- of Werelddekking:</b> Stem de dekking af op uw
            bestemming.
          </li>
          <li>
            <b>Annulering:</b> Verzeker de kosten van uw reis als u onverwacht
            niet kunt vertrekken.
          </li>
          <li>
            <b>Medische Kosten:</b> Voorkom hoge rekeningen bij een
            ziekenhuisopname in het buitenland.
          </li>
        </ul>

        <p className="my-5 text-xl font-medium text-white">
          Populaire aanvullende dekkingen
        </p>
        <div className="grid max-w-3xl grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Pechhulp Auto & Motor
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Gevaarlijke Sporten
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Wintersport
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Zakenreizen
          </div>
        </div>
      </div>
      <Image
        src="/img/elderly-couple-niece-loading-baggage-trunk-automobile-leave-holiday-road-trip-grandparents-taking-small-child-seaside-destination-with-luggage-inflatable-summer.jpg" // <-- Nieuwe relevante afbeelding
        width={300}
        height={600}
        alt="Adviseur toont een koppel een bouwtekening van hun huis"
        className="relative z-10 object-cover max-sm:w-full lg:-mr-25 rounded-2xl"
      />
      <div className="bg-[#00af76] rounded-full w-40 h-40 absolute top-3 right-23 sm:block hidden"></div>
    </div>
  );
}

export default ReisverzekeringList;
