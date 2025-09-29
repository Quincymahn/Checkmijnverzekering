import Image from "next/image";
import Link from "next/link";

function VrijeTijdInfoSection() {
  return (
    <div className="grid max-w-4xl grid-cols-1 gap-10 px-4 mx-auto md:grid-cols-2 my-30">
      <div className="order-2 md:order-1">
        <Image
          src="/img/happy-couple-forest-being-together-camping (1).jpg"
          width={500}
          height={500}
          alt="happy couple signing financial contract"
          className="object-cover w-full md:h-115 h-80 rounded-2xl"
        />
      </div>
      <div className="order-1 space-y-6 md:order-2">
        <p className="text-3xl font-medium">Uw Passie, Goed Verzekerd</p>
        <p className="text-gray-600">
          Of uw passie nu ligt in het ontdekken van nieuwe landen, kamperen in
          de natuur of varen op de Nederlandse plassen, elke hobby brengt zijn
          eigen risico&apos;s met zich mee. Een standaardverzekering biedt vaak
          niet de specifieke dekking die u nodig heeft.
        </p>
        <p className="text-gray-600">
          Wij begrijpen dat. We kijken verder dan de basis en helpen u een
          verzekeringspakket samen te stellen dat is afgestemd op uw specifieke
          vrijetijdsbesteding. Van de dekking voor uw dure e-bike tot de juiste
          voorwaarden voor uw vaargebied. Zo kunt u zich focussen op wat echt
          belangrijk is: genieten van uw vrije tijd.
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

export default VrijeTijdInfoSection;
