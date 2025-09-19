import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 md:gap-4">
      <Image
        src="/img/hypotheek-offertes-favicon-white.png"
        width={40}
        height={40}
        alt="Website logo"
        className="w-8 h-8 min-[768px]:w-10 min-[768px]:h-10 min-[1150px]:w-12 min-[1150px]:h-12"
      />
      <div className="text-sm font-medium leading-tight text-white md:text-base lg:text-lg">
        <p>Check mijn</p>
        <p>Verzekering</p>
      </div>
    </Link>
  );
}

export default Logo;
