import { Quote } from "lucide-react";
import Image from "next/image";

function TestimonialSection() {
  return (
    <div className="py-20">
      {" "}
      {/* Padding toegevoegd voor meer ademruimte */}
      <p className="text-3xl font-medium text-center mb-15">
        Deze mensen zijn u voorgegaan
      </p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {/* Testimonial 1: Focus op overstappen en besparen */}
        <div className="lg:row-span-2 sm:col-span-2 lg:col-span-1 bg-[#09182b] p-6 rounded-tl-4xl rounded-br-4xl shadow-md-custom flex flex-col">
          <Quote
            className="text-white w-8 h-8 scale-[-1] mb-10 flex-shrink-0"
            fill="#ffffff"
          />
          <div className="flex-grow">
            <p className="text-gray-300">
              &quot;Ik zag al jaren op tegen het uitzoeken van mijn
              verzekeringen. Via Checkmijnverzekering was het in één middag
              geregeld. Ze hebben mijn volledige pakket doorgelicht en een
              overstap geadviseerd. Niet alleen ben ik nu beter verzekerd tegen
              onderverzekering, ik bespaar ook nog eens bijna €300 per jaar. De
              service was helder, persoonlijk en zonder enige druk. Een absolute
              aanrader voor iedereen die duidelijkheid zoekt.&quot;
            </p>
          </div>
          <div className="w-full py-3 mt-auto border-b border-gray-500"></div>
          <div className="flex items-center justify-between pt-3">
            <div>
              <p className="text-[#1b7ced]">Anja de Vries</p>
              <p className="text-gray-400">12 September 2025</p>
            </div>
            <div className="flex gap-1">
              {/* Sterren */}
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/img/star.png"
                  width={15}
                  height={15}
                  alt="ster icoon"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial 2: Focus op complexe situatie (ZZP) */}
        <div className="flex flex-col p-6 bg-gray-100 border border-gray-300 rounded-2xl shadow-md-custom">
          <Quote
            className="scale-[-1] text-black w-8 h-8 flex-shrink-0"
            fill="#000000"
          />
          <p className="flex-grow mt-4 text-gray-700">
            &quot;Als startende ZZP&apos;er had ik geen idee waar ik moest
            beginnen. De adviseur nam echt de tijd om mijn situatie te begrijpen
            en legde het verschil tussen een AVB en BAV helder uit. Binnen
            no-time had ik een passend pakket.&quot;
          </p>
          <div className="flex items-center justify-between pt-3 mt-auto">
            <div>
              <p className="text-[#1b7ced]">Mark Janssen</p>
              <p className="text-gray-600">5 September 2025</p>
            </div>
            <div className="flex gap-1">
              {/* Sterren */}
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/img/star.png"
                  width={15}
                  height={15}
                  alt="ster icoon"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial 3: Focus op schadeafhandeling */}
        <div className="flex flex-col p-6 bg-gray-100 border border-gray-300 rounded-2xl shadow-md-custom">
          <Quote
            className="scale-[-1] text-black w-8 h-8 flex-shrink-0"
            fill="#000000"
          />
          <p className="flex-grow mt-4 text-gray-700">
            &quot;Na een flinke hagelbui had ons caravandak veel schade. Eén
            telefoontje was genoeg. Ze hebben direct een expert ingeschakeld en
            de hele afhandeling met de verzekeraar geregeld. Wat een rust in een
            stressvolle situatie.&quot;
          </p>
          <div className="flex items-center justify-between pt-3 mt-auto">
            <div>
              <p className="text-[#1b7ced]">Familie Pietersen</p>
              <p className="text-gray-600">30 Augustus 2025</p>
            </div>
            <div className="flex gap-1">
              {/* Sterren */}
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/img/star.png"
                  width={15}
                  height={15}
                  alt="ster icoon"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats sectie blijft hetzelfde */}
        <div className="flex justify-around col-span-1 gap-3 p-6 bg-gray-100 border border-gray-300 sm:col-span-2 rounded-2xl shadow-md-custom">
          <div>
            <p className="text-4xl font-medium sm:text-5xl ">7+</p>
            <p className="mt-2 text-gray-600">Jaar ervaring</p>
          </div>
          <div>
            <p className="text-4xl font-medium sm:text-5xl">95%</p>
            <p className="mt-2 text-gray-600">Beveelt ons aan</p>
          </div>
          <div>
            <p className="text-4xl font-medium sm:text-5xl">20+</p>
            <p className="mt-2 text-gray-600">Aanbieders</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSection;
