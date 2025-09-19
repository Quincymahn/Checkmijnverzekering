import Image from "next/image";

function OpstalverzekeringList() {
  return (
    <div className="bg-linear-to-br from-[#09182b] to-[#0F2542] lg:rounded-l-none lg:rounded-r-2xl lg:w-[84%] w-full sm:py-15 lg:pl-30 sm:px-8 p-4 relative flex sm:flex-row flex-col-reverse justify-between gap-10 rounded-2xl">
      <div className="absolute hidden hexagon lg:block -left-35 top-18 opacity-5"></div>
      <div className="absolute hidden hexagon-small lg:block left-10 top-30 opacity-5"></div>
      <div className="mx-auto">
        <p className="text-3xl font-medium text-white">
          Wat Bepaalt de Premie van uw Inboedelverzekering?
        </p>
        <ul className="mt-5 ml-4 space-y-2 text-gray-300 list-disc">
          <li>
            <b>Waarde van de inboedel:</b> Hoe hoger de waarde van je spullen,
            hoe hoger de premie.
          </li>
          <li>
            <b>Gezinssamenstelling:</b> De premie houdt rekening met het aantal
            personen in je huishouden.
          </li>
          <li>
            <b>Locatie:</b> In een regio met een hoger inbraakrisico (vaak grote
            steden) is de premie hoger.
          </li>
          <li>
            <b>Type woning:</b> Een vrijstaand huis heeft een ander
            risicoprofiel dan een appartement.
          </li>
          <li>
            <b>Preventie:</b> Goedgekeurd hang- en sluitwerk (Politiekeurmerk)
            levert vaak premiekorting op.
          </li>
        </ul>

        <p className="my-5 text-xl font-medium text-white">
          Essentiële aanvullende dekkingen
        </p>
        <div className="grid max-w-3xl grid-cols-2 gap-4 lg:grid-cols-4 text-nowrap">
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Buitenshuisdekking
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Glasverzekering
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Kostbaarheden
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Allriskdekking
          </div>
        </div>
      </div>
      <Image
        src="/img/woman-arranging-paintings-home.jpg" // <-- Nieuwe relevante afbeelding
        width={300}
        height={300}
        alt="Adviseur toont een koppel een bouwtekening van hun huis"
        className="relative z-10 object-cover max-sm:w-full lg:-mr-25 rounded-2xl"
      />
      <div className="bg-[#00af76] rounded-full w-40 h-40 absolute top-3 right-23 sm:block hidden1"></div>
    </div>
  );
}

export default OpstalverzekeringList;
