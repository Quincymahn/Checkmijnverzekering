"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    question:
      "Wat is het verschil tussen WA, WA+ (Beperkt Casco) en Allrisk (Volledig Casco)?",
    icon: "/img/car.png",
    answer: (
      <>
        <p className="mb-4 text-2xl italic font-medium">
          Een autoverzekering kent drie basisdekkingen:
        </p>
        <ul className="space-y-2 text-gray-600 list-disc list-inside">
          <li>
            <b>WA (Wettelijke Aansprakelijkheid):</b> Vergoedt alleen schade die
            jij met jouw auto aan anderen toebrengt. Dit is de wettelijk
            verplichte minimumdekking.
          </li>
          <li>
            <b>WA+ (Beperkt Casco):</b> Vergoedt naast de WA-dekking ook schade
            aan je eigen auto door o.a. diefstal, brand, storm en ruitschade.
          </li>
          <li>
            <b>Allrisk (Volledig Casco):</b> De meest complete dekking. Vergoedt
            alles van WA+ én schade aan je eigen auto die je zelf hebt
            veroorzaakt, bijvoorbeeld door een aanrijding.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Hoe werken schadevrije jaren en wat is een no-claimkorting?",
    icon: "/img/encrypted.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Schadevrije jaren zijn de jaren waarin je een autoverzekering op je
          naam hebt gehad, maar geen schade hebt geclaimd die jouw schuld was.
          Voor elk jaar dat je schadevrij rijdt, bouw je één schadevrij jaar op.
        </p>
        <p>
          Hoe meer schadevrije jaren je hebt, hoe meer no-claimkorting je
          krijgt. Dit is een korting op je basispremie. Deze korting kan oplopen
          tot wel 85%, waardoor je verzekering aanzienlijk goedkoper wordt.
        </p>
        <p>
          <b>Let op: </b>Als je een schade claimt die jouw schuld is, verlies je
          een deel van je schadevrije jaren en daalt je no-claimkorting. Dit
          resulteert in een hogere premie.
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
          omgezet in een definitieve polis, waar je ook weer bericht van krijgt.
          Mocht de verzekeraar je onverhoopt toch niet accepteren, dan nemen we
          direct contact met je op.
        </p>
      </div>
    ),
  },
  {
    question: "Welke factoren bepalen de hoogte van mijn premie?",
    icon: "/img/growth.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          De premie van je autoverzekering wordt berekend op basis van het
          risico dat een verzekeraar inschat. De belangrijkste factoren die de
          hoogte van je premie bepalen zijn:
        </p>
        <ul className="space-y-2 text-gray-600 list-disc list-inside">
          <li>
            <b>Je schadevrije jaren: </b>Hoe meer, hoe hoger de korting.
          </li>
          <li>
            <b>Je leeftijd: </b>Jonge en oudere bestuurders betalen vaak meer.
          </li>
          <li>
            <b>Je woonplaats: </b>In een drukke stad is het risico op schade
            statistisch hoger.
          </li>
          <li>
            <b>De auto zelf: </b>Het merk, model, gewicht en de waarde van je
            auto.
          </li>
          <li>
            <b>De gekozen dekking: </b>Allrisk is duurder dan een
            WA-verzekering.
          </li>
          <li>
            <b>Het aantal kilometers: </b>Hoe meer je rijdt, hoe hoger het
            risico.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "Hoe werkt het overstappen en moet ik mijn oude verzekering zelf opzeggen?",
    icon: "/img/bridge.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Overstappen is heel eenvoudig en wij maken het je graag zo makkelijk
          mogelijk. In de meeste gevallen hoef je je oude verzekering niet zelf
          op te zeggen.
        </p>
        <p>
          Tijdens het aanvragen van je nieuwe verzekering kun je gebruikmaken
          van de gratis overstapservice. Je geeft dan de gegevens van je huidige
          verzekeraar door, en je nieuwe verzekeraar zorgt ervoor dat je oude
          polis netjes wordt opgezegd op het juiste moment. Zo voorkom je dat je
          dubbel verzekerd bent of juist een periode onverzekerd rondrijdt. Wel
          zo makkelijk
        </p>
      </div>
    ),
  },
];

function AutoverzekeringTabbedContent() {
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

export default AutoverzekeringTabbedContent;
