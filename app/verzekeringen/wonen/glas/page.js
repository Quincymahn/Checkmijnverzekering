import GlasverzekeringCards from "../../../_components/GlasverzekeringCards";
import GlasverzekeringList from "../../../_components/GlasverzekeringList";
import GlasverzekeringMain from "../../../_components/GlasverzekeringMain";
import GlasverzekeringNieuws from "../../../_components/GlasverzekeringNieuws";
import GlasverzekeringTabbedContent from "../../../_components/GlasverzekeringTabbedContent";
import GlasverzekeringVergelijken from "../../../_components/GlasverzekeringVergelijken";
import GlasverzekeringWhyUs from "../../../_components/GlasverzekeringWhyUs";
import { getSortedPostsData } from "../../../_lib/posts";

async function page() {
  const allPosts = await getSortedPostsData();

  return (
    <div className="w-full overflow-hidden">
      <GlasverzekeringMain />
      <GlasverzekeringCards />
      <GlasverzekeringList />
      <GlasverzekeringWhyUs />
      <GlasverzekeringVergelijken />
      <GlasverzekeringNieuws posts={allPosts} />
      <GlasverzekeringTabbedContent />
    </div>
  );
}

export default page;
