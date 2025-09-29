import Image from "next/image";
import Link from "next/link";

function WonenInfoSection() {
  return (
    <div className="grid max-w-4xl grid-cols-1 gap-10 px-4 mx-auto md:grid-cols-2 my-30">
      <div className="order-2 md:order-1">
        <Image
          src="/img/insurance-agent-communicating-with-senior-clients-while-showing-something-touchpad-meeting-office.jpg"
          width={500}
          height={500}
          alt="happy couple signing financial contract"
          className="object-cover w-full h-125 rounded-2xl"
        />
      </div>
      <div className="order-1 space-y-6 md:order-2">
        <p className="text-3xl font-medium">
          Een Persoonlijk Plan voor Uw Woonsituatie
        </p>
        <p className="text-gray-600">
          Elke woonsituatie is uniek. Of u nu net uw eerste huis heeft gekocht,
          gaat verbouwen, of al jaren met plezier op dezelfde plek woont, uw
          verzekeringen moeten aansluiten op uw leven. Een standaardpakket is
          vaak niet de beste of de voordeligste oplossing.
        </p>
        <p className="text-gray-600">
          Wij nemen de tijd om uw situatie te begrijpen. We analyseren uw
          huidige polissen, identificeren eventuele risico&apos;s zoals
          onderverzekering, en zoeken naar de perfecte balans tussen een
          uitstekende dekking en een scherpe premie. Zo zorgen we samen voor een
          woonpakket dat u de rust en zekerheid geeft die u verdient.
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

export default WonenInfoSection;
