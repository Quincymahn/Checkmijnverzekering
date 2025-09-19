"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    question: "Is een WA-verzekering voor mijn boot verplicht?",
    icon: "/img/file.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          In Nederland is een WA-verzekering voor de meeste pleziervaartuigen
          wettelijk niet verplicht. Echter, vrijwel elke jachthaven, stalling en
          watersportvereniging stelt een WA-verzekering met een minimale dekking
          (vaak €500.000) **wel verplicht** in hun reglement.
        </p>
        <p>
          Daarnaast is het in veel populaire vaarlanden, zoals Italië, Spanje en
          Griekenland, wettelijk verplicht om een WA-verzekering te hebben.
          Gezien de potentieel enorme kosten van schade aan anderen, is het zeer
          onverstandig om onverzekerd het water op te gaan.
        </p>
      </div>
    ),
  },
  {
    question: "Wat is mijn vaargebied en kan ik dit uitbreiden?",
    icon: "/img/location.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Een standaard bootverzekering dekt de Nederlandse binnenwateren,
          inclusief het IJsselmeer en de Zeeuwse wateren. Dit is voor de meeste
          sloepen en motorboten voldoende.
        </p>
        <p>
          Wilt u ook op de Noordzee of naar het buitenland varen? Dan moet u uw
          vaargebied uitbreiden. Opties zijn bijvoorbeeld
          &apos;Kustwateren&apos;, &apos;Europese wateren&apos; of zelfs
          werelddekking. De premie stijgt naarmate het vaargebied groter en
          risicovoller wordt.
        </p>
      </div>
    ),
  },
  {
    question: "Is mijn buitenboordmotor verzekerd tegen diefstal?",
    icon: "/img/propeller.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Ja, met een Casco-dekking is uw buitenboordmotor verzekerd tegen
          diefstal. Verzekeraars stellen hier wel strenge eisen aan. U moet de
          motor vastzetten met een <b>goedgekeurd motorslot</b> (SCM- of
          VbV-keurmerk).
        </p>
        <p>
          Als de motor eenvoudig te demonteren is, kan de verzekeraar eisen dat
          u deze van de boot haalt als u de boot onbeheerd achterlaat.
        </p>
      </div>
    ),
  },
  {
    question: "Dekt de verzekering ook hulp bij pech op het water?",
    icon: "/img/alert.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Nee, hulp bij pech (bijvoorbeeld motorstoring) is niet standaard
          inbegrepen. Hiervoor kunt u de aanvullende dekking{" "}
          <b>&apos;Pechhulp op het water&apos;</b> afsluiten.
        </p>
        <p>
          Deze dekking zorgt ervoor dat u bij pech wordt geholpen, bijvoorbeeld
          door de KNRM of een andere hulpdienst. Dit omvat vaak reparatie ter
          plaatse of het slepen van uw boot naar de dichtstbijzijnde haven.
        </p>
      </div>
    ),
  },
  {
    question: "Wat als ik deelneem aan wedstrijden?",
    icon: "/img/boat.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Deelname aan zeilwedstrijden is een verhoogd risico en is daarom vaak
          uitgesloten van de standaarddekking. Als u wedstrijden vaart, moet u
          dit expliciet aangeven. U kunt dan een aanvullende dekking voor
          &apos;wedstrijdrisico&apos; afsluiten.
        </p>
        <p>
          Controleer de voorwaarden van de wedstrijdorganisatie; vaak wordt een
          WA-verzekering met een verhoogd verzekerd bedrag verplicht gesteld.
        </p>
      </div>
    ),
  },
];

function PleziervaartuigverzekeringTabbedContent() {
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

export default PleziervaartuigverzekeringTabbedContent;
