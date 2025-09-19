import Image from "next/image";

function BestelautoverzekeringList() {
  return (
    <div className="bg-linear-to-br from-[#09182b] to-[#0F2542] lg:rounded-l-none lg:rounded-r-2xl lg:w-[84%] w-full sm:py-15 lg:pl-30 sm:px-8 p-4 relative flex sm:flex-row flex-col-reverse justify-between gap-10 rounded-2xl">
      <div className="absolute hidden hexagon lg:block -left-35 top-18 opacity-5"></div>
      <div className="absolute hidden hexagon-small lg:block left-10 top-30 opacity-5"></div>
      <div className="mx-auto">
        <p className="text-3xl font-medium text-white">
          Waarom is een Bestelautoverzekering Anders?
        </p>
        <ul className="mt-5 ml-4 space-y-2 text-gray-300 list-disc">
          <li>
            <b>Gebruik:</b> De premie hangt sterk af van of u de bus zakelijk of
            particulier gebruikt.
          </li>
          <li>
            <b>BTW-verrekening:</b> Bij zakelijk gebruik wordt schade vaak
            exclusief btw uitgekeerd, omdat u de btw kunt verrekenen.
          </li>
          <li>
            <b>Lading & gereedschap:</b> De inhoud van uw bus is niet standaard
            meeverzekerd en vereist een aparte dekking.
          </li>
          <li>
            <b>Inrichting:</b> Een vaste (kostbare) inrichting, zoals
            stellingen, moet vaak apart worden meeverzekerd.
          </li>
          <li>
            <b>Schadevrije jaren:</b> Deze kunnen soms van een personenauto
            worden overgenomen.
          </li>
        </ul>

        <p className="my-5 text-xl font-medium text-white">
          Essentiële aanvullende dekkingen
        </p>
        <div className="grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Eigen vervoerverzekering
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Inzittendenverzekering
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Pechhulp
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Rechtsbijstand Verkeer
          </div>
        </div>
      </div>
      <Image
        src="/img/4342804.jpg" // <-- Nieuwe relevante afbeelding
        width={300}
        height={600}
        alt="Bouwvakker staat met gereedschap bij zijn bestelbus"
        className="relative z-10 object-cover object-right max-sm:w-full lg:-mr-25 rounded-2xl"
      />
      <div className="bg-[#00af76] rounded-full w-40 h-40 absolute top-3 right-23 sm:block hidden"></div>
    </div>
  );
}

export default BestelautoverzekeringList;
