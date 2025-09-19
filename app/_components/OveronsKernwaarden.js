import { MoveUpRight } from "lucide-react";
import Image from "next/image";

function OveronsKernwaarden() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto max-w-7xl pt-30">
      <div className="flex gap-10">
        <div className="flex gap-2">
          <div className="w-6 h-11 rounded-tl-3xl rounded-tr-xl rounded-bl-3xl rounded-br-md bg-[#00af76] translate-y-2 -rotate-25"></div>
          <div className="w-6 h-12 rounded-tl-2xl rounded-tr-xl rounded-bl-2xl rounded-br-md scale-[-1] bg-[#09182b] -translate-y-4 -rotate-5"></div>
        </div>
        <p className="text-3xl font-medium">Onze kernwaarden</p>
        <div className="flex gap-2">
          <div className="w-4.5 h-9 rounded-tl-2xl rounded-tr-xl rounded-bl-2xl rounded-br-md bg-[#1b7ced] -translate-y-1 -rotate-8"></div>
          <div className="w-3.5 h-6 rounded-tl-xl rounded-tr-2xl rounded-bl-md rounded-br-2xl bg-[#181818] translate-y-5 rotate-15"></div>
        </div>
      </div>

      <div className="grid w-full grid-cols-3 gap-5 mt-10">
        <div className="bg-gray-100 shadow-md-custom rounded-2xl">
          <div className="p-6">
            <p className="text-2xl font-medium">Lorem ipsum text</p>
            <p className="mt-5 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </p>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex items-center justify-center w-10 h-10 mb-5 ml-5 bg-black rounded-full">
              <MoveUpRight className="w-5 h-5 text-white" />
            </div>
            <Image
              src="/img/woman-near-broken-car-call-help.jpg"
              width={300}
              height={300}
              alt="Woman near broken car"
              className=" w-60 h-60 object-cover rounded-tl-[12rem] rounded-tr-[8rem] rounded-bl-[8rem] rounded-br-2xl"
            />
          </div>
        </div>
        <div className="bg-gray-100 shadow-md-custom rounded-2xl">
          <div className="p-6">
            <p className="text-2xl font-medium">Lorem ipsum text</p>
            <p className="mt-5 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </p>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex items-center justify-center w-10 h-10 mb-5 ml-5 bg-black rounded-full">
              <MoveUpRight className="w-5 h-5 text-white" />
            </div>
            <Image
              src="/img/side-view-man-living-as-digital-nomad.jpg"
              width={300}
              height={300}
              alt="Woman near broken car"
              className=" w-60 h-60 object-cover rounded-tl-[12rem] rounded-tr-[8rem] rounded-bl-[8rem] rounded-br-2xl"
            />
          </div>
        </div>
        <div className="bg-gray-100 shadow-md-custom rounded-2xl">
          <div className="p-6">
            <p className="text-2xl font-medium">Lorem ipsum text</p>
            <p className="mt-5 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
            </p>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex items-center justify-center w-10 h-10 mb-5 ml-5 bg-black rounded-full">
              <MoveUpRight className="w-5 h-5 text-white" />
            </div>
            <Image
              src="/img/istockphoto-1338523355-612x612.jpg"
              width={300}
              height={300}
              alt="Woman near broken car"
              className=" w-60 h-60 object-cover rounded-tl-[12rem] rounded-tr-[8rem] rounded-bl-[8rem] rounded-br-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OveronsKernwaarden;
