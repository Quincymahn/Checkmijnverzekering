"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Nieuwe, correcte data specifiek voor de categorie Recht & Zekerheid
const faqData = [
  {
    question: "Wat is het verschil tussen een ongevallen- en een AOV?",
    icon: "/img/reisverzekering-icon.png", // <-- Icoon aangepast
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Een <b>ongevallenverzekering</b> keert eenmalig een bedrag uit bij
          blijvende invaliditeit na een ongeval. Een{" "}
          <b>Arbeidsongeschiktheidsverzekering (AOV)</b> keert een maandelijks
          inkomen uit als u door ziekte of een ongeval niet meer kunt werken.
        </p>
      </div>
    ),
  },
  {
    question: "Heb ik rechtsbijstand nodig als ik al een AVP heb?",
    icon: "/img/reisverzekering-contract-icon.png", // <-- Icoon aangepast
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Ja, dit zijn twee verschillende dingen. De{" "}
          <b>Aansprakelijkheidsverzekering (AVP)</b> dekt schade die u bij
          anderen veroorzaakt. <b>Rechtsbijstand</b> helpt u juist om uw recht
          te halen als een ander u schade toebrengt of bij een conflict.
        </p>
      </div>
    ),
  },
  {
    question: "Waarom zou ik een overlijdensrisicoverzekering afsluiten?",
    icon: "/img/overlijdenrisico-verzekering-icon.png", // <-- Icoon aangepast
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Om uw nabestaanden financieel te beschermen. De uitkering kan worden
          gebruikt om de hypotheek af te lossen of het weggevallen inkomen op te
          vangen, zodat uw gezin in het huis kan blijven wonen en de rekeningen
          kan blijven betalen.
        </p>
      </div>
    ),
  },
  {
    question: "Is een ongevallenverzekering ook geldig op vakantie?",
    icon: "/img/reis-en-annulering-verzekering-icon.png", // <-- Icoon aangepast
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Ja, een persoonlijke ongevallenverzekering biedt doorgaans een{" "}
          <b>24/7 wereldwijde dekking</b>. U bent dus ook verzekerd voor
          ongevallen die plaatsvinden in het buitenland, tijdens werk of in uw
          vrije tijd.
        </p>
      </div>
    ),
  },
  {
    question: "Is er een wachttijd voor de rechtsbijstandverzekering?",
    icon: "/img/verzekering-wachttijd-icon.png", // <-- Icoon aangepast
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Voor de meeste conflicten geldt een <b>wachttijd van 3 maanden</b> om
          te voorkomen dat u een verzekering afsluit voor een al lopend geschil.
          Voor de module Verkeer geldt doorgaans geen wachttijd.
        </p>
      </div>
    ),
  },
];

// De componentnaam blijft zoals u vroeg, maar de interne titel wordt aangepast
function RechtEnZekerheidTabbedContent() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="min-[1280px]:mx-auto mx-4 overflow-hidden border border-gray-300 my-30 max-w-7xl rounded-2xl shadow-md-custom">
      <div className="p-6">
        <p className="text-3xl font-medium">
          Veelgestelde Vragen over Recht & Zekerheid
        </p>
      </div>
      <div className="grid grid-cols-1 border-t border-gray-300 md:grid-cols-5">
        {faqData.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`p-4 text-left flex items-start space-x-3 border-b md:border-b-0 md:border-r border-gray-300 transition-colors duration-200 ${
              activeTab === index ? "bg-white" : "bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <div className="flex-shrink-0">
              <Image src={item.icon} width={40} height={40} alt="FAQ icon" />
            </div>
            <p
              className={
                activeTab === index
                  ? "font-medium text-gray-900"
                  : // typo fixed
                    "text-gray-600"
              }
            >
              {item.question}
            </p>
          </button>
        ))}
      </div>
      <div className="p-10">
        <div className="mb-8">{faqData[activeTab].answer}</div>
        <Link
          href="/contact"
          className="group relative inline-block self-start text-lg font-medium
    bg-[#00af76] text-white text-center
    py-1 px-6 rounded-full
    shadow-md-custom
    overflow-hidden
    transition-all duration-300
  "
        >
          <span className="absolute top-0 w-full h-full transition-transform duration-500 ease-in-out transform -skew-x-12 -left-[105%] bg-gradient-to-r from-transparent to-white/30 group-hover:translate-x-[110%]"></span>
          <span className="relative">Plan een adviesgesprek</span>
        </Link>
      </div>
    </div>
  );
}

export default RechtEnZekerheidTabbedContent;
