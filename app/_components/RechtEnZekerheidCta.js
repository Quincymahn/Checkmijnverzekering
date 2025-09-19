import Link from "next/link";

function RechtEnZekerheidCta() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto space-y-6 max-w-7xl my-30">
      <div className="flex gap-10">
        <div className="flex gap-2">
          <div className="w-4.5 h-8 rounded-tl-3xl rounded-tr-xl rounded-bl-3xl rounded-br-md bg-[#00af76] translate-y-2 -rotate-25"></div>
          <div className="w-4.5 h-9 rounded-tl-2xl rounded-tr-xl rounded-bl-2xl rounded-br-md scale-[-1] bg-[#09182b] -translate-y-4 -rotate-5"></div>
        </div>
        <p className="text-3xl font-medium">
          Klaar voor Financiële Rust en Zekerheid?
        </p>
        <div className="flex gap-2">
          <div className="w-4.5 h-9 rounded-tl-2xl rounded-tr-xl rounded-bl-2xl rounded-br-md bg-[#1b7ced] -translate-y-1 -rotate-8"></div>
          <div className="w-3.5 h-6 rounded-tl-xl rounded-tr-2xl rounded-bl-md rounded-br-2xl bg-[#181818] translate-y-5 rotate-15"></div>
        </div>
      </div>
      <p className="text-center text-gray-600 w-md ">
        Laat ons een gratis en vrijblijvende analyse maken van uw persoonlijke
        risico&apos;s. Wij vinden de beste dekking om u en uw gezin te
        beschermen.
      </p>
      <Link
        href="#"
        className="group relative inline-block text-lg font-medium
    bg-[#00af76] text-white text-center
    py-1 px-6 rounded-full
    shadow-md-custom
    overflow-hidden
    transition-all duration-300
  "
      >
        {/* Dit is het glans-element */}
        <span className="absolute top-0 w-full h-full transition-transform duration-500 ease-in-out transform -skew-x-12 -left-[105%] bg-gradient-to-r from-transparent to-white/30 group-hover:translate-x-[110%]"></span>

        {/* Tekst moet relatief zijn */}
        <span className="relative">Ja, ik wil een gratis risico check</span>
      </Link>
    </div>
  );
}

export default RechtEnZekerheidCta;
