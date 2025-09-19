import Image from "next/image";

function OveronsSection() {
  return (
    <div className="grid items-center max-w-5xl grid-cols-1 gap-20 px-4 mx-auto sm:grid-cols-2 place-items-center mt-50">
      <div className="relative flex justify-end">
        <div className="w-40 h-40 bg-[#00af76] rounded-full absolute -top-12 -right-12"></div>
        <Image
          src="/img/herobanner3.jpg"
          width={500}
          height={500}
          alt="People in a meeting"
          className="relative z-10 object-cover aspect-square w-100 h-100 rounded-2xl"
        />

        <div className="absolute pointer-events-none bottom-20 -left-10 w-15 h-15 -z-10">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            {/* thick ring with a gap; adjust stroke-width, dasharray, and rotation as needed */}
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
            {/* little notch: a rotated rectangle placed over the ring inner edge */}
            <rect
              x="46"
              y="0"
              width="8"
              height="24"
              fill="#ffffff"
              transform="rotate(210 50 50)"
              rx="1"
            />
            {/* inner white circle */}
            <circle cx="50" cy="50" r="26" fill="#ffffff" />
          </svg>
        </div>
      </div>

      <div className="items-start sm:w-[70%] w-full">
        <p className="mb-5 text-4xl font-medium">Onze missie</p>
        <p className="mb-4 text-gray-600">
          Wij helpen mensen snel en onafhankelijk de verzekering te vinden die
          écht bij hun leven past. Of het nu gaat om je auto, woning of zorg,
          wij maken de keuzes inzichtelijk.
        </p>
        <p className="text-gray-600">
          Transparant, eerlijk en altijd in jouw belang, zodat jij met
          vertrouwen de juiste beslissing kunt nemen.
        </p>
      </div>

      <div className="flex flex-col items-end">
        <div className="sm:w-[75%] w-full">
          <p className="mb-5 text-4xl font-medium">Onze visie</p>
          <p className="mb-4 text-gray-600">
            Verzekeren moet weer eenvoudig en begrijpelijk worden. Want
            uiteindelijk wil je gewoon weten waar je aan toe bent, zonder te
            verdwalen in lange teksten en ingewikkelde berekeningen.
          </p>
          <p className="text-gray-600">
            Wij geloven dat iedereen recht heeft op duidelijke antwoorden: wat
            is precies gedekt, hoeveel kost het, en bij wie ben ik echt goed
            verzekerd? Daarom maken wij vergelijken makkelijk en eerlijk, zodat
            je snel de verzekering vindt die past bij jouw leven en jouw
            situatie
          </p>
        </div>
      </div>

      <div className="relative flex justify-start">
        <div className="w-23 h-23 bg-[#00af76] rounded-full absolute z-20 bottom-12 -left-12"></div>
        <Image
          src="/img/pexels-rebrand-cities-581004-1367269.jpg"
          width={500}
          height={500}
          alt="People in a meeting"
          className="relative z-10 object-cover aspect-square w-100 h-100 rounded-2xl"
        />

        <div className="absolute right-0 pointer-events-none top-20 w-11 h-11 -z-10">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            {/* thick ring with a gap; adjust stroke-width, dasharray, and rotation as needed */}
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
            {/* little notch: a rotated rectangle placed over the ring inner edge */}
            <rect
              x="46"
              y="0"
              width="8"
              height="24"
              fill="#ffffff"
              transform="rotate(140 50 50)"
              rx="1"
            />
            {/* inner white circle */}
            <circle cx="50" cy="50" r="26" fill="#ffffff" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default OveronsSection;
