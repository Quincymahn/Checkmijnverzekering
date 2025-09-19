import Link from "next/link";

function NavRight() {
  return (
    <div className="flex justify-end">
      <Link
        href="/plan-een-gesprek"
        className="group relative inline-block 
                   text-xs md:text-sm lg:text-base font-medium
                   bg-[#00af76] text-white 
                   py-2 px-3 md:px-4 lg:px-6 rounded-full
                   overflow-hidden
                   transition-all duration-300
                   whitespace-nowrap"
      >
        {/* Glans-element */}
        <span className="absolute top-0 w-full h-full transition-transform duration-500 ease-in-out transform -skew-x-12 -left-[105%] bg-gradient-to-r from-transparent to-white/30 group-hover:translate-x-[110%]"></span>

        {/* Responsive text content */}
        <span className="relative">
          <span className="md:hidden">Plan een gesprek</span>
          <span className="hidden md:inline lg:hidden">Plan een gesprek</span>
          <span className="hidden lg:inline">Plan een gesprek</span>
        </span>
      </Link>
    </div>
  );
}

export default NavRight;
