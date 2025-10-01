import { Quote, Star } from "lucide-react";

// Een kleine, herbruikbare kaart-component voor de duidelijkheid
function TestimonialCard({ text, author, date }) {
  return (
    <div className="flex flex-col p-5 mx-4 transition-all duration-300 bg-white border-2 border-black rounded-2xl shadow-md-custom border-b-6 hover:-rotate-3 hover:shadow-lg hover:shadow-black/60 hover:-translate-y-2">
      <div className="flex justify-between flex-shrink-0">
        <div className="flex items-center justify-center bg-white border-2 border-black rounded-full -translate-y-9 w-15 h-15">
          <Quote className="w-7 h-7 scale-[-1]" />
        </div>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} fill="#000000" strokeWidth={0} />
          ))}
        </div>
      </div>

      <p className="flex-grow text-gray-700">{text}</p>

      <div className="pt-4 mt-5 border-t border-gray-200">
        <p className="text-[#1b7ced] font-semibold">{author}</p>
        <p className="text-sm text-gray-600">{date}</p>
      </div>
    </div>
  );
}

// De hoofdcomponent gebruikt nu een array met data
function OveronsTestimonials() {
  const testimonialData = [
    {
      text: "Eindelijk een adviseur die echt luistert en meedenkt. Mijn complete verzekeringspakket is nu overzichtelijker en zelfs goedkoper. Wat een verademing!",
      author: "Laura van den Berg",
      date: "1 Oktober 2025",
    },
    {
      text: "Na de aankoop van ons eerste huis zagen we door de bomen het bos niet meer. De adviseur heeft alles van A tot Z perfect voor ons geregeld. Een absolute aanrader.",
      author: "Tom en Sarah",
      date: "17 September 2025",
    },
    {
      text: "Als ZZP'er is tijd geld. Ze hebben snel en vakkundig mijn zakelijke verzekeringen op orde gebracht. Ik kan me nu weer volledig op mijn werk richten.",
      author: "Peter de Wit",
      date: "10 September 2025",
    },
    {
      text: "Super tevreden over de snelle afhandeling van mijn autoschade. Eén telefoontje was genoeg en alles werd direct in gang gezet. Topservice!",
      author: "Yasmin El Amrani",
      date: "2 September 2025",
    },
    {
      text: "Ik wist niet dat ik zoveel kon besparen op mijn oldtimerverzekering. Dankzij het onafhankelijke advies heb ik nu een betere dekking voor een lagere premie.",
      author: "Gerard Willems",
      date: "29 Augustus 2025",
    },
    {
      text: "Het overstappen leek een hoop gedoe, maar zij hebben alles voor me geregeld. Ik hoefde zelf nergens achteraan. Echt een zorg minder.",
      author: "Chantal Goossens",
      date: "22 Augustus 2025",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-30 max-w-7xl mb-30">
      <p className="text-2xl font-medium">Wat onze klanten zeggen</p>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 mt-15">
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
  );
}

export default OveronsTestimonials;
