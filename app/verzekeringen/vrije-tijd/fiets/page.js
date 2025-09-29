import FietsverzekeringCards from "../../../_components/FietsverzekeringCards";
import FietsverzekeringList from "../../../_components/FietsverzekeringList";
import FietsverzekeringMain from "../../../_components/FietsverzekeringMain";
import FietsverzekeringNieuws from "../../../_components/FietsverzekeringNieuws";
import FietsverzekeringTabbedContent from "../../../_components/FietsverzekeringTabbedContent";
import FietsverzekeringVergelijken from "../../../_components/FietsverzekeringVergelijken";
import FietsverzekeringWhyUs from "../../../_components/FietsverzekeringWhyUs";
import { getSortedPostsData } from "../../../_lib/posts";

async function page() {
  const allPosts = await getSortedPostsData();

  return (
    <div className="w-full overflow-hidden">
      <FietsverzekeringMain />
      <FietsverzekeringCards />
      <FietsverzekeringList />
      <FietsverzekeringWhyUs />
      <FietsverzekeringVergelijken />
      <FietsverzekeringNieuws posts={allPosts} />
      <FietsverzekeringTabbedContent />
    </div>
  );
}

export default page;
