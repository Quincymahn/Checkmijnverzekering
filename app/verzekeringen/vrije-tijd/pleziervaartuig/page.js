import PleziervaartuigverzekeringCards from "../../../_components/PleziervaartuigverzekeringCards";
import PleziervaartuigverzekeringList from "../../../_components/PleziervaartuigverzekeringList";
import PleziervaartuigverzekeringMain from "../../../_components/PleziervaartuigverzekeringMain";
import PleziervaartuigverzekeringNieuws from "../../../_components/PleziervaartuigverzekeringNieuws";
import PleziervaartuigverzekeringTabbedContent from "../../../_components/PleziervaartuigverzekeringTabbedContent";
import PleziervaartuigverzekeringVergelijken from "../../../_components/PleziervaartuigverzekeringVergelijken";
import PleziervaartuigverzekeringWhyUs from "../../../_components/PleziervaartuigverzekeringWhyUs";
import { getSortedPostsData } from "../../../_lib/posts";

function page() {
  const allPosts = getSortedPostsData();

  return (
    <div className="w-full overflow-hidden">
      <PleziervaartuigverzekeringMain />
      <PleziervaartuigverzekeringCards />
      <PleziervaartuigverzekeringList />
      <PleziervaartuigverzekeringWhyUs />
      <PleziervaartuigverzekeringVergelijken />
      <PleziervaartuigverzekeringNieuws posts={allPosts} />
      <PleziervaartuigverzekeringTabbedContent />
    </div>
  );
}

export default page;
