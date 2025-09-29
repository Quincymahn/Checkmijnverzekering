import VrijeTijdCommonMistakes from "../../_components/VrijeTijdCommonMistakes";
import VrijeTijdCta from "../../_components/VrijeTijdCta";
import VrijeTijdInfoSection from "../../_components/VrijeTijdInfoSection";
import VrijeTijdMain from "../../_components/VrijeTijdMain";
import VrijeTijdTabbedContent from "../../_components/VrijeTijdTabbedContent";
import VrijeTijdVoordelen from "../../_components/VrijeTijdVoordelen";

function page() {
  return (
    <>
      <VrijeTijdMain />
      <VrijeTijdInfoSection />
      <VrijeTijdCommonMistakes />
      <VrijeTijdCta />
      <VrijeTijdVoordelen />
      <VrijeTijdTabbedContent />
    </>
  );
}

export default page;
