"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const faqData = [
  {
    question: "Is een aansprakelijkheidsverzekering (AVP) verplicht?",
    icon: "/img/file.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Nee, in tegenstelling tot de WA-verzekering voor een auto is een AVP
          niet wettelijk verplicht. Vanwege de enorme financiële risico&apos;s
          die het afdekt voor een zeer lage premie, wordt het echter wel
          beschouwd als een van de meest essentiële verzekeringen voor elk
          huishouden in Nederland.
        </p>
      </div>
    ),
  },
  {
    question: "Wie zijn er meeverzekerd op een gezinspolis?",
    icon: "/img/family.webp",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Een gezinspolis biedt een brede dekking. Standaard zijn verzekerd:
        </p>
        <ul className="space-y-2 text-gray-600 list-disc list-inside">
          <li>Uzelf en uw partner met wie u samenwoont.</li>
          <li>
            Uw inwonende, ongehuwde kinderen (ook stief- en pleegkinderen).
          </li>
          <li>Vaak ook uw uitwonende kinderen die voor studie elders wonen.</li>
          <li>
            Uw huisdieren (m.u.v. schade door bepaalde dieren zoals gifslangen).
          </li>
          <li>
            Logees en personeel (zoals een oppas of schoonmaker) tijdens hun
            verblijf/werkzaamheden.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "Wat is 'schade tijdens een vriendendienst'?",
    icon: "/img/hands.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Stel, u helpt een vriend gratis met verhuizen en u laat zijn dure
          televisie vallen. Wettelijk gezien bent u dan niet altijd
          aansprakelijk, omdat de vriend het &apos;risico&apos; van gratis hulp
          heeft aanvaard. Dit kan tot vervelende situaties leiden.
        </p>
        <p>
          Veel moderne AVP&apos;s hebben daarom een speciale
          &apos;vriendendienstclausule&apos;. De verzekeraar vergoedt de schade
          dan toch, vaak tot een maximumbedrag (bijv. €25.000), om de goede
          vriendschap te bewaren.
        </p>
      </div>
    ),
  },
  {
    question: "Dekt de verzekering ook schade veroorzaakt op mijn werk?",
    icon: "/img/briefcase.png",
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          Nee, de aansprakelijkheidsverzekering voor particulieren (AVP) dekt
          alleen schade die u als privépersoon veroorzaakt. Schade die u
          veroorzaakt tijdens uw betaalde werk of als ZZP&apos;er valt hier niet
          onder.
        </p>
        <p>
          Hiervoor hebben bedrijven en zelfstandigen een aparte{" "}
          <b>bedrijfsaansprakelijkheidsverzekering (AVB)</b> nodig.
        </p>
      </div>
    ),
  },
  {
    question: "Hoe hoog moet mijn verzekerde bedrag zijn?",
    icon: "/img/money-bag.png", // <-- Nieuw relevant icoon
    answer: (
      <div className="space-y-5 text-gray-600">
        <p>
          De premieverschillen tussen een dekking van €1.250.000 en €2.500.000
          zijn vaak heel klein, soms maar een euro per maand. Aangezien de
          kosten van letselschade zeer hoog kunnen oplopen, wordt bijna altijd
          geadviseerd om voor het hoogst mogelijke bedrag te kiezen. Dit geeft
          de meeste zekerheid voor een minimale extra investering.
        </p>
      </div>
    ),
  },
];

function AansprakelijkheidsverzekeringTabbedContent() {
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

export default AansprakelijkheidsverzekeringTabbedContent;
