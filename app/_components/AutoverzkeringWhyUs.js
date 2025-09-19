import Image from "next/image";
import Link from "next/link";

function AutoverzekeringWhyUs() {
  return (
    <div className="grid max-w-4xl grid-cols-1 gap-5 px-4 mx-auto lg:grid-cols-2 my-30 lg:gap-x-10">
      <div className="grid order-2 grid-cols-2 gap-3 lg:order-1">
        <Image
          src="/img/istockphoto-541114144-612x612.jpg"
          width={300}
          height={300}
          alt="2 people in a meeting"
          className="object-cover w-full rounded-2xl lg:w-53 lg:h-50"
        />
        <Image
          src="/img/istockphoto-1338523355-612x612.jpg"
          width={300}
          height={300}
          alt="2 people in a meeting"
          className="object-cover w-full rounded-2xl lg:w-53 lg:h-50"
        />
        <Image
          src="/img/middle-aged-hispanic-business-people.jpg"
          width={300}
          height={300}
          alt="2 people in a meeting"
          className="object-cover w-full rounded-2xl lg:w-53 lg:h-50"
        />
        <Image
          src="/img/istockphoto-1419539600-612x612.jpg"
          width={300}
          height={300}
          alt="2 people in a meeting"
          className="object-cover w-full rounded-2xl lg:w-53 lg:h-50"
        />
      </div>
      <div className="flex flex-col justify-between order-1 lg:order-2">
        <p className="mb-4 text-3xl font-medium">
          Waarom kiezen voor Checkmijnverzekering
        </p>
        <ul className="mb-4 ml-4 space-y-2 text-gray-600 list-disc">
          <li>
            <b>Onafhankelijk:</b> We vergelijken een breed aanbod van
            verzekeraars om de beste deal voor uw woning te vinden.
          </li>
          <li>
            <b>Voorkom Onderverzekering:</b> Wij helpen u de juiste
            herbouwwaarde vast te stellen, zodat u altijd correct verzekerd
            bent.
          </li>
          <li>
            <b>Transparant:</b> Duidelijk inzicht in wat wel en niet gedekt is.
            Geen verrassingen bij schade.
          </li>
          <li>
            <b>Persoonlijk Advies:</b> Elke woning is anders. We bieden advies
            op maat voor uw specifieke situatie.
          </li>
        </ul>
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
  );
}

export default AutoverzekeringWhyUs;
