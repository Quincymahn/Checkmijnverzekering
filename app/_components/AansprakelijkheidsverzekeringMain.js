import Image from "next/image";
import Link from "next/link";

function AansprakelijkheidsverzekeringMain() {
  return (
    <div className="p-4 w-full h-[65vh] md:h-[75vh]">
      <div className="relative w-full h-full">
        {/* Background Image and Overlay remain the same */}
        <Image
          src="/img/family-leisure-young-adult-smiling-man-supporting-child-swing-woman-crouching-with-outstretched-hand-spending-leisure-time-together-near-country-house-autumn-day.jpg"
          fill
          alt="Kind kijkt geschrokken naar een voetbal die door een ruit is gegaan"
          className="object-cover w-full h-full rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>

        {/* --- CHANGE: Re-introducing responsive absolute positioning for precise control --- */}
        <div
          className="
            absolute w-[90%] max-w-5xl
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            md:left-[10%] md:top-1/2 md:-translate-x-0 md:-translate-y-1/2
            md:w-auto 
          "
        >
          {/* A single container to control text-alignment for all children */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Aansprakelijkheids verzekering
            </h1>

            <p className="mt-6 mb-10 text-base italic text-gray-100 md:text-lg">
              Een ongeluk zit in een klein hoekje. Bescherm uzelf en uw gezin{" "}
              <br />
              tegen de financiële gevolgen van schade die u per ongeluk aan
              anderen toebrengt.
            </p>

            {/* This Link will now correctly inherit the text-alignment from its parent */}
            <Link
              href="/plan-een-gesprek"
              className="group relative inline-block text-lg font-medium
                bg-[#00af76] text-white 
                py-2 px-8 rounded-full
                shadow-md-custom
                overflow-hidden 
                transition-all duration-300
              "
            >
              <span className="absolute top-0 w-full h-full transition-transform duration-500 ease-in-out transform -skew-x-12 -left-[105%] bg-gradient-to-r from-transparent to-white/30 group-hover:translate-x-[110%]"></span>
              <span className="relative">Start gratis vergelijking</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AansprakelijkheidsverzekeringMain;
