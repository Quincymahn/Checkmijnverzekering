import VerkeerCommonMistakes from "../../_components/VerkeerCommonMistakes";
import VerkeerCta from "../../_components/VerkeerCta";
import VerkeerInfoSection from "../../_components/VerkeerInfoSection";
import VerkeerMain from "../../_components/VerkeerMain";
import VerkeerTabbedContent from "../../_components/VerkeerTabbedContent";
import VerkeerVoordelen from "../../_components/VerkeerVoordelen";

function page() {
  return (
    <>
      <VerkeerMain />
      <VerkeerInfoSection />
      <VerkeerCommonMistakes />
      <VerkeerCta />
      <VerkeerVoordelen />
      <VerkeerTabbedContent />
    </>
  );
}

export default page;
