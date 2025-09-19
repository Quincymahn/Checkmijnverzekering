import Image from "next/image";
import Navbar from "./Navbar";
import Link from "next/link";

function Main() {
  return (
    <div className="relative w-full h-screen p-4">
      <div className="relative w-full h-full">
        <Image
          src="/img/medium-shot-woman-man-road-trip.jpg"
          width={2000}
          height={2000}
          alt="Main hero section"
          className="object-cover w-full h-full rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
        <div className="absolute transform -translate-y-1/2 left-1/10 top-1/2">
          <h1 className="mb-8 font-bold leading-normal text-white min-[1150px]:text-7xl min-[770px]:text-6xl min-[570px]:text-5xl text-4xl">
            Slim vergelijken, <br />
            slimmer verzekeren.
          </h1>
          <Link
            href="#"
            className="
    group relative inline-block text-lg font-medium
    bg-[#00af76] text-white 
    py-2 px-8 rounded-full
    shadow-md-custom
    overflow-hidden
    transition-all duration-300
  "
          >
            {/* Dit is het glans-element */}
            <span className="absolute top-0 w-full h-full transition-transform duration-500 ease-in-out transform -skew-x-12 -left-[105%] bg-gradient-to-r from-transparent to-white/30 group-hover:translate-x-[110%]"></span>

            {/* Tekst moet relatief zijn */}
            <span className="relative">Start vergelijken →</span>
          </Link>
        </div>

        <div className="absolute flex overflow-hidden bg-gray-100 right-5 bottom-5 rounded-2xl shadow-md-custom">
          <Image
            src="/img/5369647.jpg"
            width={200}
            height={200}
            alt="trustpilote review image"
            className="object-cover h-40 w-30"
          />
          <div className="flex flex-col justify-center gap-4 px-4">
            <p className="text-3xl font-medium">5000+</p>
            <div className="flex">
              <Image
                src="/img/handsome-happy-bearded-man.jpg"
                width={50}
                height={50}
                alt="Headshot of a middle aged man"
                className="object-cover w-8 h-8 rounded-full"
              />
              <Image
                src="/img/business-man-by-skyscraper.jpg"
                width={50}
                height={50}
                alt="Headshot of a middle aged man"
                className="object-cover w-8 h-8 -ml-2 rounded-full"
              />
              <Image
                src="/img/close-up-blonde-woman-outdoors.jpg"
                width={50}
                height={50}
                alt="Headshot of a middle aged man"
                className="object-cover w-8 h-8 -ml-2 rounded-full"
              />
            </div>
            <p className="font-medium text-gray-700">Tevreden klanten</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
