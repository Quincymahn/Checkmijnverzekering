"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    question: "Wat is het verschil tussen een opstal- en inboedelverzekering?",
    icon: "/img/inboedel-verzekering-icon.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p className="italic font-medium">
          De simpelste vuistregel is de &apos;verhuisdoos-test&apos;:
        </p>
        <p>
          Stel u voor dat u uw huis op zijn kop houdt. Alles wat eruit valt en u
          mee kunt nemen bij een verhuizing, is <b>inboedel</b> (uw meubels, tv,
          kleding). Alles wat vast blijft zitten (muren, dak, vaste keuken,
          badkamer) is <b>opstal</b>.
        </p>
      </div>
    ),
  },
  {
    question: "Hoe wordt de herbouwwaarde van mijn huis bepaald?",
    icon: "/img/calculator-icon.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          De verzekerde waarde is de herbouwwaarde, niet de verkoopwaarde. Dit
          is het bedrag dat nodig is om uw huis op precies dezelfde plek en
          manier opnieuw te bouwen na totaal verlies.
        </p>
        <p>
          Verzekeraars gebruiken hiervoor een &apos;sherbouwwaardemeter&apos;s.
          Hierin worden o.a. het type huis, de inhoud in kubieke meters (m³) en
          de gebruikte materialen meegenomen. Het is cruciaal dit correct in te
          schatten om onderverzekering te voorkomen.
        </p>
      </div>
    ),
  },
  {
    question: "Ik woon in een appartement. Heb ik een opstalverzekering nodig?",
    icon: "/img/appartment-icon.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Nee, in de meeste gevallen niet. Als u in een appartement woont, bent
          u lid van een Vereniging van Eigenaren (VvE). De VvE is verplicht een
          collectieve opstalverzekering af te sluiten voor het hele gebouw. De
          kosten hiervoor worden verrekend in uw VvE-bijdrage.
        </p>
        <p>
          <b>Let op:</b> luxe verbeteringen die u zelf heeft aangebracht (zoals
          een nieuwe keuken, badkamer of parketvloer) vallen mogelijk niet onder
          de VvE-polis. Hiervoor kunt u een aanvullende
          &apos;eigenaarsbelang&apos; verzekering afsluiten.
        </p>
      </div>
    ),
  },
  {
    question: "Zijn mijn schuur, schutting en zonnepanelen meeverzekerd?",
    icon: "/img/huis-duurzaam-icon.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Ja, bijgebouwen zoals een schuur of garage, en erfafscheidingen zoals
          een schutting, vallen doorgaans onder de dekking van de
          opstalverzekering.
        </p>
        <p>
          Ook zonnepanelen die vast op het dak zijn gemonteerd, worden over het
          algemeen gezien als onderdeel van de opstal. Het is wel belangrijk om
          de herbouwwaarde van uw woning te verhogen na het plaatsen van
          zonnepanelen om onderverzekering te voorkomen.
        </p>
      </div>
    ),
  },
  {
    question: "Is een opstalverzekering verplicht?",
    icon: "/img/contract-icon.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Wettelijk gezien is het niet verplicht. Echter, als u een hypotheek
          afsluit voor de aankoop van uw woning, zal de hypotheekverstrekker (de
          bank) u **altijd verplichten** om een opstalverzekering af te sluiten.
          Het huis dient namelijk als onderpand voor de lening.
        </p>
      </div>
    ),
  },
];

function OpstalverzekeringTabbedContent() {
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

export default OpstalverzekeringTabbedContent;
