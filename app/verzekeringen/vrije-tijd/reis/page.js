import ReisverzekeringCards from "../../../_components/ReisverzekeringCards";
import ReisverzekeringList from "../../../_components/ReisverzekeringList";
import ReisverzekeringMain from "../../../_components/ReisverzekeringMain";
import ReisverzekeringNieuws from "../../../_components/ReisverzekeringNieuws";
import ReisverzekeringTabbedContent from "../../../_components/ReisverzekeringTabbedContent";
import ReisverzekeringVergelijken from "../../../_components/ReisverzekeringVergelijken";
import ReisverzekeringWhyUs from "../../../_components/ReisverzekeringWhyUs";
import { getSortedPostsData } from "../../../_lib/posts";

async function page() {
  const allPosts = await getSortedPostsData();

  return (
    <div className="w-full overflow-hidden">
      <ReisverzekeringMain />
      <ReisverzekeringCards />
      <ReisverzekeringList />
      <ReisverzekeringWhyUs />
      <ReisverzekeringVergelijken />
      <ReisverzekeringNieuws posts={allPosts} />
      <ReisverzekeringTabbedContent />
    </div>
  );
}

export default page;
