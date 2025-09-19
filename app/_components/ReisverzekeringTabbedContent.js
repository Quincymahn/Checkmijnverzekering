"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    question:
      "Wat is het verschil tussen een kortlopende en doorlopende reisverzekering?",
    icon: "/img/calendar.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Een <b>kortlopende</b> reisverzekering sluit u af voor één specifieke
          vakantie. Zodra de reis voorbij is, stopt de verzekering.
        </p>
        <p>
          Een <b>doorlopende</b> reisverzekering sluit u af voor een heel jaar.
          Al uw vakanties en weekendjes weg zijn dan automatisch verzekerd. Als
          vuistregel geldt: gaat u vaker dan twee weken per jaar op vakantie of
          meerdere weekenden weg, dan is een doorlopende reisverzekering vaak al
          voordeliger.
        </p>
      </div>
    ),
  },
  {
    question:
      "Dekt mijn Nederlandse zorgverzekering niet alle medische kosten in het buitenland?",
    icon: "/img/assistance.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Nee, dit is een veelvoorkomend misverstand. Uw basiszorgverzekering
          dekt spoedeisende hulp wereldwijd, maar slechts tot het{" "}
          <b>Nederlandse tarief</b>.
        </p>
        <p>
          In veel landen, zoals de VS, Zwitserland, Canada of Scandinavië, zijn
          de zorgkosten aanzienlijk hoger. Een ziekenhuisopname kan daar
          duizenden euro&apos;s meer kosten dan in Nederland. De aanvullende
          module &apos;Medische Kosten&apos; op uw reisverzekering dekt dit
          verschil, zodat u niet zelf voor de hoge rekening opdraait.
        </p>
      </div>
    ),
  },
  {
    question: "Wanneer moet ik een annuleringsverzekering afsluiten?",
    icon: "/img/block.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Het is verstandig om een annuleringsverzekering zo snel mogelijk na
          het boeken van uw reis af te sluiten, meestal binnen 7 tot 14 dagen. U
          bent dan direct verzekerd als er iets gebeurt waardoor u niet op reis
          kunt, zoals ziekte van uzelf of een familielid, of onvrijwillige
          werkloosheid.
        </p>
        <p>
          Een annuleringsverzekering dekt niet alleen de kosten vóór vertrek,
          maar vaak ook de &apos;ongebruikte reisdagen&apos; als u uw vakantie
          eerder moet afbreken.
        </p>
      </div>
    ),
  },
  {
    question: "Ben ik verzekerd als ik met mijn eigen auto op vakantie ga?",
    icon: "/img/car.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Uw autoverzekering dekt de auto zelf. Een reisverzekering dekt de
          &apos;reis-ongemakken&apos;. Pech met uw auto in het buitenland valt
          niet standaard onder uw reisverzekering.
        </p>
        <p>
          Hiervoor heeft u de aanvullende module <b>&apos;Pechhulp&apos;</b> of{" "}
          <b>&apos;Automobilistenhulp&apos;</b> nodig. Deze zorgt voor hulp ter
          plaatse, eventueel vervangend vervoer en repatriëring van uw auto als
          deze niet ter plekke gerepareerd kan worden.
        </p>
      </div>
    ),
  },
  {
    question:
      "Wat moet ik doen bij diefstal of een noodgeval in het buitenland?",
    icon: "/img/phone-call.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Neem bij een noodgeval (zoals een ziekenhuisopname) altijd direct
          contact op met de <b>alarmcentrale</b> van uw reisverzekeraar. Het
          telefoonnummer staat op uw polisblad en verzekeringspasje. Zij kunnen
          u helpen, garanties afgeven aan ziekenhuizen en eventueel repatriëring
          regelen.
        </p>
        <p>
          Bij diefstal van uw eigendommen doet u altijd direct ter plaatse
          aangifte bij de lokale politie. Het politierapport heeft u nodig om de
          schade te kunnen claimen bij uw verzekeraar.
        </p>
      </div>
    ),
  },
];

function ReisverzekeringTabbedContent() {
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

export default ReisverzekeringTabbedContent;
