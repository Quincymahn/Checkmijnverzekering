import Image from "next/image";
import Link from "next/link";

function RechtEnZekerheidInfoSection() {
  return (
    <div className="grid max-w-4xl grid-cols-2 gap-10 mx-auto my-30">
      <div>
        <Image
          src="/img/happy-man-his-wife-having-meeting-with-financial-advisor-signing-agreement-office.jpg"
          width={500}
          height={500}
          alt="happy couple signing financial contract"
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>
      <div className="space-y-6">
        <p className="text-3xl font-medium">
          Een Persoonlijk Plan voor Uw Gemoedsrust
        </p>
        <p className="text-gray-600">
          Welke risico&apos;s zijn voor u relevant? De behoefte aan zekerheid
          verschilt per levensfase. Als kostwinner met een jong gezin heeft u
          andere prioriteiten dan een alleenstaande of een gepensioneerde. Een
          standaardpakket biedt zelden de juiste oplossing.
        </p>
        <p className="text-gray-600">
          Wij nemen de tijd om uw persoonlijke situatie te begrijpen. We
          analyseren welke risico&apos;s u loopt en welke financiële gevolgen
          deze kunnen hebben. Op basis daarvan creëren we een helder en
          betaalbaar plan dat u de rust en zekerheid geeft die u verdient, wat
          de toekomst ook brengt.
        </p>
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

export default RechtEnZekerheidInfoSection;
