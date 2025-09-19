import Image from "next/image";
import Link from "next/link";

function Overonssteps() {
  return (
    <div className="max-w-7xl mx-auto pt-40 relative">
      <div className="w-[30%]">
        <p className="text-3xl font-medium">
          We have the best team and process
        </p>
        <p className="my-5 text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has
        </p>
        <Link
          href="#"
          className="bg-[#00af76] text-white py-2 px-6 rounded-full"
        >
          Vul ons formulier in
        </Link>
      </div>

      <div className="-mt-50 px-10 relative">
        <Image
          src="/img/Line 25.png"
          width={1200}
          height={1200}
          alt="svg steps line"
          className="w-full h-full"
        />

        <div>
          <div className="w-20 h-20 bg-white rounded-full relative z-10 flex items-center justify-center -top-11.5 left-10">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          </div>
          <div className="w-[30%] flex">
            <div>
              <p className="font-medium">Over Checkmijnverzekering</p>
              <p className="text-gray-600 mt-2">
                Met jarenlange ervaring in de verzekeringswereld kennen we de
                valkuilen én de kansen.
              </p>
            </div>
            <p className="text-[9rem] font-black -translate-25 text-gray-300/50">
              1
            </p>
          </div>
        </div>

        <div>
          <div className="w-20 h-20 bg-white rounded-full absolute z-10 flex items-center justify-center top-4/15 left-3/7">
            <div className="w-10 h-10 bg-gray-200 rounded-full relative"></div>
          </div>
          <div className="w-[30%] flex absolute top-2/5 left-4/10">
            <div>
              <p className="font-medium">Over Checkmijnverzekering</p>
              <p className="text-gray-600 mt-2">
                Met jarenlange ervaring in de verzekeringswereld kennen we de
                valkuilen én de kansen.
              </p>
            </div>
            <p className="text-[9rem] font-black -translate-25 text-gray-300/50 relative -z-1">
              2
            </p>
          </div>
        </div>

        <div>
          <div className="w-20 h-20 bg-white rounded-full absolute z-10 flex items-center justify-center -top-3.5 right-15">
            <div className="w-10 h-10 bg-gray-200 rounded-full relative"></div>
          </div>
          <div className="w-[30%] flex absolute top-25 -right-30">
            <div>
              <p className="font-medium">Over Checkmijnverzekering</p>
              <p className="text-gray-600 mt-2">
                Met jarenlange ervaring in de verzekeringswereld kennen we de
                valkuilen én de kansen.
              </p>
            </div>
            <p className="text-[9rem] font-black -translate-25 text-gray-300/50 relative -z-1">
              3
            </p>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0"></div>
    </div>
  );
}

export default Overonssteps;
