import Image from "next/image";
import Link from "next/link";

// We maken eerst een kleine, herbruikbare kaart-component
function InsuranceCard({ icon, title, description, href }) {
  return (
    <div className="flex flex-col h-full px-6 py-5 border border-white bg-white/50 rounded-2xl backdrop-blur-md shadow-md-custom">
      <Image src={icon} width={50} height={50} alt={`${title} icoon`} />
      <p className="my-4 text-xl font-semibold">{title}</p>
      <p className="flex-grow mb-5 text-gray-600">{description}</p>
      <Link
        href={href}
        className="text-[#1b7ced] hover:text-blue-800 transition-all duration-300 group mt-auto"
      >
        Lees meer{" "}
        <span className="transition-all duration-300 group-hover:ml-1">→</span>
      </Link>
    </div>
  );
}

// De hoofdcomponent gebruikt nu een array met data
function InsuranceCards() {
  const insuranceData = [
    {
      icon: "/img/home2.png", // Vervang door uw icoon
      title: "Wonen",
      description:
        "Bescherm uw huis en waardevolle spullen met onze opstal- en inboedelverzekeringen.",
      href: "/verzekeringen/wonen",
    },
    {
      icon: "/img/car.png", // Vervang door uw icoon
      title: "Verkeer",
      description:
        "Ga met een gerust hart de weg op. De beste dekking voor uw auto, motor of oldtimer.",
      href: "/verzekeringen/verkeer",
    },
    {
      icon: "/img/family2.png", // Vervang door uw icoon
      title: "Aansprakelijkheid",
      description:
        "Een ongeluk zit in een klein hoekje. Bescherm uzelf en uw gezin tegen onverwachte schadeclaims.",
      href: "/verzekeringen/wonen/aansprakelijkheid",
    },
    {
      icon: "/img/gavel.png", // Vervang door uw icoon
      title: "Rechtsbijstand",
      description:
        "Krijg de juridische hulp die u verdient bij conflicten over werk, wonen of in het verkeer.",
      href: "/verzekeringen/recht-en-zekerheid/rechtsbijstand",
    },
    {
      icon: "/img/plane.png", // Vervang door uw icoon
      title: "Reis & Vrije Tijd",
      description:
        "Geniet zorgeloos van uw vakantie met een complete reis- en annuleringsverzekering.",
      href: "/verzekeringen/vrije-tijd/reis",
    },
  ];

  return (
    <div className="relative grid min-[1150px]:grid-cols-5 min-[770px]:grid-cols-3 min-[550px]:grid-cols-2 grid-cols-1 gap-6 my-30">
      <div className="absolute bg-[#00af76] rounded-full w-40 h-40 -top-10 -left-10 -z-10"></div>

      {/* We mappen nu over de data om de kaarten te genereren */}
      {insuranceData.map((insurance) => (
        <InsuranceCard
          key={insurance.title}
          icon={insurance.icon}
          title={insurance.title}
          description={insurance.description}
          href={insurance.href}
        />
      ))}

      <div className="absolute pointer-events-none -bottom-10 -right-10 w-23 h-23 -z-10">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <circle
            cx="50"
            cy="50"
            r="36"
            fill="none"
            stroke="#00af76"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray="240 360"
            transform="rotate(-18 50 50)"
          />
          <rect
            x="46"
            y="0"
            width="8"
            height="24"
            fill="#ffffff"
            transform="rotate(140 50 50)"
            rx="1"
          />
          <circle cx="50" cy="50" r="26" fill="#ffffff" />
        </svg>
      </div>
    </div>
  );
}

export default InsuranceCards;
