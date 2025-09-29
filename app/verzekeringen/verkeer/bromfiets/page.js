import BromfietsverzekeringCards from "../../../_components/BromfietsverzekeringCards";
import BromfietsverzekeringList from "../../../_components/BromfietsverzekeringList";
import BromfietsverzekeringMain from "../../../_components/BromfietsverzekeringMain";
import BromfietsverzekeringNieuws from "../../../_components/BromfietsverzekeringNieuws";
import BromfietsverzekeringTabbedContent from "../../../_components/BromfietsverzekeringTabbedContent";
import BromfietsverzekeringVergelijken from "../../../_components/BromfietsverzekeringVergelijken";
import BromfietsverzekeringWhyUs from "../../../_components/BromfietsverzekeringWhyUs";
import { getSortedPostsData } from "../../../_lib/posts";

async function page() {
  const allPosts = await getSortedPostsData();

  return (
    <div className="w-full overflow-hidden">
      <BromfietsverzekeringMain />
      <BromfietsverzekeringCards />
      <BromfietsverzekeringList />
      <BromfietsverzekeringWhyUs />
      <BromfietsverzekeringVergelijken />
      <BromfietsverzekeringNieuws posts={allPosts} />
      <BromfietsverzekeringTabbedContent />
    </div>
  );
}

export default page;
