import OldtimerverzekeringCards from "../../../_components/OldtimerverzekeringCards";
import OldtimerverzekeringList from "../../../_components/OldtimerverzekeringList";
import OldtimerverzekeringMain from "../../../_components/OldtimerverzekeringMain";
import OldtimerverzekeringNieuws from "../../../_components/OldtimerverzekeringNieuws";
import OldtimerverzekeringTabbedContent from "../../../_components/OldtimerverzekeringTabbedContent";
import OldtimerverzekeringVergelijken from "../../../_components/OldtimerverzekeringVergelijken";
import OldtimerverzekeringWhyUs from "../../../_components/OldtimerverzekeringWhyUs";
import { getSortedPostsData } from "../../../_lib/posts";

function page() {
  const allPosts = getSortedPostsData();

  return (
    <div className="w-full overflow-hidden">
      <OldtimerverzekeringMain />
      <OldtimerverzekeringCards />
      <OldtimerverzekeringList />
      <OldtimerverzekeringWhyUs />
      <OldtimerverzekeringVergelijken />
      <OldtimerverzekeringNieuws posts={allPosts} />
      <OldtimerverzekeringTabbedContent />
    </div>
  );
}

export default page;
