"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    question: "Wat is het verschil tussen taxatiewaarde en dagwaarde?",
    icon: "/img/award.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Dit is het belangrijkste verschil met een normale autoverzekering. De{" "}
          <b>dagwaarde</b> is wat een auto vandaag waard is, rekening houdend
          met leeftijd en slijtage. Voor een klassieker is dit bedrag vaak erg
          laag.
        </p>
        <p>
          De <b>taxatiewaarde</b> is de waarde die wordt vastgesteld door een
          erkend taxateur. Hierin wordt de originaliteit, zeldzaamheid en de
          staat van de auto meegenomen. Een oldtimerverzekering keert bij totaal
          verlies (total loss) of diefstal deze hoge, vastgestelde taxatiewaarde
          uit.
        </p>
      </div>
    ),
  },
  {
    question: "Wanneer is mijn auto een oldtimer voor de verzekering?",
    icon: "/img/oldtimer.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          De regels verschillen per verzekeraar. De meeste verzekeraars hanteren
          een minimumleeftijd van <b>25 jaar</b>. Sommige specialisten
          verzekeren auto&apos;s vanaf 15 jaar als &apos;youngtimer&apos;, vaak
          met vergelijkbare voorwaarden.
        </p>
        <p>
          Let op: de leeftijd voor de motorrijtuigenbelasting (40 jaar voor
          volledige vrijstelling) is anders dan de leeftijd die verzekeraars
          hanteren.
        </p>
      </div>
    ),
  },
  {
    question: "Mag ik mijn oldtimer elke dag gebruiken?",
    icon: "/img/barriers.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Nee, een oldtimerverzekering is bedoeld voor hobbymatig gebruik.
          Woon-werkverkeer is meestal uitgesloten. Verzekeraars hanteren een
          maximaal aantal kilometers per jaar, vaak tussen de{" "}
          <b>5.000 en 7.500 kilometer</b>.
        </p>
        <p>
          Daarnaast stellen vrijwel alle verzekeraars als eis dat u een andere
          auto voor dagelijks gebruik bezit.
        </p>
      </div>
    ),
  },
  {
    question: "Welke eisen zijn er voor de stalling van mijn klassieker?",
    icon: "/img/garage.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Vanwege de waarde en diefstalgevoeligheid van oldtimers, is een
          veilige stalling bijna altijd een harde eis. Dit betekent een{" "}
          <b>goed afgesloten, deugdelijke garage</b> of een vergelijkbare
          stalling. De auto &apos;s nachts op straat laten staan is doorgaans
          niet toegestaan en kan betekenen dat diefstal niet gedekt is.
        </p>
      </div>
    ),
  },
  {
    question: "Is een taxatierapport altijd verplicht?",
    icon: "/img/file.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Ja, voor een Beperkt Casco of Allrisk dekking is een recent
          taxatierapport (meestal niet ouder dan 3 jaar) van een erkend taxateur
          verplicht. Dit rapport is het bewijs van de waarde van uw auto en
          vormt de basis voor de verzekerde som. Voor een kale WA-verzekering is
          een taxatierapport niet nodig, maar dan is diefstal of schade aan uw
          eigen auto ook niet gedekt.
        </p>
      </div>
    ),
  },
];

function OldtimerverzekeringTabbedContent() {
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
            href="/plan-een-gesprek"
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

export default OldtimerverzekeringTabbedContent;
