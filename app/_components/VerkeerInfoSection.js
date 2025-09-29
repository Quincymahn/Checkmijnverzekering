import Image from "next/image";
import Link from "next/link";

function VerkeerInfoSection() {
  return (
    <div className="grid max-w-4xl grid-cols-1 gap-10 px-4 mx-auto md:grid-cols-2 my-30">
      <div>
        <Image
          src="/img/young-man-scooter-with-womanfriend-outdoors.jpg"
          width={500}
          height={500}
          alt="happy couple signing financial contract"
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>
      <div className="order-1 space-y-6 md:order-2">
        <p className="text-3xl font-medium">
          De Juiste Polis voor Elke Kilometer
        </p>
        <p className="text-gray-600">
          Elke bestuurder en elk voertuig is anders. Een jonge bestuurder in een
          stadsauto heeft een andere verzekering nodig dan een ervaren
          motorrijder of een oldtimerliefhebber. Een standaardpolis is daarom
          zelden de beste of voordeligste keuze.
        </p>
        <p className="text-gray-600">
          Wij nemen uw situatie als uitgangspunt. We analyseren uw schadevrije
          jaren, het aantal kilometers dat u rijdt en uw wensen voor de dekking.
          Zo vinden we samen de perfecte balans tussen een scherpe premie en
          uitstekende voorwaarden, zodat u met een gerust hart de weg op kunt.
        </p>
        <Link
            href="/plan-een-gesprek"
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

export default VerkeerInfoSection;
