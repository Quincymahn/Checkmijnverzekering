function VrijeTijdCommonMistakes() {
  return (
    <div className="bg-radial from-[#282828] to-[#181818] w-full py-30 px-4">
      <div className="mx-auto max-w-7xl ">
        <p className="mx-auto text-3xl font-medium text-center text-white sm:w-120">
          De 3 Meest Gemaakte Fouten bij Vrijetijdsverzekeringen
        </p>
        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-3">
          <div className="relative text-center border border-gray-600 rounded-2xl shadow-md-custom backdrop-blur-md group-hover:-translate-y-1">
            <div className="relative overflow-hidden pt-6 px-4 pb-9 backdrop-blur-md bg-radial from-[#00af76]/10 from-20% to-[#004931]/10 to-70% -mb-5 rounded-t-2xl">
              <p className="relative text-xl font-medium text-white">
                Vertrouwen op de Zorgverzekering
              </p>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full">
              <p className="text-2xl text-white ">01</p>
            </div>
            <div className="p-4">
              <p className="text-gray-300">
                De meest gemaakte fout op reis. Uw Nederlandse zorgverzekering
                dekt medische kosten in het buitenland vaak maar tot het
                Nederlandse tarief. In veel landen zijn de kosten veel hoger.
                Een aanvullende reisverzekering is essentieel om financiële
                verrassingen te voorkomen.
              </p>
            </div>
          </div>

          <div className="relative text-center border border-gray-600 rounded-2xl shadow-md-custom backdrop-blur-md group-hover:-translate-y-1">
            <div className="relative overflow-hidden pt-6 px-4 pb-9 backdrop-blur-md bg-radial from-[#00af76]/10 from-20% to-[#004931]/10 to-70% -mb-5 rounded-t-2xl">
              <p className="relative text-xl font-medium text-white">
                Geen Annuleringsverzekering Afsluiten
              </p>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full">
              <p className="text-2xl text-white ">02</p>
            </div>
            <div className="p-4">
              <p className="text-gray-300">
                Een reis niet door laten gaan is al vervelend genoeg, maar
                zonder annuleringsverzekering bent u ook uw geld kwijt. Deze
                verzekering dekt de kosten als u door ziekte of een andere
                onverwachte, dringende reden niet kunt vertrekken.
              </p>
            </div>
          </div>

          <div className="relative text-center border border-gray-600 rounded-2xl shadow-md-custom backdrop-blur-md group-hover:-translate-y-1">
            <div className="relative overflow-hidden pt-6 px-4 pb-9 backdrop-blur-md bg-radial from-[#00af76]/10 from-20% to-[#004931]/10 to-70% -mb-5 rounded-t-2xl">
              <p className="relative text-xl font-medium text-white">
                Aannemen dat Alles Gedekt Is
              </p>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full">
              <p className="text-2xl text-white">03</p>
            </div>
            <div className="p-4">
              <p className="text-gray-300">
                Diefstal van uw fiets op straat, hagelschade aan uw caravan, of
                uw buitenboordmotor; deze zaken vallen vaak niet onder uw
                standaard inboedel- of autoverzekering. Een specifieke polis
                voor uw kostbare vrijetijdsobjecten is noodzakelijk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VrijeTijdCommonMistakes;
