import VerzekeringenAccordion from "../_components/VerzekeringenAccordion";
import VerzekeringenCoreValues from "../_components/VerzekeringenCoreValues";
import VerzekeringenInfo from "../_components/VerzekeringenInfo";
import VerzekeringenMain from "../_components/VerzekeringenMain";
import VerzekeringenTestimonialSection from "../_components/VerzekeringenTestimonialSection";

function page() {
  return (
    <>
      <VerzekeringenMain />
      <VerzekeringenInfo />
      <VerzekeringenTestimonialSection />
      <VerzekeringenAccordion />
      <VerzekeringenCoreValues />
    </>
  );
}

export default page;
