import WonenCommonMistakes from "../../_components/WonenCommonMistakes";
import WonenCta from "../../_components/WonenCta";
import WonenInfoSection from "../../_components/WonenInfoSection";
import WonenMain from "../../_components/WonenMain";
import WonenTabbedContent from "../../_components/WonenTabbedContent";
import WonenVoordelen from "../../_components/WonenVoordelen";

function page() {
  return (
    <>
      <WonenMain />
      <WonenInfoSection />
      <WonenCommonMistakes />
      <WonenCta />
      <WonenVoordelen />
      <WonenTabbedContent />
    </>
  );
}

export default page;
