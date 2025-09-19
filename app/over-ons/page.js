import CtaSection from "../_components/CtaSection";
import OveronsKernwaarden from "../_components/OveronsKernwaarden";
import OveronsMain from "../_components/OveronsMain";
import OveronsSection from "../_components/OveronsSection";
import Overonssteps from "../_components/Overonssteps";
import OveronsTestimonials from "../_components/OveronsTestimonials";
import VerzekeringenCoreValues from "../_components/VerzekeringenCoreValues";

function page() {
  return (
    <div>
      <OveronsMain />
      <OveronsSection />
      <div className="my-30">
        <CtaSection />
      </div>
      <VerzekeringenCoreValues />
      <OveronsTestimonials />
      {/* <Overonssteps /> */}
      {/* <OveronsKernwaarden /> */}
    </div>
  );
}

export default page;
