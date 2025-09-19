import Image from "next/image";
import Link from "next/link";

function InboedelverzekeringWhyUs() {
  return (
    <div className="grid max-w-4xl grid-cols-1 gap-10 px-4 mx-auto lg:grid-cols-2 my-30 lg:gap-x-10">
      <div className="grid order-2 grid-cols-2 gap-3 lg:order-1">
        <Image
          src="/img/istockphoto-541114144-612x612.jpg"
          width={300}
          height={300}
          alt="2 people in a meeting"
          className="object-cover w-full h-auto rounded-2xl aspect-square"
        />
        <Image
          src="/img/istockphoto-1338523355-612x612.jpg"
          width={300}
          height={300}
          alt="2 people in a meeting"
          className="object-cover w-full h-auto rounded-2xl aspect-square"
        />
        <Image
          src="/img/middle-aged-hispanic-business-people.jpg"
          width={300}
          height={300}
          alt="2 people in a meeting"
          className="object-cover w-full h-auto rounded-2xl aspect-square"
        />
        <Image
          src="/img/istockphoto-1419539600-612x612.jpg"
          width={300}
          height={300}
          alt="2 people in a meeting"
          className="object-cover w-full h-auto rounded-2xl aspect-square"
        />
      </div>
      <div className="flex flex-col justify-center order-1 lg:order-2">
        <p className="mb-4 text-3xl font-medium">
          Waarom kiezen voor Checkmijnverzekering
        </p>
        <ul className="mb-6 ml-4 space-y-2 text-gray-600 list-disc">
          <li>
            <b>Onafhankelijk:</b> We vergelijken een breed scala aan
            verzekeraars voor de beste deal.
          </li>
          <li>
            <b>Garantie tegen onderverzekering:</b> Wij helpen u de
            inboedelwaardemeter correct in te vullen.
          </li>
          <li>
            <b>Transparant:</b> Duidelijk inzicht in wat wel en niet gedekt is,
            zowel binnen- als buitenshuis.
          </li>
          <li>
            <b>Advies op maat:</b> Heeft u een bijzondere verzameling, dure
            sieraden of speciale apparatuur? Wij adviseren u graag.
          </li>
        </ul>
        <Link
          href="/plan-een-gesprek"
          className="group relative inline-block self-start text-lg font-medium
            bg-[#00af76] text-white text-center
            py-2 px-6 rounded-full
            shadow-md-custom
            overflow-hidden
            transition-all duration-300
          "
        >
          <span className="absolute top-0 w-full h-full transition-transform duration-500 ease-in-out transform -skew-x-12 -left-[105%] bg-gradient-to-r from-transparent to-white/30 group-hover:translate-x-[110%]"></span>
          <span className="relative">Start vergelijken</span>
        </Link>
      </div>
    </div>
  );
}

export default InboedelverzekeringWhyUs;
