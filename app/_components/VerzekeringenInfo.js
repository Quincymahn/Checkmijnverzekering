import Image from "next/image";
import Link from "next/link";

function VerzekeringenInfo() {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl mx-auto py-30">
      <div className="grid grid-cols-2 gap-x-20">
        <div className="relative w-full h-full">
          {/* SVG 1: De solide vulling (blijft ongewijzigd) */}
          <Image
            src="/img/istockphoto-1808087645-612x612-removebg-preview.png"
            width={350}
            height={350}
            alt="test"
            className="absolute z-10 rounded-b-full -top-5 right-10"
          />

          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 right-0 w-120"
          >
            <path
              fill="#09182B"
              d="M31.2,-48C40.3,-36.4,47.3,-27,54.7,-15.2C62,-3.4,69.7,10.9,66.3,21.6C62.9,32.3,48.4,39.5,35.5,50C22.6,60.6,11.3,74.7,-3,78.8C-17.3,83,-34.7,77.3,-41.3,64.6C-47.9,52,-43.8,32.4,-50.3,15.6C-56.9,-1.3,-74,-15.5,-75.3,-28.5C-76.6,-41.6,-62.1,-53.5,-46.9,-63.1C-31.7,-72.7,-15.8,-80.1,-2.4,-76.8C11.1,-73.5,22.2,-59.6,31.2,-48Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* SVG 2: De tweekleurige rand (wordt aangepast) */}
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-15 right-10 w-120"
          >
            <defs>
              <linearGradient
                id="half-stroke-gradient"
                x1="0%"
                y1="100%"
                x2="50%"
                y2="0%"
              >
                <stop offset="73%" stopColor="#09182B" />
                <stop offset="27%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            <path
              fill="none" // <-- Belangrijk: geen vulling
              stroke="url(#half-stroke-gradient)" // <-- Gebruik de gradient
              strokeWidth="1" // <-- Dikte van de rand (pas aan indien nodig)
              d="M31.2,-48C40.3,-36.4,47.3,-27,54.7,-15.2C62,-3.4,69.7,10.9,66.3,21.6C62.9,32.3,48.4,39.5,35.5,50C22.6,60.6,11.3,74.7,-3,78.8C-17.3,83,-34.7,77.3,-41.3,64.6C-47.9,52,-43.8,32.4,-50.3,15.6C-56.9,-1.3,-74,-15.5,-75.3,-28.5C-76.6,-41.6,-62.1,-53.5,-46.9,-63.1C-31.7,-72.7,-15.8,-80.1,-2.4,-76.8C11.1,-73.5,22.2,-59.6,31.2,-48Z"
              transform="translate(100 100)"
            />
          </svg>

          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-20 w-80 -bottom-20 -right-5"
          >
            {/* 1. Definieer het schaduwfilter */}
            <defs>
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow
                  dx="5"
                  dy="5"
                  stdDeviation="5"
                  floodColor="#000"
                  floodOpacity="0.5"
                />
              </filter>
            </defs>

            {/* 2. Pas het filter toe op het pad */}
            <path
              fill="#ffffff"
              d="M19.4,-9.4C19.4,1.2,9.7,2.4,-7.3,2.4C-24.4,2.4,-48.7,1.2,-48.7,-9.4C-48.7,-20,-24.4,-40.1,-7.3,-40.1C9.7,-40.1,19.4,-20,19.4,-9.4Z"
              transform="translate(100 100)"
              filter="url(#shadow)"
            />

            <text
              x="90"
              y="80"
              textAnchor="middle"
              fill="#1b7ced"
              fontSize="14"
              fontWeight="bold"
              fontFamily="sans-serif"
            >
              7+
            </text>
            <text
              x="87"
              y="93"
              textAnchor="middle"
              fill="gray"
              fontSize="9"
              fontWeight="regular"
              fontFamily="sans-serif"
            >
              Jaar ervaring
            </text>
          </svg>

          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-20 top-20 -left-5 w-70"
          >
            <defs>
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow
                  dx="5"
                  dy="5"
                  stdDeviation="5"
                  floodColor="#000"
                  floodOpacity="0.5"
                />
              </filter>
            </defs>

            <path
              fill="#ffffff"
              d="M39.2,-17.2C44.9,-12.7,39.6,3.6,31.3,13.1C22.9,22.5,11.4,25.3,-7.9,29.8C-27.3,34.4,-54.5,40.8,-64.7,30.2C-74.9,19.7,-68.1,-7.8,-54.5,-16.9C-40.8,-26,-20.4,-16.6,-1.8,-15.5C16.7,-14.5,33.4,-21.7,39.2,-17.2Z"
              transform="translate(100 100)"
              filter="url(#shadow)"
            />

            <text
              x="85"
              y="105"
              textAnchor="middle"
              fill="#1b7ced"
              fontSize="20"
              fontWeight="bold"
              fontFamily="sans-serif"
            >
              95%
            </text>
            <text
              x="80"
              y="118"
              textAnchor="middle"
              fill="gray"
              fontSize="12"
              fontWeight="regular"
              fontFamily="sans-serif"
            >
              Beveelt ons aan
            </text>
          </svg>

          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-20 -right-0 top-15 w-50"
          >
            <defs>
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow
                  dx="5"
                  dy="5"
                  stdDeviation="5"
                  floodColor="#000"
                  floodOpacity="0.5"
                />
              </filter>
            </defs>

            <path
              fill="#ffffff"
              d="M46.8,-26.7C51.7,-18.6,40.4,-0.9,29.9,11.1C19.4,23.1,9.7,29.4,-4.5,31.9C-18.6,34.5,-37.2,33.4,-49.7,20.2C-62.1,7.1,-68.4,-18,-59.1,-28.6C-49.8,-39.2,-24.9,-35.3,-2,-34.2C21,-33.1,42,-34.7,46.8,-26.7Z"
              transform="translate(100 100)"
              filter="url(#shadow)"
            />

            <text
              x="90"
              y="95"
              textAnchor="middle"
              fill="#1b7ced"
              fontSize="24"
              fontWeight="bold"
              fontFamily="sans-serif"
            >
              20+
            </text>
            <text
              x="85"
              y="113"
              textAnchor="middle"
              fill="gray"
              fontSize="12"
              fontWeight="regular"
              fontFamily="sans-serif"
            >
              Aanbieders
            </text>
          </svg>

          <div className="w-35 h-35 bg-[#00af76] rounded-full absolute top-10 right-20 z-5"></div>
          <div className="absolute pointer-events-none bottom-20 -left-10 w-23 h-23 -z-10">
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
                transform="rotate(220 50 50)"
                rx="1"
              />
              <circle cx="50" cy="50" r="26" fill="#ffffff" />
            </svg>
          </div>
        </div>

        <div className="space-y-5 text-gray-600">
          <p className="text-3xl font-medium">
            Goed verzekerd, hoe <br /> werkt dat eigenlijk
          </p>
          <p>
            De wereld van verzekeringen kan soms aanvoelen als een doolhof, vol
            met jargon, kleine lettertjes en talloze keuzes. Misschien vraag je
            je af: &apos;Wat betekent &apos;eigen risico&apos; nu precies voor
            mijn portemonnee&apos; of &apos;Is overstappen van verzekeraar echt
            de moeite waard?&apos;
          </p>
          <ul className="text-gray-600 list-disc list-inside">
            <li>Wat is het belang van verzekeren?</li>
            <li>Wat betekent &apos;eigen risico&apos;?</li>
            <li>Hoe werkt overstappen van verzekeraar?</li>
          </ul>
          <p>
            Wij geloven dat een goede keuze begint bij begrip. Daarom hebben we
            de belangrijkste begrippen en processen voor je op een rij gezet.
            Geen ingewikkelde taal, maar heldere antwoorden die je helpen om met
            vertrouwen de juiste beslissing voor jouw situatie te nemen.
          </p>
          <Link
            href="#"
            className="bg-[#00af76] text-white rounded-full px-8 py-2"
          >
            Plan een gesprek
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VerzekeringenInfo;
