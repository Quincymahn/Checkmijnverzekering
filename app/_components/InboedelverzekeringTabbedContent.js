"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    question: "Wat is het verschil tussen nieuwwaarde en dagwaarde?",
    icon: "/img/value.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          De meeste inboedelverzekeringen keren de <b>nieuwwaarde</b> uit. Dit
          is het bedrag dat nodig is om eenzelfde, nieuw product te kopen. Zo
          kun je na brand je 3 jaar oude tv vervangen door een vergelijkbaar
          nieuw model.
        </p>
        <p>
          Als spullen echter flink in waarde zijn gedaald (vaak als de dagwaarde
          minder dan 40% van de nieuwwaarde is), wordt de <b>dagwaarde</b>{" "}
          uitgekeerd. Dit is de nieuwwaarde min een afschrijving voor
          veroudering en slijtage.
        </p>
      </div>
    ),
  },
  {
    question: "Zijn mijn laptop en telefoon ook buitenshuis verzekerd?",
    icon: "/img/chat.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Nee, een standaard inboedelverzekering dekt alleen schade en diefstal
          **in** uw woning. Als uw laptop uit uw auto wordt gestolen of u uw
          telefoon op straat laat vallen, is dit niet gedekt.
        </p>
        <p>
          Hiervoor heeft u een aanvullende <b>Buitenshuisdekking</b> nodig. Deze
          dekt uw waardevolle, draagbare spullen tegen schade en diefstal in
          heel Nederland (en soms zelfs wereldwijd).
        </p>
      </div>
    ),
  },
  {
    question: "Hoe voorkom ik dat ik onderverzekerd ben?",
    icon: "/img/alert.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Onderverzekering is een groot risico. De beste manier om dit te
          voorkomen is door gebruik te maken van de <b>inboedelwaardemeter</b>.
          Dit is een vragenlijst over uw inkomen, leeftijd en
          gezinssamenstelling.
        </p>
        <p>
          Als u deze invult, geeft de verzekeraar een &apos;garantie tegen
          onderverzekering&apos;. Dit betekent dat u bij schade altijd het
          volledige bedrag vergoed krijgt, zelfs als uw inboedel meer waard
          bleek te zijn. Het wordt aangeraden dit elke 5 jaar te herzien.
        </p>
      </div>
    ),
  },
  {
    question:
      "Ik ben student en woon op kamers. Heb ik een eigen verzekering nodig?",
    icon: "/img/graduating-student.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Ja. Als u voor uw studie uitwonend bent, vallen uw spullen vaak nog
          onder de inboedelverzekering van uw ouders. Echter, dit geldt meestal
          alleen als u in het weekend nog regelmatig thuiskomt.
        </p>
        <p>
          Als u permanent op uzelf woont, of in een studentenhuis met gedeelde
          voordeur, is het zeer verstandig om een eigen, aparte
          inboedelverzekering af te sluiten. Er zijn speciale, voordelige
          polissen voor studenten.
        </p>
      </div>
    ),
  },
  {
    question:
      "Dekt de inboedelverzekering ook de spullen in mijn schuur of tuin?",
    icon: "/img/shed.png", // <-- Nieuw relevant icoo
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Ja, spullen in uw schuur, garage of tuinhuis op hetzelfde adres zijn
          meeverzekerd. Denk aan uw (elektrische) fiets, gereedschap of
          tuinmeubelen.
        </p>
        <p>
          Houd er wel rekening mee dat er voor diefstal uit een schuur vaak
          strengere eisen gelden, zoals goedgekeurd hang- en sluitwerk. Ook kan
          er een maximaal verzekerd bedrag zijn voor spullen in de tuin.
        </p>
      </div>
    ),
  },
];

function InboedelverzekeringTabbedContent() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="px-4 pb-30">
      <div className="mx-auto overflow-hidden border border-gray-300 max-w-7xl rounded-2xl shadow-md-custom">
        <div className="p-6">
          <p className="text-3xl font-medium">Veelgestelde vragen</p>
        </div>
        <div className="grid grid-cols-1 border-t border-gray-300 md:grid-cols-5">
          {faqData.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`p-4 text-left flex items-start space-x-3 border-b md:border-b-0 md:border-r border-gray-300 transition-colors duration-200 ${
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

export default InboedelverzekeringTabbedContent;
