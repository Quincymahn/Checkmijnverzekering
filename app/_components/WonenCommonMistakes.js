function WonenCommonMistakes() {
  return (
    <div className="bg-radial from-[#282828] to-[#181818] w-full py-30">
      <div className="mx-auto max-w-7xl ">
        <p className="mx-auto text-3xl font-medium text-center text-white w-120">
          De 3 Meest Gemaakte Fouten bij Woonverzekeringen
        </p>
        <div className="grid grid-cols-3 gap-12 mt-10">
          <div className="relative text-center border border-gray-600 rounded-2xl shadow-md-custom backdrop-blur-md group-hover:-translate-y-1">
            <div className="relative overflow-hidden pt-6 px-4 pb-9 backdrop-blur-md bg-radial from-[#00af76]/10 from-20% to-[#004931]/10 to-70% -mb-5 rounded-t-2xl">
              <p className="relative text-xl font-medium text-white">
                Onderverzekerd Zijn
              </p>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full">
              <p className="text-2xl text-white ">01</p>
            </div>
            <div className="p-4">
              <p className="text-gray-300">
                De meest voorkomende fout. Na een verbouwing of de aankoop van
                dure spullen wordt de poliswaarde niet aangepast. Gevolg: bij
                schade krijgt u slechts een deel vergoed. Wij zorgen voor een
                &apos;garantie tegen onderverzekering&apos;.
              </p>
            </div>
          </div>

          <div className="relative text-center border border-gray-600 rounded-2xl shadow-md-custom backdrop-blur-md group-hover:-translate-y-1">
            <div className="relative overflow-hidden pt-6 px-4 pb-9 backdrop-blur-md bg-radial from-[#00af76]/10 from-20% to-[#004931]/10 to-70% -mb-5 rounded-t-2xl">
              <p className="relative text-xl font-medium text-white">
                Blindstaren op Premie
              </p>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full">
              <p className="text-2xl text-white ">02</p>
            </div>
            <div className="p-4">
              <p className="text-gray-300">
                Een goedkope polis lijkt aantrekkelijk, maar heeft vaak een hoog
                eigen risico of belangrijke uitsluitingen (zoals glasschade).
                Wij vergelijken op prijs én op de voorwaarden die voor u
                belangrijk zijn.
              </p>
            </div>
          </div>

          <div className="relative text-center border border-gray-600 rounded-2xl shadow-md-custom backdrop-blur-md group-hover:-translate-y-1">
            <div className="relative overflow-hidden pt-6 px-4 pb-9 backdrop-blur-md bg-radial from-[#00af76]/10 from-20% to-[#004931]/10 to-70% -mb-5 rounded-t-2xl">
              <p className="relative text-xl font-medium text-white">
                Gaten in de Dekking
              </p>
            </div>
            <div className="relative z-10 inline-flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full">
              <p className="text-2xl text-white">03</p>
            </div>
            <div className="p-4">
              <p className="text-gray-300">
                Heeft u glas apart verzekerd terwijl het al in uw opstalpolis
                zit? Of bent u juist niet verzekerd voor schade door uw
                huisdier? Wij analyseren uw volledige pakket en stroomlijnen het
                voor een naadloze en voordelige dekking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WonenCommonMistakes;
