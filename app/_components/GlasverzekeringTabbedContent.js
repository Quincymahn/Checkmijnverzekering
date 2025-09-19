"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    question:
      "Is een glasverzekering standaard inbegrepen bij mijn opstalverzekering?",
    icon: "/img/file.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Dit verschilt sterk per verzekeraar. Bij veel &apos;basis&apos;
          opstalverzekeringen is glasschade uitgesloten en moet u dit als een
          aparte module toevoegen. Bij uitgebreidere &apos;Allrisk&apos;
          opstalverzekeringen is het vaak wel standaard inbegrepen.
        </p>
        <p>
          Het is daarom cruciaal om de polisvoorwaarden te controleren. Wij
          helpen u graag te bepalen of u al gedekt bent of dat een aanvullende
          glasverzekering verstandig is.
        </p>
      </div>
    ),
  },
  {
    question: "Wat moet ik doen als ik een gebroken ruit heb?",
    icon: "/img/phone-call.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Neem direct contact op met de alarmcentrale van uw verzekeraar (of met
          ons, uw tussenpersoon). Doe dit voordat u zelf een glaszetter belt.
        </p>
        <p>
          De verzekeraar heeft contracten met landelijke herstelbedrijven. Zij
          sturen direct een aangesloten glaszetter langs om de ruit (nood) te
          repareren. De rekening gaat dan rechtstreeks naar de verzekeraar, u
          hoeft zelf niets voor te schieten.
        </p>
      </div>
    ),
  },
  {
    question: "Is speciaal glas zoals isolatieglas (HR++) ook gedekt?",
    icon: "/img/windows.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Ja, een goede glasverzekering dekt alle soorten glas die bedoeld zijn
          om licht door te laten in uw woning. Dit omvat dus dubbel glas, HR,
          HR+, HR++ en zelfs triple glas. Ook glas-in-lood, geëtst of gekleurd
          glas is vaak meeverzekerd, soms tot een maximumbedrag.
        </p>
      </div>
    ),
  },
  {
    question: "Dekt de verzekering ook als ik zelf de ruit breek?",
    icon: "/img/worker.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Ja, de glasverzekering is een &apos;alle onheilen&apos; dekking. Het
          maakt niet uit wat de oorzaak is van de breuk, zolang het maar
          plotseling en onverwacht gebeurt. Dus of de bal van de buurjongen
          erdoorheen gaat of u er zelf tegenaan loopt, de schade is gedekt.
          Schade door opzet is uiteraard uitgesloten.
        </p>
      </div>
    ),
  },
  {
    question:
      "Ik huur een woning. Wie is verantwoordelijk voor de glasverzekering?",
    icon: "/img/key-chain.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          In de meeste gevallen bent u als huurder zelf verantwoordelijk voor
          het verzekeren van het glas in uw huurwoning. Controleer uw
          huurcontract om te zien welke afspraken hierover zijn gemaakt. Als de
          verhuurder het niet heeft geregeld, is het sterk aan te raden zelf een
          glasverzekering af te sluiten. Dit kan vaak als een voordelige
          aanvulling op uw inboedelverzekering.
        </p>
      </div>
    ),
  },
];

function GlasverzekeringTabbedContent() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="px-4 pb-30">
      <div className="mx-auto overflow-hidden border border-gray-300 max-w-7xl rounded-2xl shadow-md-custom">
        <div className="p-6">
          <p className="text-3xl font-medium">Veelgestelde vragen</p>
        </div>
        <div className="grid grid-cols-1 border-t border-gray-300 lg:grid-cols-5">
          {faqData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`p-4 text-left flex items-start space-x-3 border-b lg:border-b-0 lg:border-r border-gray-300 transition-colors duration-200 ${
                activeTab === index
                  ? "bg-white"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <div className="flex-shrink-0">
                <Image src={item.icon} width={40} height={40} alt="FAQ icon" />
              </div>
              <p
                className={
                  activeTab === index
                    ? "font-medium text-gray-900"
                    : "text-gray-600"
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
            href="#"
            className="group relative inline-block self-start text-lg font-medium
    bg-[#00af76] text-white text-center
    py-1 px-6 rounded-full
    shadow-md-custom
    overflow-hidden
    transition-all duration-300
  "
          >
            {/* Dit is het glans-element */}
            <span className="absolute top-0 w-full h-full transition-transform duration-500 ease-in-out transform -skew-x-12 -left-[105%] bg-gradient-to-r from-transparent to-white/30 group-hover:translate-x-[110%]"></span>

            {/* Tekst moet relatief zijn */}
            <span className="relative">Start vergelijken</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GlasverzekeringTabbedContent;
