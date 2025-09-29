import AutoverzekeringCards from "../../../_components/AutoverzekeringCards";
import AutoverzekeringList from "../../../_components/AutoverzekeringList";
import AutoverzekeringMain from "../../../_components/AutoverzekeringMain";
import AutoVerzekeringNieuws from "../../../_components/AutoVerzekeringNieuws";
import AutoverzekeringTabbedContent from "../../../_components/AutoverzekeringTabbedContent";
import AutoverzekeringVergelijken from "../../../_components/AutoverzekeringVergelijken";
import AutoverzkeringWhyUs from "../../../_components/AutoverzkeringWhyUs";
import { getSortedPostsData } from "../../../_lib/posts";

async function page() {
  const allPosts = await getSortedPostsData();

  return (
    <div className="w-full overflow-hidden">
      <AutoverzekeringMain />
      <AutoverzekeringCards />
      <AutoverzekeringList />
      <AutoverzkeringWhyUs />
      <AutoverzekeringVergelijken />
      <AutoVerzekeringNieuws posts={allPosts} />
      <AutoverzekeringTabbedContent />
    </div>
  );
}

export default page;
