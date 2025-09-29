import BestelautoverzekeringCards from "../../../_components/BestelautoverzekeringCards";
import BestelautoverzekeringList from "../../../_components/BestelautoverzekeringList";
import BestelautoverzekeringMain from "../../../_components/BestelautoverzekeringMain";
import BestelautoverzekeringNieuws from "../../../_components/BestelautoverzekeringNieuws";
import BestelautoverzekeringTabbedContent from "../../../_components/BestelautoverzekeringTabbedContent";
import BestelautoverzekeringVergelijken from "../../../_components/BestelautoverzekeringVergelijken";
import BestelautoverzekeringWhyUs from "../../../_components/BestelautoverzekeringWhyUs";
import { getSortedPostsData } from "../../../_lib/posts";

async function page() {
  const allPosts = await getSortedPostsData();

  return (
    <div className="w-full overflow-hidden">
      <BestelautoverzekeringMain />
      <BestelautoverzekeringCards />
      <BestelautoverzekeringList />
      <BestelautoverzekeringWhyUs />
      <BestelautoverzekeringVergelijken />
      <BestelautoverzekeringNieuws posts={allPosts} />
      <BestelautoverzekeringTabbedContent />
    </div>
  );
}

export default page;
