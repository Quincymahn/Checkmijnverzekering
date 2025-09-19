import OpstalverzekeringCards from "../../../_components/OpstalverzekeringCards";
import OpstalverzekeringList from "../../../_components/OpstalverzekeringList";
import OpstalverzekeringMain from "../../../_components/OpstalverzekeringMain";
import OpstalverzekeringNieuws from "../../../_components/OpstalverzekeringNieuws";
import OpstalverzekeringTabbedContent from "../../../_components/OpstalverzekeringTabbedContent";
import OpstalverzekeringVergelijken from "../../../_components/OpstalverzekeringVergelijken";
import OpstalverzekeringWhyUs from "../../../_components/OpstalverzekeringWhyUs";
import { getSortedPostsData } from "../../../_lib/posts";

function page() {
  const allPosts = getSortedPostsData();

  return (
    <div className="w-full overflow-hidden">
      <OpstalverzekeringMain />
      <OpstalverzekeringCards />
      <OpstalverzekeringList />
      <OpstalverzekeringWhyUs />
      <OpstalverzekeringVergelijken />
      <OpstalverzekeringNieuws posts={allPosts} />
      <OpstalverzekeringTabbedContent />
    </div>
  );
}

export default page;
