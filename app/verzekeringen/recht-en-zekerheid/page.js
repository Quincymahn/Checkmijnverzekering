import RechtEnZekerheidCommonMistakes from "../../_components/RechtEnZekerheidCommonMistakes";
import RechtEnZekerheidCta from "../../_components/RechtEnZekerheidCta";
import RechtEnZekerheidInfoSection from "../../_components/RechtEnZekerheidInfoSection";
import RechtEnZekerheidMain from "../../_components/RechtenZekerheidMain";
import RechtEnZekerheidTabbedContent from "../../_components/RechtEnZekerheidTabbedContent";
import RechtEnZekerheidVoordelen from "../../_components/RechtEnZekerheidVoordelen";

function page() {
  return (
    <>
      <RechtEnZekerheidMain />
      <RechtEnZekerheidInfoSection />
      <RechtEnZekerheidCommonMistakes />
      <RechtEnZekerheidCta />
      <RechtEnZekerheidVoordelen />
      <RechtEnZekerheidTabbedContent />
    </>
  );
}

export default page;
