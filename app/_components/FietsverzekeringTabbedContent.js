"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    question: "Welk slot heb ik nodig voor mijn fietsverzekering?",
    icon: "/img/lock.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Dit is de belangrijkste voorwaarde. Vrijwel alle verzekeraars eisen
          een <b>goedgekeurd ART-slot met minimaal 2 sterren (ART-2)</b>. Dit
          kan een ring-, ketting- of beugelslot zijn.
        </p>
        <p>
          Bij diefstal moet u kunnen aantonen dat u dit slot bezat en moet u de{" "}
          <b>twee originele sleutels</b> van het slot kunnen overhandigen.
          Bewaar de aankoopnota van uw slot en de reservesleutel dus op een
          veilige plek!
        </p>
      </div>
    ),
  },
  {
    question: "Wat is een 3-jarige nieuwwaarderegeling?",
    icon: "/img/value.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          De meeste goede fietsverzekeringen bieden de eerste 3 jaar een
          nieuwwaarderegeling, met name voor e-bikes. Dit betekent dat als uw
          fiets in de eerste 3 jaar na aankoop wordt gestolen, u de{" "}
          <b>volledige aanschafwaarde</b> vergoed krijgt. U kunt daarmee een
          exact dezelfde, nieuwe fiets kopen.
        </p>
        <p>
          Na deze periode geldt vaak een afschrijvingsregeling, waarbij de
          uitkering lager wordt naarmate de fiets ouder is.
        </p>
      </div>
    ),
  },
  {
    question: "Is de accu van mijn e-bike ook verzekerd?",
    icon: "/img/battery.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Ja, de accu is een vast onderdeel van uw e-bike en is daarom
          meeverzekerd tegen zowel diefstal als schade (bij een
          Allrisk-dekking).
        </p>
        <p>
          Wordt alleen uw (uitneembare) accu gestolen terwijl uw fiets ergens
          staat? Dan valt dit vaak ook onder de diefstaldekking, mits de accu
          met een apart slot was beveiligd. Controleer hiervoor altijd de
          specifieke voorwaarden van uw polis.
        </p>
      </div>
    ),
  },
  {
    question: "Wat is Pechhulp en hoe werkt het?",
    icon: "/img/assistance.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Pechhulp is een aanvullende dekking die ideaal is voor langere
          fietstochten. Heeft u een lekke band, een kapotte ketting of een lege
          accu en kunt u niet verder? Dan belt u de alarmcentrale van de
          verzekeraar.
        </p>
        <p>
          Zij sturen een hulpdienst die u ter plekke helpt of u (en uw fiets)
          ophaalt en naar huis, uw bestemming of de dichtstbijzijnde
          fietsenmaker brengt. Deze dienst is meestal geldig in heel Nederland.
        </p>
      </div>
    ),
  },
  {
    question: "Dekt mijn inboedelverzekering mijn fiets niet?",
    icon: "/img/bicycle.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Uw inboedelverzekering biedt vaak een beperkte dekking. Diefstal uit
          een <b>goed afgesloten schuur of garage</b> is meestal gedekt, maar
          vaak tot een maximumbedrag (bijv. €1.000 of €2.500) dat te laag kan
          zijn voor een dure e-bike.
        </p>
        <p>
          Diefstal <b>buitenshuis</b> (vanaf het station, bij de supermarkt) is
          vrijwel nooit gedekt op een standaard inboedelverzekering. Ook schade
          door een val of aanrijding is niet gedekt. Een specifieke
          fietsverzekering biedt dus een veel completere en ruimere dekking.
        </p>
      </div>
    ),
  },
];

function FietsverzekeringTabbedContent() {
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

export default FietsverzekeringTabbedContent;
