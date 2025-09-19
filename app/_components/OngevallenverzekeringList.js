import Image from "next/image";

function OngevallenverzekeringList() {
  return (
    <div className="bg-linear-to-br from-[#09182b] to-[#0F2542] lg:rounded-l-none lg:rounded-r-2xl lg:w-[84%] w-full sm:py-15 lg:pl-30 sm:px-8 p-4 relative flex sm:flex-row flex-col-reverse justify-between gap-10 rounded-2xl">
      <div className="absolute hidden hexagon lg:block -left-35 top-18 opacity-5"></div>
      <div className="absolute hidden hexagon-small lg:block left-10 top-30 opacity-5"></div>
      <div className="mx-auto">
        <p className="text-3xl font-medium text-white">
          De Twee Belangrijkste Dekkingen
        </p>
        <p className="max-w-2xl mt-2 text-gray-300">
          Een ongevallenverzekering keert uit in twee situaties, waarvoor u zelf
          de verzekerde bedragen kiest.
        </p>
        <ul className="mt-5 ml-4 space-y-2 text-gray-300 list-disc">
          <li>
            <b>Blijvende Invaliditeit:</b> De belangrijkste dekking. U ontvangt
            een percentage van het verzekerde bedrag, afhankelijk van de ernst
            van de invaliditeit.
          </li>
          <li>
            <b>Overlijden:</b> Bij overlijden als direct gevolg van een ongeval,
            ontvangen uw nabestaanden het afgesproken bedrag.
          </li>
        </ul>

        <p className="my-5 text-xl font-medium text-white">
          Veelvoorkomende aanvullende dekkingen
        </p>
        <div className="grid max-w-3xl grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Tandartskosten na ongeval
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Ziekenhuisdaggeld
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Gevaarlijke sporten
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Dubbele uitkering verkeer
          </div>
        </div>
      </div>
      <Image
        src="/img/man-visit-rehabilitation-center.jpg" // <-- Nieuwe relevante afbeelding
        width={300}
        height={600}
        alt="Arts onderzoekt de knie van een patiënt na een sportongeval"
        className="relative z-10 object-cover object-right max-sm:w-full lg:-mr-25 rounded-2xl"
      />
      <div className="bg-[#00af76] rounded-full w-40 h-40 absolute top-3 right-23 sm:block hidden"></div>
    </div>
  );
}

export default OngevallenverzekeringList;
