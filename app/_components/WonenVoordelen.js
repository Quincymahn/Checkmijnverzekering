import { Percent, Home, ShieldCheck, UserCheck } from "lucide-react"; // Voorbeeld-iconen
import Image from "next/image";

function WonenVoordelen() {
  const voordelenData = [
    {
      icon: <Percent size={32} className="text-blue-500" />,
      title: "Aantrekkelijke Pakketkorting",
      description:
        "Door uw woonverzekeringen bij één verzekeraar onder te brengen, profiteert u van een aanzienlijke korting op uw totale premie.",
    },
    {
      icon: <Home size={32} className="text-blue-500" />,
      title: "Alles Onder één Dak",
      description:
        "Eén polis, één premie en één aanspreekpunt voor al uw vragen en schademeldingen. Dat is wel zo makkelijk en overzichtelijk.",
    },
    {
      icon: <ShieldCheck size={32} className="text-blue-500" />,
      title: "Naadloze Dekking",
      description:
        "Wij zorgen ervoor dat de polissen perfect op elkaar aansluiten, zodat u nooit dubbel verzekerd bent of, erger nog, gaten in uw dekking heeft.",
    },
    {
      icon: <UserCheck size={32} className="text-blue-500" />,
      title: "Hulp bij Schadeafhandeling",
      description:
        "Bij schade staat u er niet alleen voor. Wij zijn uw persoonlijke belangenbehartiger en helpen u van melding tot en met de uitkering.",
    },
  ];

  return (
    <div className="py-30">
      <div className="px-4 mx-auto max-w-7xl">
        {/* Titel Sectie */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-medium text-gray-800">
            Combineer en Profiteer: De Voordelen van een Woonpakket
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Ontdek waarom het bundelen van uw woonverzekeringen de slimste keuze
            is.
          </p>
        </div>

        {/* Alternerende Layout */}
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Linker Kolom: Twee Voordelen */}
          <div className="space-y-10">
            {voordelenData.slice(0, 2).map((voordeel, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full">
                  {voordeel.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {voordeel.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{voordeel.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Rechter Kolom: De Illustratie */}
          <div className="flex items-center justify-center overflow-hidden rounded-2xl">
            <Image
              src="/img/Generated Image September 15, 2025 - 11_47AM.png" // Pad naar uw illustratie
              width={500}
              height={500}
              alt="Diverse mensen die profiteren van goede verzekeringen"
              className="w-full h-auto"
            />
          </div>

          {/* Volledige Breedte Rij: Twee Voordelen Onder de Illustratie */}
          {/* Deze worden alleen op grotere schermen in twee kolommen getoond */}
          <div className="grid grid-cols-1 gap-10 mt-10 lg:col-span-2 md:grid-cols-2">
            {voordelenData.slice(2, 4).map((voordeel, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full">
                  {voordeel.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {voordeel.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{voordeel.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WonenVoordelen;
