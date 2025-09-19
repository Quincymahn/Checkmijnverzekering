import Image from "next/image";

function OldtimerverzekeringList() {
  return (
    <div className="bg-linear-to-br from-[#09182b] to-[#0F2542] lg:rounded-l-none lg:rounded-r-2xl lg:w-[84%] w-full sm:py-15 lg:pl-30 sm:px-8 p-4 relative flex sm:flex-row flex-col-reverse justify-between gap-10 rounded-2xl">
      <div className="absolute hidden hexagon lg:block -left-35 top-18 opacity-5"></div>
      <div className="absolute hidden hexagon-small lg:block left-10 top-30 opacity-5"></div>
      <div className="mx-auto">
        <p className="text-3xl font-medium text-white">
          Waarom een Oldtimerverzekering Anders Is
        </p>
        <ul className="mt-5 ml-4 space-y-2 text-gray-300 list-disc">
          <li>
            <b>Taxatiewaarde:</b> De uitkering bij schade of diefstal is
            gebaseerd op een taxatierapport, niet op de dagwaarde.
          </li>
          <li>
            <b>Beperkt gebruik:</b> De premie is lager omdat verzekeraars
            uitgaan van hobbymatig gebruik (meestal max. 7.500 km/jaar).
          </li>
          <li>
            <b>Stallingseisen:</b> Vaak is een afgesloten, deugdelijke stalling
            (garage) verplicht om diefstal te voorkomen.
          </li>
          <li>
            <b>Leeftijdseis:</b> De auto moet vaak een minimumleeftijd hebben
            (bijv. 25 jaar) om in aanmerking te komen.
          </li>
          <li>
            <b>Eerste auto vereist:</b> Meestal moet u een andere auto voor
            dagelijks gebruik hebben.
          </li>
        </ul>

        <p className="my-5 text-xl font-medium text-white">
          Specifieke aanvullende dekkingen
        </p>
        <div className="grid max-w-3xl grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Classic Car Taxatie
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Pechhulp Europa
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Casco Restauratie
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Rechtsbijstand Verkeer
          </div>
        </div>
      </div>
      <Image
        src="/img/senior-traveler-wearing-red-sunglasses.jpg" // <-- Nieuwe relevante afbeelding
        width={300}
        height={600}
        alt="Adviseur toont een koppel een bouwtekening van hun huis"
        className="relative z-10 object-cover object-right max-sm:w-full lg:-mr-25 rounded-2xl"
      />
      <div className="bg-[#00af76] rounded-full w-40 h-40 absolute top-3 right-23 sm:block hidden"></div>
    </div>
  );
}

export default OldtimerverzekeringList;
