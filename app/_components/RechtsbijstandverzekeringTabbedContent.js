"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    question: "Wanneer kan ik de verzekering inschakelen? Is er een wachttijd?",
    icon: "/img/calendar.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Ja, voor de meeste modules geldt een wachttijd, vaak van 3 maanden.
          Dit is om te voorkomen dat mensen een verzekering afsluiten voor een
          conflict dat al speelt of dat ze zien aankomen.
        </p>
        <p>
          Voor de module Verkeer geldt doorgaans geen wachttijd; u bent direct
          verzekerd voor conflicten die ontstaan na de ingangsdatum. U kunt dus
          niet bellen voor een ongeluk dat gisteren is gebeurd.
        </p>
      </div>
    ),
  },
  {
    question: "Mag ik mijn eigen advocaat kiezen?",
    icon: "/img/jurist-icon.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          In eerste instantie wordt uw zaak behandeld door de juristen van de
          verzekeraar zelf. Zij proberen het conflict zonder rechtszaak op te
          lossen.
        </p>
        <p>
          Als een rechtszaak onvermijdelijk is, heeft u in de meeste gevallen
          recht op een vrije advocaatkeuze. De verzekeraar vergoedt dan de
          kosten van een externe advocaat, vaak tot een maximumbedrag.
        </p>
      </div>
    ),
  },
  {
    question: "Wat is het verschil met een aansprakelijkheidsverzekering?",
    icon: "/img/balance.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Dit is een veelvoorkomende verwarring. Een{" "}
          <b>aansprakelijkheidsverzekering (AVP)</b> vergoedt de schade die u
          bij een ander veroorzaakt. Het is voor situaties waarin u de
          &apos;dader&apos; bent.
        </p>
        <p>
          Een <b>rechtsbijstandverzekering</b> helpt u juist om uw recht te
          halen als u zelf schade heeft geleden of in een conflict bent beland.
          Het is voor situaties waarin u het &apos;slachtoffer&apos; bent of in
          een geschil zit.
        </p>
      </div>
    ),
  },
  {
    question: "Is een echtscheiding ook gedekt?",
    icon: "/img/broken-piggy-bank.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Nee, geschillen die voortkomen uit een echtscheiding of beëindiging
          van een samenlevingscontract zijn bijna altijd uitgesloten van de
          dekking. Wel bieden sommige verzekeraars tegen een extra premie
          &apos;mediation bij echtscheiding&apos; aan. Dit dekt de kosten van
          een bemiddelaar, maar niet de advocaatkosten voor de procedure zelf.
        </p>
      </div>
    ),
  },
  {
    question: "Wat als de verzekeraar mijn zaak niet kansrijk vindt?",
    icon: "/img/contract-icon.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          De verzekeraar zal alleen juridische stappen ondernemen als zij de
          zaak haalbaar achten. Als de jurist van de verzekeraar uw zaak geen
          redelijke kans van slagen geeft, wordt er geen procedure gestart.
        </p>
        <p>
          Bent u het hier niet mee eens? Dan kunt u gebruikmaken van de
          geschillenregeling. U kunt dan op kosten van de verzekeraar een
          tweede, onafhankelijke opinie vragen van een advocaat naar keuze. Als
          deze advocaat uw zaak wel kansrijk vindt, zal de verzekeraar de kosten
          alsnog dekken.
        </p>
      </div>
    ),
  },
];

function RechtsbijstandverzekeringTabbedContent() {
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

export default RechtsbijstandverzekeringTabbedContent;
