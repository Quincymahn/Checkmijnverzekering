import Image from "next/image";

function MotorverzekeringList() {
  return (
    <div className="bg-linear-to-br from-[#09182b] to-[#0F2542] lg:rounded-l-none lg:rounded-r-2xl lg:w-[84%] w-full sm:py-15 lg:pl-30 sm:px-8 p-4 relative flex sm:flex-row flex-col-reverse justify-between gap-10 rounded-2xl">
      <div className="absolute hidden hexagon lg:block -left-35 top-18 opacity-5"></div>
      <div className="absolute hidden hexagon-small lg:block left-10 top-30 opacity-5"></div>
      <div className="mx-auto">
        <p className="text-3xl font-medium text-white">
          Factoren die je premie beïnvloeden
        </p>
        <ul className="mt-5 ml-4 space-y-2 text-gray-300 list-disc">
          <li>
            Type motor/scooter: het vermogen (kW) en de waarde zijn bepalend.
          </li>
          <li>
            Leeftijd bestuurder: jongere rijders betalen vaak een hogere premie.
          </li>
          <li>Schadevrije jaren: no-claimkorting is de grootste bespaarder.</li>
          <li>Woonplaats: het risico op diefstal is in de stad hoger.</li>
          <li>
            Jaarkilometrage: meer kilometers betekent een iets hogere premie.
          </li>
        </ul>

        <p className="my-5 text-xl font-medium text-white">
          Populaire aanvullende dekkingen
        </p>
        <div className="grid max-w-3xl grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Motorkleding & helm
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Opzittendenverzekering
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Pechhulp
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Rechtsbijstand verkeer
          </div>
        </div>
      </div>
      <Image
        src="/img/full-length-image-elegant-couple-rides-modern-motorbike.jpg" // <-- Nieuwe relevante afbeelding
        width={300}
        height={600}
        alt="Adviseur toont een koppel een bouwtekening van hun huis"
        className="relative z-10 object-cover object-right max-sm:w-full lg:-mr-25 rounded-2xl"
      />
      <div className="bg-[#00af76] rounded-full w-40 h-40 absolute top-3 right-23 sm:block hidden"></div>
    </div>
  );
}

export default MotorverzekeringList;
