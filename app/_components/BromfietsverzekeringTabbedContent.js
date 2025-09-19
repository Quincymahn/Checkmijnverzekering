"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    question: "Welke dekkingen zijn er voor een bromfiets of scooter?",
    icon: "/img/scooter.png", // <-- Aangepast icoon
    answer: (
      <>
        <p className="mb-4 text-2xl italic font-medium">
          Voor een bromfiets zijn er drie standaard dekkingen:
        </p>
        <ul className="space-y-2 text-gray-600 list-disc list-inside">
          <li>
            <b>WA (Wettelijke Aansprakelijkheid):</b> Dit is de verplichte
            basis. Het dekt schade die je met jouw bromfiets aan anderen
            veroorzaakt.
          </li>
          <li>
            <b>WA + Diefstal (Beperkt Casco):</b> Dekt naast WA ook de diefstal
            van je bromfiets. Gezien het hoge diefstalrisico is dit een zeer
            populaire keuze.
          </li>
          <li>
            <b>Allrisk (Diefstal & Aanrijding):</b> De meest complete dekking.
            Dekt alles van WA+ Diefstal, plus schade aan je eigen bromfiets door
            een aanrijding of val, zelfs als het je eigen schuld is.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Is een helm meeverzekerd?",
    icon: "/img/helmet.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Een helm en eventuele beschermende kleding zijn vaak niet standaard
          meeverzekerd op de WA-polis. Bij een Diefstal of Allrisk verzekering
          is schade aan je helm en kleding na een ongeval vaak tot een bepaald
          bedrag (bijv. €350 tot €500) meeverzekerd.
        </p>
        <p>
          Als je een zeer dure helm hebt, kun je overwegen het verzekerde bedrag
          voor accessoires te verhogen.
        </p>
      </div>
    ),
  },
  {
    question: "Wat zijn de eisen voor een slot?",
    icon: "/img/lock.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Om gedekt te zijn tegen diefstal, eisen vrijwel alle verzekeraars dat
          je een goedgekeurd ART-slot gebruikt. De ART-stichting test en
          certificeert sloten op hun diefstalbestendigheid.
        </p>
        <p>
          Voor bromfietsen en scooters is een slot met **minimaal ART-categorie
          3** vereist. Zorg ervoor dat je altijd kunt aantonen dat je een
          dergelijk slot in je bezit hebt, bijvoorbeeld met de aankoopnota en de
          twee originele sleutels.
        </p>
      </div>
    ),
  },
  {
    question: "Ben ik direct verzekerd na het aanvragen?",
    icon: "/img/file.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Ja, in de meeste gevallen wel. Zodra je de aanvraag hebt afgerond,
          ontvang je direct per e-mail een voorlopige dekking. Dit betekent dat
          je direct verzekerd de weg op mag.
        </p>
        <p>
          De verzekeraar zal je aanvraag vervolgens definitief beoordelen. In de
          meeste gevallen wordt de voorlopige dekking binnen enkele dagen
          omgezet in een definitieve polis.
        </p>
      </div>
    ),
  },
  {
    question: "Hoe werkt het opzeggen van mijn oude verzekering?",
    icon: "/img/bridge.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Overstappen is heel eenvoudig. Tijdens het aanvragen van je nieuwe
          verzekering kun je gebruikmaken van onze gratis overstapservice. Je
          nieuwe verzekeraar zorgt er dan voor dat je oude polis netjes wordt
          opgezegd.
        </p>
      </div>
    ),
  },
];

function BromfietsverzekeringTabbedContent() {
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

export default BromfietsverzekeringTabbedContent;
