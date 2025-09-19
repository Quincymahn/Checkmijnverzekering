"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    question: "Wat verstaat de verzekeraar onder een 'ongeval'?",
    icon: "/img/alert.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Dit is een belangrijk punt. Een verzekeraar definieert een ongeval als
          een &apos;plotseling, onverwacht, van buiten inwerkend geweld op het
          lichaam&apos;. Een val van de trap is een ongeval. Een hartaanval is
          dat niet, omdat de oorzaak van binnenuit komt (ziekte).
        </p>
        <p>
          De gebeurtenis moet dus onvrijwillig en onverwacht zijn. Zaken als
          vergiftiging, verdrinking of een zonnesteek worden doorgaans ook als
          ongeval gezien.
        </p>
      </div>
    ),
  },
  {
    question:
      "Is er een verschil met een arbeidsongeschiktheidsverzekering (AOV)?",
    icon: "/img/legal.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Ja, een heel groot verschil. Een <b>AOV</b> keert een{" "}
          <b>maandelijks inkomen</b> uit als u door ziekte of een ongeval niet
          meer kunt werken. Het is een inkomensverzekering.
        </p>
        <p>
          Een <b>ongevallenverzekering</b> keert een <b>eenmalig bedrag</b> uit
          gebaseerd op de lichamelijke gevolgen (de invaliditeit) van een
          ongeval, ongeacht of u nog kunt werken of niet. De twee verzekeringen
          kunnen elkaar dus uitstekend aanvullen.
        </p>
      </div>
    ),
  },
  {
    question: "Zijn ongevallen tijdens het sporten ook gedekt?",
    icon: "/img/stretching.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Ja, ongevallen tijdens het beoefenen van amateursporten zijn standaard
          gedekt. Echter, veel &apos;gevaarlijke&apos; of extreme sporten zijn
          vaak uitgesloten van de basisdekking. Denk hierbij aan
          parachutespringen, diepzeeduiken, bungeejumpen of bergbeklimmen.
        </p>
        <p>
          Voor deze activiteiten kunt u vaak een aanvullende dekking voor
          &apos;gevaarlijke sporten&apos; afsluiten. Controleer altijd de
          polisvoorwaarden als u een avontuurlijke sporter bent.
        </p>
      </div>
    ),
  },
  {
    question: "Wat is 'dubbele uitkering bij verkeersongevallen'?",
    icon: "/img/traffic.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Dit is een veelvoorkomende aanvullende dekking. Als u kiest voor deze
          optie, wordt het verzekerde bedrag voor blijvende invaliditeit en
          overlijden verdubbeld als het ongeval plaatsvond in het verkeer.
        </p>
        <p>
          Omdat verkeersongevallen een belangrijke oorzaak zijn van ernstig
          letsel, biedt deze module extra financiële zekerheid voor een relatief
          lage extra premie.
        </p>
      </div>
    ),
  },
  {
    question: "Keert de verzekering ook uit bij kleine ongevallen?",
    icon: "/img/plaster.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          De verzekering keert alleen uit als er sprake is van <b>blijvende</b>{" "}
          invaliditeit. Een gebroken arm die volledig geneest, leidt dus niet
          tot een uitkering. Pas als u na de genezing bijvoorbeeld uw pink niet
          meer volledig kunt buigen, is er sprake van een laag percentage
          blijvende invaliditeit en ontvangt u een percentage van het verzekerde
          bedrag.
        </p>
        <p>
          Sommige polissen bieden wel een aanvullende dekking voor
          tandartskosten na een ongeval, ook als er geen sprake is van blijvend
          letsel.
        </p>
      </div>
    ),
  },
];

function OngevallenverzekeringTabbedContent() {
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

export default OngevallenverzekeringTabbedContent;
