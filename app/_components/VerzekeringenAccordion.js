"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const accordionData = [
  {
    question: "Zijn jullie 100% onafhankelijk?",
    answer:
      "Ja, wij zijn volledig onafhankelijk. Wij werken niet voor een specifieke verzekeraar en ons advies is puur gebaseerd op wat het beste is voor jouw situatie.",
  },
  {
    question: "Wat gebeurt er met mijn persoonlijke gegevens?",
    answer:
      "Jouw persoonlijke gegevens worden veilig opgeslagen en alleen gebruikt om je van het beste advies te voorzien. We delen je gegevens nooit met derden zonder jouw expliciete toestemming, conform de GDPR-wetgeving.",
  },
  {
    question: "Wat betekent 'eigen risico' precies?",
    answer:
      "Het eigen risico is het bedrag dat je zelf moet betalen in geval van schade voordat de verzekering tussenkomt. Een hoger eigen risico resulteert vaak in een lagere premie, en vice versa.",
  },
  {
    question: "Kan ik mijn verzekering op elk moment opzeggen?",
    answer:
      "De voorwaarden voor het opzeggen van een verzekering verschillen per contact en verzekeraar. Meestal is er een opzegtermijn van één maand, maar controleer altijd de specifieke voorwaarden van jouw polis.",
  },
];

function VerzekeringenAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl px-4 mx-auto py-30">
      <p className="text-3xl font-medium text-center sm:text-left">
        Vind hier snel het antwoord op de <br /> meest voorkomende vraag.
      </p>
      <div className="mt-10">
        {accordionData.map((item, index) => (
          <div key={index} className="py-5 border-b border-gray-300">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <p className="font-medium">{item.question}</p>
              {openIndex === index ? (
                <Minus className="text-[#1b7ced] h-6 w-6" />
              ) : (
                <Plus className="text-[#1b7ced] h-6 w-6" />
              )}
            </div>
            {openIndex === index && (
              <div className="pr-10 mt-4">
                <p className="text-gray-600">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default VerzekeringenAccordion;
