import Logo from "./Logo";
import NavItems from "./NavItems";
import NavRight from "./NavRight";
import MobileMenu from "./MobileMenu";

function Navbar() {
  return (
    <div
      className="w-[85%] top-5 items-center absolute 
                    flex justify-between min-[900px]:grid min-[900px]:grid-cols-3 gap-4 
                    py-2 px-3 min-[1150px]:px-6 
                    rounded-full bg-white/20 backdrop-blur-sm border border-white z-10"
    >
      <Logo />

      {/* Desktop Navigation */}
      <div className="hidden min-[900px]:block">
        <NavItems />
      </div>

      {/* Desktop CTA */}
      <div className="hidden min-[900px]:block">
        <NavRight />
      </div>

      {/* Mobile Menu */}
      <MobileMenu />
    </div>
  );
}

export default Navbar;
