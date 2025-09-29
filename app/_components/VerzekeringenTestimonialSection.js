import { Quote, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function VerzekeringenTestimonialSection() {
  return (
    <div className="w-full px-4 py-25 sm:p-25 bg-radial from-[#112e53] to-[#09182b]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="flex flex-col items-center justify-center space-y-7">
            <p className="text-3xl font-medium text-center text-white lg:text-left">
              Deze tevreden klanten <br /> gingen je voor
            </p>
            <p className="text-center text-gray-200 lg:text-left">
              Het vertrouwen van onze klanten is onze grootste drijfveer.
              Hieronder <br />
              lees je de ongefilterde ervaringen van mensen die via ons niet
              alleen <br />
              geld hebben bespaard, maar ook rust en zekerheid vonden.
            </p>
            <Link
            href="/plan-een-gesprek"
              className="bg-[#00af76] text-white rounded-full px-8 py-2 content-center"
            >
              Plan een gesprek
            </Link>
          </div>

          <div className="flex">
            <div className="relative z-10 flex flex-col items-center justify-center space-y-3 hexagon-straight">
              <p className="text-5xl font-bold text-white">4.6</p>
              <div className="flex">
                <Star fill="#E3DE47" stroke="0" />
                <Star fill="#E3DE47" stroke="0" />
                <Star fill="#E3DE47" stroke="0" />
                <Star fill="#E3DE47" stroke="0" />
                <Star fill="#E3DE47" stroke="0" />
              </div>
              <p className="text-sm text-center text-gray-200">
                Op basis van 236 klantbeoordelingen
              </p>
            </div>
            <Image
              src="/img/5369647.jpg"
              width={230}
              height={230}
              alt="review vector image"
              className="object-cover mt-20 hexagon-straight -ml-25"
            />
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 mt-20 lg:grid-cols-3">
          <div className="p-3 px-6 bg-white border border-black rounded-2xl border-b-3">
            <div className="flex justify-between">
              <div className="flex flex-col items-center justify-center -mt-6 bg-white border border-black rounded-full w-13 h-13">
                <Quote className="scale-[-1] w-7 h-7" fill="#000000" />
              </div>
              <div className="flex">
                <Star fill="#000000" stroke="0" />
                <Star fill="#000000" stroke="0" />
                <Star fill="#000000" stroke="0" />
                <Star fill="#000000" stroke="0" />
                <Star fill="#000000" stroke="0" />
              </div>
            </div>
            <p className="mt-5 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the
            </p>
            <p className="mt-3 text-[#1b7ced] font-medium">Kees Smit</p>
            <p className="font-medium text-gray-600">20 Aug 2025</p>
          </div>

          <div className="p-3 px-6 bg-white border border-black rounded-2xl border-b-3">
            <div className="flex justify-between">
              <div className="flex flex-col items-center justify-center -mt-6 bg-white border border-black rounded-full w-13 h-13">
                <Quote className="scale-[-1] w-7 h-7" fill="#000000" />
              </div>
              <div className="flex">
                <Star fill="#000000" stroke="0" />
                <Star fill="#000000" stroke="0" />
                <Star fill="#000000" stroke="0" />
                <Star fill="#000000" stroke="0" />
                <Star fill="#000000" stroke="0" />
              </div>
            </div>
            <p className="mt-5 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the
            </p>
            <p className="mt-3 text-[#1b7ced] font-medium">Kees Smit</p>
            <p className="font-medium text-gray-600">20 Aug 2025</p>
          </div>

          <div className="p-3 px-6 bg-white border border-black rounded-2xl border-b-3">
            <div className="flex justify-between">
              <div className="flex flex-col items-center justify-center -mt-6 bg-white border border-black rounded-full w-13 h-13">
                <Quote className="scale-[-1] w-7 h-7" fill="#000000" />
              </div>
              <div className="flex">
                <Star fill="#000000" stroke="0" />
                <Star fill="#000000" stroke="0" />
                <Star fill="#000000" stroke="0" />
                <Star fill="#000000" stroke="0" />
                <Star fill="#000000" stroke="0" />
              </div>
            </div>
            <p className="mt-5 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the
            </p>
            <p className="mt-3 text-[#1b7ced] font-medium">Kees Smit</p>
            <p className="font-medium text-gray-600">20 Aug 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerzekeringenTestimonialSection;
