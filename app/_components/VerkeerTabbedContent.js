"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Nieuwe, correcte data specifiek voor de categorie VERKEER
const faqData = [
  {
    question: "Hoe werken schadevrije jaren?",
    icon: "/img/certificate-icon.png", // <-- Icoon aangepast
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Voor elk jaar dat u geen schade claimt, bouwt u een schadevrij jaar
          op. Hoe meer jaren u heeft, hoe hoger uw <b>no-claimkorting</b> en hoe
          lager uw premie. Wij helpen u deze mee te nemen bij een overstap van
          verzekeraar.
        </p>
      </div>
    ),
  },
  {
    question: "Wat is het verschil tussen WA, Beperkt Casco en Allrisk?",
    icon: "/img/car-crash-icon.png", // <-- Icoon aangepast
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          <b>WA</b> dekt alleen schade die u aan anderen veroorzaakt.{" "}
          <b>Beperkt Casco (WA+)</b> dekt ook o.a. diefstal, ruit- en
          stormschade. <b>Allrisk (Volledig Casco)</b> dekt daarbovenop ook
          schade aan uw eigen voertuig die u zelf heeft veroorzaakt.
        </p>
      </div>
    ),
  },
  {
    question: "Ben ik direct verzekerd na het aanvragen?",
    icon: "/img/file-check-icon.png", // <-- Icoon aangepast
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Ja, in de meeste gevallen ontvangt u direct na de aanvraag een{" "}
          <b>voorlopige dekking</b> per e-mail. Dit betekent dat u direct
          verzekerd de weg op mag, terwijl de verzekeraar uw aanvraag definitief
          beoordeelt en de polis opmaakt.
        </p>
      </div>
    ),
  },
  {
    question: "Dekt mijn verzekering ook pechhulp?",
    icon: "/img/roadside-assistance-icon.png", // <-- Icoon aangepast
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Nee, pechhulp is een aparte, aanvullende dekking die u kunt toevoegen
          aan uw verzekering. Wij kunnen u helpen een verzekering te vinden met
          een goede <b>pechhulpservice</b> voor zowel Nederland als het
          buitenland.
        </p>
      </div>
    ),
  },
  {
    question: "Kan ik mijn verzekering dagelijks opzeggen?",
    icon: "/img/calendar-icon.png", // <-- Icoon aangepast
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Ja, de meeste voertuigverzekeringen hebben een contract voor één jaar.
          Na dit eerste jaar zijn ze <b>dagelijks opzegbaar</b> met een
          opzegtermijn van één maand. Wij regelen de overstapservice volledig
          voor u.
        </p>
      </div>
    ),
  },
];

// Componentnaam is nu correct
function VerkeerTabbedContent() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="mx-auto overflow-hidden border border-gray-300 mt-30 max-w-7xl rounded-2xl shadow-md-custom">
      <div className="p-6">
        <p className="text-3xl font-medium">Veelgestelde Vragen over Verkeer</p>
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

export default VerkeerTabbedContent;
