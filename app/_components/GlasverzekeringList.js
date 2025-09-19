import Image from "next/image";

function GlasverzekeringList() {
  return (
    <div className="bg-linear-to-br from-[#09182b] to-[#0F2542] lg:rounded-l-none lg:rounded-r-2xl lg:w-[84%] w-full sm:py-15 lg:pl-30 sm:px-8 p-4 relative flex sm:flex-row flex-col-reverse justify-between gap-10 rounded-2xl">
      <div className="absolute hidden hexagon lg:block -left-35 top-18 opacity-5"></div>
      <div className="absolute hidden hexagon-small lg:block left-10 top-30 opacity-5"></div>
      <div className="mx-auto">
        <p className="text-3xl font-medium text-white">
          Wat is wel en niet gedekt?
        </p>
        <ul className="mt-5 ml-4 space-y-2 text-gray-300 list-disc">
          <li>
            <b>Gedekt:</b> Ruiten in ramen en deuren van de woning zelf.
          </li>
          <li>
            <b>Gedekt:</b> Glas in serres, tuinhuisjes, balkon- en
            terrasafscheidingen.
          </li>
          <li>
            <b>Gedekt:</b> Douchecabines, glazen binnendeuren en lichtkoepels.
          </li>
          <li>
            <b>Niet gedekt:</b> Schade aan glazen tafels, spiegels, aquaria of
            kookplaten. Dit valt onder de inboedelverzekering.
          </li>
          <li>
            <b>Niet gedekt:</b> Schade door krassen, of als het glas al
            beschadigd was vóór het afsluiten van de verzekering.
          </li>
          <li>
            <b>Niet gedekt:</b> Glas van een kas of hobbybroeikas (vaak apart te
            verzekeren).
          </li>
        </ul>

        <p className="my-5 text-xl font-medium text-white">
          Onderdeel van uw woonpakket
        </p>
        <p className="max-w-xl text-gray-300">
          De glasverzekering is meestal een voordelige aanvulling op uw opstal-
          of inboedelverzekering. Door deze te combineren in één woonpakket
          profiteert u van pakketkorting en heeft u één aanspreekpunt voor al uw
          schades.
        </p>
      </div>
      <Image
        src="/img/male-worker-factory.jpg" // <-- Nieuwe relevante afbeelding
        width={300}
        height={600}
        alt="Adviseur toont een koppel een bouwtekening van hun huis"
        className="relative z-10 object-cover object-right max-sm:w-full lg:-mr-25 rounded-2xl"
      />
      <div className="bg-[#00af76] rounded-full w-40 h-40 absolute top-3 right-23 sm:block hidden"></div>
    </div>
  );
}

export default GlasverzekeringList;
