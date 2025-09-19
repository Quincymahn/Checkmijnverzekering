"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    question: "Wat is het verschil tussen zakelijk en particulier gebruik?",
    icon: "/img/briefcase.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Dit is de belangrijkste vraag voor een bestelautoverzekering.{" "}
          <b>Particulier gebruik</b> is voor privédoeleinden, zoals verhuizen of
          naar de milieustraat rijden.
        </p>
        <p>
          <b>Zakelijk gebruik</b> is elk gebruik voor uw bedrijf. Dit omvat
          woon-werkverkeer, klanten bezoeken, goederen vervoeren of naar een
          klus rijden. De premie voor zakelijk gebruik is hoger omdat u
          doorgaans meer kilometers maakt en vaak in drukker verkeer rijdt. Het
          is cruciaal om het juiste gebruik op te geven om problemen bij schade
          te voorkomen.
        </p>
      </div>
    ),
  },
  {
    question: "Is mijn lading of gereedschap meeverzekerd?",
    icon: "/img/tool-box.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Nee, de standaard bestelautoverzekering dekt alleen schade aan de bus
          zelf. Uw lading, materialen of gereedschap in de bus zijn **niet**
          standaard meeverzekerd tegen diefstal of schade na een ongeval.
        </p>
        <p>
          Hiervoor heeft u een aanvullende <b>Eigen Vervoerverzekering</b> of
          een <b>Goederentransportverzekering</b> nodig. Deze dekt de waarde van
          de spullen die u voor uw bedrijf vervoert.
        </p>
      </div>
    ),
  },
  {
    question: "Wat is het verschil tussen WA, Beperkt Casco en Allrisk?",
    icon: "/img/delivery-van.png",
    answer: (
      <>
        <ul className="space-y-2 text-gray-600 list-disc list-inside">
          <li>
            <b>WA:</b> Dekt alleen schade die u veroorzaakt aan anderen.
            Verplicht.
          </li>
          <li>
            <b>WA+ (Beperkt Casco):</b> Dekt naast WA ook diefstal van uw bus,
            en schade door brand, storm, ruitbreuk en botsing met dieren.
          </li>
          <li>
            <b>Allrisk (Volledig Casco):</b> De meest complete dekking. Dekt
            alles van WA+ en ook schade aan uw eigen bestelauto die u zelf
            veroorzaakt.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "Kan ik de btw op de premie verrekenen?",
    icon: "/img/compliance.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Als u de bestelauto zakelijk gebruikt en btw-plichtig bent, kunt u de
          21% assurantiebelasting die op de premie zit **niet** verrekenen.
        </p>
        <p>
          Waar u wel rekening mee moet houden, is dat bij schade de uitkering
          van de verzekeraar vaak **exclusief btw** is. De verzekeraar gaat
          ervan uit dat u de btw op de reparatie- of vervangingskosten zelf kunt
          terugvorderen bij de Belastingdienst.
        </p>
      </div>
    ),
  },
  {
    question: "Kan ik mijn schadevrije jaren van mijn personenauto gebruiken?",
    icon: "/img/bridge.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Ja, veel verzekeraars staan toe dat u de schadevrije jaren van uw
          personenauto overzet naar uw (eerste) bestelautoverzekering. Dit kan
          een aanzienlijke korting op de premie opleveren.
        </p>
        <p>
          Let op: u kunt dezelfde schadevrije jaren maar op één voertuig
          tegelijk gebruiken.
        </p>
      </div>
    ),
  },
];

function BestelautoverzekeringTabbedContent() {
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

export default BestelautoverzekeringTabbedContent;
