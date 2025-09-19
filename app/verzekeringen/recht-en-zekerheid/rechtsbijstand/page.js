import RechtsbijstandverzekeringCards from "../../../_components/RechtsbijstandverzekeringCards";
import RechtsbijstandverzekeringList from "../../../_components/RechtsbijstandverzekeringList";
import RechtsbijstandverzekeringMain from "../../../_components/RechtsbijstandverzekeringMain";
import RechtsbijstandverzekeringNieuws from "../../../_components/RechtsbijstandverzekeringNieuws";
import RechtsbijstandverzekeringTabbedContent from "../../../_components/RechtsbijstandverzekeringTabbedContent";
import RechtsbijstandverzekeringVergelijken from "../../../_components/RechtsbijstandverzekeringVergelijken";
import RechtsbijstandverzekeringWhyUs from "../../../_components/RechtsbijstandverzekeringWhyUs";
import { getSortedPostsData } from "../../../_lib/posts";

function page() {
  const allPosts = getSortedPostsData();

  return (
    <div className="w-full overflow-hidden">
      <RechtsbijstandverzekeringMain />
      <RechtsbijstandverzekeringCards />
      <RechtsbijstandverzekeringList />
      <RechtsbijstandverzekeringWhyUs />
      <RechtsbijstandverzekeringVergelijken />
      <RechtsbijstandverzekeringNieuws posts={allPosts} />
      <RechtsbijstandverzekeringTabbedContent />
    </div>
  );
}

export default page;
