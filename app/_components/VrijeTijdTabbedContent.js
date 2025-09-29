"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Nieuwe, correcte data specifiek voor de categorie VRIJE TIJD
const faqData = [
  {
    question: "Is een doorlopende of kortlopende reisverzekering beter?",
    icon: "/img/reis-en-annulering-verzekering-icon.png", // <-- Icoon aangepast
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Als u vaker dan twee weken per jaar op vakantie gaat of regelmatig
          weekendjes weg bent, is een <b>doorlopende reisverzekering</b> bijna
          altijd voordeliger en gemakkelijker dan steeds een losse,{" "}
          <b>kortlopende</b> polis af te sluiten.
        </p>
      </div>
    ),
  },
  {
    question: "Dekt mijn inboedelverzekering mijn gestolen e-bike niet?",
    icon: "/img/dief.png", // <-- Icoon aangepast
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Uw inboedelverzekering dekt diefstal vaak alleen vanuit een goed
          afgesloten schuur en tot een beperkt bedrag. Een specifieke{" "}
          <b>fietsverzekering</b> dekt diefstal overal (ook op straat) en keert
          vaak de volledige aanschafwaarde uit.
        </p>
      </div>
    ),
  },
  {
    question: "Is de voortent van mijn caravan meeverzekerd?",
    icon: "/img/caravan-voortent-icon.png", // <-- Icoon aangepast
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Dit is een cruciaal punt. Bij veel basis caravanverzekeringen moet u
          de <b>voortent, luifel en uw inventaris</b> apart meeverzekeren. Wij
          controleren altijd de polisvoorwaarden om er zeker van te zijn dat
          deze kostbare zaken goed zijn gedekt.
        </p>
      </div>
    ),
  },
  {
    question: "Is een bootverzekering verplicht in Nederland?",
    icon: "/img/zeilboot-verzekering-icon.png", // <-- Icoon aangepast
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Een <b>WA-verzekering</b> (voor schade aan anderen) is wettelijk niet
          overal verplicht. Echter, vrijwel elke jachthaven, stalling en
          watersportvereniging stelt dit wel als eis in hun reglement. Gezien de
          risico&apos;s is het zeer onverstandig om onverzekerd te varen.
        </p>
      </div>
    ),
  },
  {
    question: "Wat moet ik doen bij pech of een noodgeval op reis?",
    icon: "/img/reisverzekering-icon.png", // <-- Icoon aangepast
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Neem altijd direct contact op met de <b>alarmcentrale</b> van uw
          verzekeraar. Het telefoonnummer staat op uw polis. Zij kunnen u 24/7
          helpen met medische assistentie, pechhulp voor uw auto of caravan, of
          andere noodgevallen.
        </p>
      </div>
    ),
  },
];

// Componentnaam aangepast voor duidelijkheid
function VrijeTijdTabbedContent() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="min-[1280px]:mx-auto mx-4 overflow-hidden border border-gray-300 my-30 max-w-7xl rounded-2xl shadow-md-custom">
      <div className="p-6">
        <p className="text-3xl font-medium">
          Veelgestelde Vragen over Vrije Tijd
        </p>
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

export default VrijeTijdTabbedContent;
