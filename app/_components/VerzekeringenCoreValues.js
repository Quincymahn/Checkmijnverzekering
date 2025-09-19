import { Handshake, LaptopMinimalCheck, Scale } from "lucide-react";

function VerzekeringenCoreValues() {
  return (
    <div>
      <div className="px-4 space-y-5 text-center">
        <p className="text-3xl font-medium">
          Waarom kiezen voor Checkmijnverzekering?
        </p>
        <p className="text-gray-600">
          Bij Checkmijnverzekering zetten we ons in om jouw financiële doelen te
          realiseren met <br /> persoonlijk advies en de beste
          verzekeringsoplossingen.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-10 px-4 mx-auto space-y-10 lg:grid-cols-3 max-w-7xl mt-25 lg:space-y-0">
        <div className=" rounded-2xl text-center flex flex-col justify-center items-center bg-[#1b7ced] py-7">
          <div className="-mt-17  rounded-full border border-white h-20 w-20 bg-[#1b7ced] flex justify-center items-center">
            <LaptopMinimalCheck className="w-10 h-10 text-white" />
          </div>
          <div className="w-full py-1 my-5 bg-black/20">
            <p className="text-2xl font-medium text-white">Geheel online</p>
          </div>
          <p className="mx-10 text-gray-100">
            Vergelijk en sluit uw verzekeringen af waar en wanneer het u
            uitkomt. Eenvoudig, snel en volledig digitaal.
          </p>
        </div>

        <div className=" rounded-2xl text-center flex flex-col justify-center items-center bg-[#09182b] py-7">
          <div className="-mt-17  rounded-full border border-white h-20 w-20 bg-[#09182b] flex justify-center items-center">
            <Handshake className="w-10 h-10 text-white" />
          </div>
          <div className="w-full py-1 my-5 bg-black/20">
            <p className="text-2xl font-medium text-white">
              Geheel vrijblijvend
            </p>
          </div>
          <p className="mx-10 text-gray-100">
            Wij hebben geen voorkeur voor een verzekeraar. Ons enige doel is de
            beste deal en de juiste dekking voor uw situatie vinden.
          </p>
        </div>

        <div className=" rounded-2xl text-center flex flex-col justify-center items-center bg-[#00af76] py-7">
          <div className="-mt-17  rounded-full border border-white h-20 w-20 bg-[#00af76] flex justify-center items-center">
            <Scale className="w-10 h-10 text-white" />
          </div>
          <div className="w-full py-1 my-5 bg-black/20">
            <p className="text-2xl font-medium text-white">
              Geheel Vrijblijvend
            </p>
          </div>
          <p className="mx-10 text-gray-100">
            Ons advies en onze vergelijkingen zijn 100% vrijblijvend. U zit
            nergens aan vast, de keuze is volledig aan u.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VerzekeringenCoreValues;
