import { Quote, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Een kleine, herbruikbare component voor een enkele testimonial-kaart
function TestimonialCard({ text, author, date }) {
  return (
    <div className="flex flex-col h-full p-3 px-6 bg-white border border-black rounded-2xl border-b-3">
      <div className="flex justify-between">
        <div className="flex flex-col items-center justify-center -mt-6 bg-white border border-black rounded-full w-13 h-13">
          <Quote className="scale-[-1] w-7 h-7" fill="#000000" />
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} fill="#000000" strokeWidth={0} />
          ))}
        </div>
      </div>
      <p className="flex-grow mt-5 text-gray-600">{text}</p>
      <div className="pt-3 mt-4 border-t border-gray-200">
        <p className="text-[#1b7ced] font-medium">{author}</p>
        <p className="text-sm font-medium text-gray-500">{date}</p>
      </div>
    </div>
  );
}

// De hoofdcomponent met alle data
function VerzekeringenTestimonialSection() {
  const testimonialData = [
    {
      text: "Ik dacht dat ik goed verzekerd was, maar na de polis-check bleek dat ik voor veel te veel betaalde. Dankzij hun onafhankelijke vergelijking bespaar ik nu maandelijks geld en heb ik zelfs een betere dekking.",
      author: "Sanne de Jong",
      date: "1 Oktober 2025",
    },
    {
      text: "Na de aankoop van ons eerste huis hadden we geen idee welke verzekeringen we nodig hadden. De adviseur legde alles rustig en helder uit. Het gaf ons de zekerheid dat alles direct goed geregeld was.",
      author: "Familie El-Masri",
      date: "21 September 2025",
    },
    {
      text: "De afhandeling van de schade aan mijn auto werd volledig uit handen genomen. Eén telefoontje was genoeg. Wat een fantastische service en een zorg minder in een stressvolle periode.",
      author: "Robert Pater",
      date: "20 September 2025",
    },
  ];

  return (
    <div className="w-full px-4 py-25 sm:p-25 bg-radial from-[#112e53] to-[#09182b]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="flex flex-col items-center justify-center text-center space-y-7 lg:text-left">
            <p className="text-3xl font-medium text-white">
              Deze tevreden klanten <br /> gingen je voor
            </p>
            <p className="max-w-lg text-gray-200">
              Het vertrouwen van onze klanten is onze grootste drijfveer.
              Hieronder lees je de ongefilterde ervaringen van mensen die via
              ons niet alleen geld hebben bespaard, maar ook rust en zekerheid
              vonden.
            </p>
            <Link
              href="/contact"
              className="bg-[#00af76] text-white rounded-full px-8 py-2 content-center hover:scale-105 transition-transform"
            >
              Plan een gesprek
            </Link>
          </div>

          <div className="flex">
            <div className="relative z-10 flex flex-col items-center justify-center space-y-3 hexagon-straight">
              <p className="text-5xl font-bold text-white">4.8</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="#E3DE47" strokeWidth={0} />
                ))}
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

        <div className="grid w-full grid-cols-1 gap-5 mt-20 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              author={testimonial.author}
              date={testimonial.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VerzekeringenTestimonialSection;
