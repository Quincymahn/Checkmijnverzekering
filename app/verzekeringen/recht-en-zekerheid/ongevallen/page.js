import OngevallenverzekeringCards from "../../../_components/OngevallenverzekeringCards";
import OngevallenverzekeringList from "../../../_components/OngevallenverzekeringList";
import OngevallenverzekeringMain from "../../../_components/OngevallenverzekeringMain";
import OngevallenverzekeringNieuws from "../../../_components/OngevallenverzekeringNieuws";
import OngevallenverzekeringTabbedContent from "../../../_components/OngevallenverzekeringTabbedContent";
import OngevallenverzekeringVergelijken from "../../../_components/OngevallenverzekeringVergelijken";
import OngevallenverzekeringWhyUs from "../../../_components/OngevallenverzekeringWhyUs";
import { getSortedPostsData } from "../../../_lib/posts";

function page() {
  const allPosts = getSortedPostsData();

  return (
    <div className="w-full overflow-hidden">
      <OngevallenverzekeringMain />
      <OngevallenverzekeringCards />
      <OngevallenverzekeringList />
      <OngevallenverzekeringWhyUs />
      <OngevallenverzekeringVergelijken />
      <OngevallenverzekeringNieuws posts={allPosts} />
      <OngevallenverzekeringTabbedContent />
    </div>
  );
}

export default page;
