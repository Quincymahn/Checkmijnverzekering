import Link from "next/link";

function CtaSection() {
  return (
    <div className="py-20 relative bg-radial from-[#282828] from-40% to-[#181818] w-full overflow-hidden">
      <div className="absolute hidden lg:block hexagon -right-35 top-12 opacity-2"></div>
      <div className="absolute hidden lg:block hexagon-small right-10 top-22 opacity-2"></div>

      <div className="absolute hidden lg:block hexagon -left-35 top-12 opacity-2"></div>
      <div className="absolute hidden lg:block hexagon-small left-10 top-22 opacity-2"></div>
      <div className="max-w-2xl mx-auto text-center ">
        <p className="text-2xl text-white">
          Ontdek zelf hoe eenvoudig vergelijken <br />
          kan zijn. Start vandaag nog met Checkmijnverzekering.
        </p>
        <p className="mt-5 text-gray-300 mb-7">
          Benieuwd hoeveel jij kunt besparen? Doe <br /> nu de check het kost je
          maar 2 minuten
        </p>
        <Link
          href="#"
          className="group relative inline-block text-lg font-medium
    bg-[#00af76] text-white 
    py-1 px-8 rounded-full
    shadow-md-custom
    overflow-hidden
    transition-all duration-300"
        >
          <span className="absolute top-0 w-full h-full transition-transform duration-500 ease-in-out transform -skew-x-12 -left-[105%] bg-gradient-to-r from-transparent to-white/30 group-hover:translate-x-[110%]"></span>
          <span className="relative">Plan een gesprek</span>
        </Link>
      </div>
    </div>
  );
}

export default CtaSection;
