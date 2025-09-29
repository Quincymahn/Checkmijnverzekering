"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Nieuwe, correcte data specifiek voor de categorie Wonen
const faqData = [
  {
    question: "Ik huur een woning. Welke verzekeringen heb ik dan nodig?",
    icon: "/img/Generated Image September 23, 2025 - 2_48PM.png", // <-- Icoon aangepast
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Als huurder bent u zelf verantwoordelijk voor een{" "}
          <b>inboedelverzekering</b> (voor uw spullen) en een{" "}
          <b>aansprakelijkheidsverzekering</b>. De opstalverzekering (voor het
          gebouw zelf) wordt door de verhuurder geregeld en is zijn
          verantwoordelijkheid.
        </p>
      </div>
    ),
  },
  {
    question: "Wat is het verschil tussen verkoopwaarde en herbouwwaarde?",
    icon: "/img/Generated Image September 23, 2025 - 2_52PM.png", // <-- Icoon aangepast
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          De <b>verkoopwaarde</b> is de marktwaarde van uw huis, inclusief de
          grond en de locatie. De <b>herbouwwaarde</b> is het bedrag dat nodig
          is om uw huis op precies dezelfde plek en manier opnieuw op te bouwen.
          Uw opstalverzekering is gebaseerd op deze herbouwwaarde.
        </p>
      </div>
    ),
  },
  {
    question: "Hoe weet ik of ik niet onderverzekerd ben?",
    icon: "/img/Generated Image September 23, 2025 - 3_06PM.png", // <-- Icoon aangepast
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Door gebruik te maken van de &apos;inboedelwaardemeter&apos; en de
          &apos;herbouwwaardemeter&apos;. Wanneer u deze correct invult, geven
          de meeste verzekeraars een{" "}
          <b>&apos;garantie tegen onderverzekering&apos;</b>. Dit betekent dat u
          bij schade altijd het volledige bedrag vergoed krijgt, ook als de
          waarde hoger bleek te zijn.
        </p>
      </div>
    ),
  },
  {
    question: "Is schade door mijn huisdier ook verzekerd?",
    icon: "/img/Generated Image September 23, 2025 - 3_07PM.png", // <-- Icoon aangepast
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Schade die uw huisdier per ongeluk bij <b>anderen</b> veroorzaakt,
          valt onder uw aansprakelijkheidsverzekering. Schade die uw huisdier
          aan uw <b>eigen spullen</b> toebrengt (bijvoorbeeld krassen op de
          bank), is meestal uitgesloten op de inboedelverzekering, tenzij u een
          uitgebreide Allrisk-dekking heeft.
        </p>
      </div>
    ),
  },
  {
    question: "Ik ga verbouwen. Moet ik mijn verzekering aanpassen?",
    icon: "/img/Generated Image September 23, 2025 - 3_13PM.png", // <-- Icoon aangepast
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Jazeker, dit is heel belangrijk. Informeer ons altijd voorafgaand aan
          een verbouwing. Na de verbouwing moet de herbouwwaarde van uw
          opstalverzekering worden verhoogd om onderverzekering te voorkomen.
          Ook de waarde van uw inboedel kan stijgen door bijvoorbeeld de
          aanschaf van een nieuwe keuken.
        </p>
      </div>
    ),
  },
];

// Componentnaam aangepast voor duidelijkheid
function WonenTabbedConent() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="min-[1280px]:mx-auto mx-4 overflow-hidden border border-gray-300 my-30 max-w-7xl rounded-2xl shadow-md-custom">
      <div className="p-6">
        <p className="text-3xl font-medium">Veelgestelde vragen over Wonen</p>
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
          href="/contact" // Link naar de contactpagina
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

export default WonenTabbedConent;
