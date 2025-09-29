"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    question: "Is mijn caravan verzekerd als hij gekoppeld is aan mijn auto?",
    icon: "/img/tow-car.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Alleen de <b>WA-dekking</b> (schade aan anderen) is meeverzekerd op uw
          autoverzekering zolang de caravan gekoppeld is. Schade aan uw caravan
          zelf door bijvoorbeeld een aanrijding is **niet** gedekt.
        </p>
        <p>
          Zodra u de caravan loskoppelt op de camping, stopt de dekking via de
          autoverzekering volledig. Voor schade aan de caravan zelf en diefstal
          heeft u altijd een aparte caravanverzekering nodig.
        </p>
      </div>
    ),
  },
  {
    question:
      "Wat is het verschil tussen nieuwwaarde- en aanschafwaarderegeling?",
    icon: "/img/hand-coins.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Veel verzekeraars bieden de eerste jaren een gunstige waarderegeling
          bij totaal verlies.
        </p>
        <ul className="space-y-2 text-gray-600 list-disc list-inside">
          <li>
            <b>Nieuwwaarderegeling:</b> U krijgt de prijs van een gloednieuwe,
            vergelijkbare caravan vergoed. Dit geldt alleen als u de eerste
            eigenaar bent.
          </li>
          <li>
            <b>Aanschafwaarderegeling:</b> U krijgt het bedrag terug dat u voor
            de (tweedehands) caravan heeft betaald.
          </li>
        </ul>
        <p>
          Deze regelingen duren vaak 3, 5 of soms 7 jaar. Daarna wordt de
          dagwaarde uitgekeerd.
        </p>
      </div>
    ),
  },
  {
    question:
      "Is de inhoud (inventaris) van mijn caravan standaard meeverzekerd?",
    icon: "/img/money-up.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Nee, meestal niet. De inventaris (uw persoonlijke spullen zoals
          kleding, campingmeubels, laptop) moet u vaak aanvullend meeverzekeren.
          U kiest dan een verzekerd bedrag, bijvoorbeeld €2.500 of €5.000.
        </p>
        <p>
          Controleer ook de dekking van uw doorlopende reisverzekering. Soms
          overlapt de bagagedekking hiervan met de inventarisdekking van de
          caravanverzekering.
        </p>
      </div>
    ),
  },
  {
    question: "Wat zijn de eisen voor diefstalpreventie in de stalling?",
    icon: "/img/contract-icon.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Om gedekt te zijn tegen diefstal, eisen verzekeraars dat u
          goedgekeurde beveiligingsmiddelen gebruikt. De meest voorkomende eisen
          zijn:
        </p>
        <ul className="space-y-2 text-gray-600 list-disc list-inside">
          <li>
            Een <b>goedgekeurd disselslot</b> (SCM-keurmerk).
          </li>
          <li>
            Soms wordt aanvullend een <b>wielklem</b> geëist.
          </li>
        </ul>
        <p>
          Zorg ervoor dat u kunt aantonen dat u deze sloten bezit, bijvoorbeeld
          met de aankoopnota en de originele sleutels.
        </p>
      </div>
    ),
  },
  {
    question: "Wat moet ik doen bij pech met de caravan in het buitenland?",
    icon: "/img/broken-car-2.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Pechhulp voor de caravan valt niet onder de standaarddekking. Hiervoor
          heeft u een aanvullende dekking <b>&apos;Hulpverlening&apos;</b> of{" "}
          <b>&apos;Pechhulp Caravan&apos;</b> nodig.
        </p>
        <p>
          Als u deze dekking heeft, neemt u direct contact op met de
          alarmcentrale van uw verzekeraar. Zij regelen hulp ter plaatse,
          eventueel vervoer naar een garage, of repatriëring van de caravan naar
          Nederland als reparatie niet mogelijk is.
        </p>
      </div>
    ),
  },
];

function CaravanverzekeringTabbedContent() {
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

export default CaravanverzekeringTabbedContent;
