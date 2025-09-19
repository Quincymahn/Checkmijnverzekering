"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    question:
      "Wat is het verschil tussen WA, Beperkt Casco en Allrisk voor een motor?",
    icon: "/img/scooter.png",
    answer: (
      <>
        <p className="mb-4 text-2xl italic font-medium">
          Net als bij auto&apos;s zijn er drie basisdekkingen:
        </p>
        <ul className="space-y-2 text-gray-600 list-disc list-inside">
          <li>
            <b>WA (Wettelijke Aansprakelijkheid):</b> Dekt schade die je met
            jouw motor aan anderen veroorzaakt. Dit is de wettelijk verplichte
            basis.
          </li>
          <li>
            <b>WA+ (Beperkt Casco):</b> Dekt naast WA ook diefstal van je motor,
            en schade door brand, storm of een botsing met dieren.
          </li>
          <li>
            <b>Allrisk (Volledig Casco):</b> De meest complete dekking. Dekt
            alles van WA+ én schade aan je eigen motor die je zelf hebt
            veroorzaakt, bijvoorbeeld door een val of aanrijding.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Wat is een winterstop en hoe werkt het?",
    icon: "/img/vehicle.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Een winterstop is een periode (meestal van december tot maart) waarin
          je geen gebruik maakt van je motor. Als je voor een verzekering met
          winterstop kiest, betaal je tijdens deze maanden een aanzienlijk
          lagere premie.
        </p>
        <p>
          Je WA-dekking blijft vaak wel actief voor het geval je motor gestald
          schade veroorzaakt, maar schade door rijden is niet gedekt. Dit kan
          een flinke besparing opleveren als je een echte
          &apos;mooi-weer-rijder&apos; bent.
        </p>
      </div>
    ),
  },
  {
    question: "Zijn mijn helm en motorkleding meeverzekerd?",
    icon: "/img/helmet.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Bij een standaard WA-verzekering is dit niet het geval. Bij een
          Beperkt Casco of Allrisk verzekering is schade aan je helm en kleding
          na een ongeval vaak tot een bepaald bedrag (bijv. €1.000)
          meeverzekerd.
        </p>
        <p>
          Als je zeer dure kleding of meerdere helmen hebt, is het verstandig om
          te kiezen voor een aanvullende &apos;accessoires&apos; of
          &apos;kleding & helm&apos; dekking, waarbij je het verzekerde bedrag
          kunt verhogen.
        </p>
      </div>
    ),
  },
  {
    question: "Hoe werken schadevrije jaren en wat is een no-claimkorting?",
    icon: "/img/encrypted.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Schadevrije jaren zijn de jaren waarin je een motorverzekering op je
          naam hebt gehad, maar geen schade hebt geclaimd die jouw schuld was.
          Voor elk jaar dat je schadevrij rijdt, bouw je één schadevrij jaar op.
        </p>
        <p>
          Hoe meer schadevrije jaren je hebt, hoe meer no-claimkorting je
          krijgt. Dit is een korting op je basispremie. Deze korting kan oplopen
          tot wel 80%, waardoor je verzekering aanzienlijk goedkoper wordt.
        </p>
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
          Overstappen is heel eenvoudig. Tijdens het aanvragen van je nieuwe
          verzekering kun je gebruikmaken van de gratis overstapservice. Je
          nieuwe verzekeraar zorgt er dan voor dat je oude polis netjes wordt
          opgezegd op het juiste moment.
        </p>
        <p>
          Zo voorkom je dat je dubbel verzekerd bent of juist een periode
          onverzekerd rondrijdt. Wel zo makkelijk!
        </p>
      </div>
    ),
  },
];

function MotorverzekeringTabbedContent() {
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

export default MotorverzekeringTabbedContent;
