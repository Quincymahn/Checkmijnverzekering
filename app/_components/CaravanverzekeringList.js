import Image from "next/image";

function CaravanverzekeringList() {
  return (
    <div className="bg-linear-to-br from-[#09182b] to-[#0F2542] lg:rounded-l-none lg:rounded-r-2xl lg:w-[84%] w-full sm:py-15 lg:pl-30 sm:px-8 p-4 relative flex sm:flex-row flex-col-reverse justify-between gap-10 rounded-2xl">
      <div className="absolute hidden hexagon lg:block -left-35 top-18 opacity-5"></div>
      <div className="absolute hidden hexagon-small lg:block left-10 top-30 opacity-5"></div>
      <div className="mx-auto">
        <p className="text-3xl font-medium text-white">
          Waar is uw caravan verzekerd?
        </p>
        <p className="max-w-2xl mt-2 text-gray-300">
          Een goede caravanverzekering biedt een uitgebreide dekking op alle
          belangrijke momenten.
        </p>
        <ul className="mt-5 ml-4 space-y-2 text-gray-300 list-disc">
          <li>
            <b>Tijdens het rijden:</b> Dekking voor schade door een aanrijding
            of slippartij.
          </li>
          <li>
            <b>Op de camping:</b> Verzekerd tegen diefstal, brand, storm en
            hagel.
          </li>
          <li>
            <b>In de winterstalling:</b> Ook in de stalling is uw caravan gedekt
            tegen de belangrijkste risico&apos;s.
          </li>
          <li>
            <b>In heel Europa:</b> De meeste polissen bieden standaard dekking
            in heel geografisch Europa.
          </li>
        </ul>

        <p className="my-5 text-xl font-medium text-white">
          Populaire aanvullende dekkingen
        </p>
        <div className="grid max-w-3xl grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Hagelschadedekking
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Inventaris
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Voortent & Luifel
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Rechtsbijstand
          </div>
        </div>
      </div>
      <Image
        src="/img/medium-shot-smiley-couple-outdoors.jpg" // <-- Nieuwe relevante afbeelding
        width={300}
        height={600}
        alt="Adviseur toont een koppel een bouwtekening van hun huis"
        className="relative z-10 object-cover object-center max-sm:w-full lg:-mr-25 rounded-2xl"
      />
      <div className="bg-[#00af76] rounded-full w-40 h-40 absolute top-3 right-23 sm:block hidden"></div>
    </div>
  );
}

export default CaravanverzekeringList;
