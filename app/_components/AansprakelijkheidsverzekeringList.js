import Image from "next/image";

function AansprakelijkheidsverzekeringList() {
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
            <b>Gedekt:</b> Schade aan personen (letsel) en spullen van anderen,
            veroorzaakt door u, uw gezin of huisdier.
          </li>
          <li>
            <b>Gedekt:</b> Schade veroorzaakt tijdens een vriendendienst (bijv.
            helpen met verhuizen).
          </li>
          <li>
            <b>Gedekt:</b> Schade veroorzaakt als voetganger of fietser in het
            verkeer.
          </li>
          <li>
            <b>Niet gedekt:</b> Schade aan uw eigen spullen of aan spullen die u
            huurt of leent.
          </li>
          <li>
            <b>Niet gedekt:</b> Schade die met opzet is veroorzaakt.
          </li>
          <li>
            <b>Niet gedekt:</b> Schade veroorzaakt met een motorvoertuig
            (hiervoor is de WA-autoverzekering).
          </li>
        </ul>

        <p className="my-5 text-xl font-medium text-white">
          Veelvoorkomende situaties
        </p>
        <div className="grid max-w-3xl grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Kind stoot vaas om
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Wijn over tapijt
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Hond bijt postbode
          </div>
          <div className="p-2 text-sm text-center text-white border border-gray-300 rounded-full bg-gray-400/50 backdrop-blur-md">
            Fietser aangereden
          </div>
        </div>
      </div>
      <Image
        src="/img/insurance-agent-working-site-car-accident-claim-process-people-car-insurance-claim.jpg" // <-- Nieuwe relevante afbeelding
        width={300}
        height={300}
        alt="Man helpt vrouw overeind na een val met de fiets"
        className="relative z-10 object-cover max-sm:w-full lg:-mr-25 rounded-2xl"
      />
      <div className="bg-[#00af76] rounded-full w-40 h-40 absolute top-3 right-23 sm:block hidden"></div>
    </div>
  );
}

export default AansprakelijkheidsverzekeringList;
