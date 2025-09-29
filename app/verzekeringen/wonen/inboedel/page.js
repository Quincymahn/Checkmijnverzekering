import InboedelverzekeringCards from "../../../_components/InboedelverzekeringCards";
import InboedelverzekeringList from "../../../_components/InboedelverzekeringList";
import InboedelverzekeringMain from "../../../_components/InboedelverzekeringMain";
import InboedelverzekeringNieuws from "../../../_components/InboedelverzekeringNieuws";
import InboedelverzekeringTabbedContent from "../../../_components/InboedelverzekeringTabbedContent";
import InboedelverzekeringVergelijken from "../../../_components/InboedelverzekeringVergelijken";
import InboedelverzekeringWhyUs from "../../../_components/InboedelverzekeringWhyUs";
import { getSortedPostsData } from "../../../_lib/posts";

async function page() {
  const allPosts = await getSortedPostsData();

  return (
    <div className="w-full overflow-hidden">
      <InboedelverzekeringMain />
      <InboedelverzekeringCards />
      <InboedelverzekeringList />
      <InboedelverzekeringWhyUs />
      <InboedelverzekeringVergelijken />
      <InboedelverzekeringNieuws posts={allPosts} />
      <InboedelverzekeringTabbedContent />
    </div>
  );
}

export default page;
