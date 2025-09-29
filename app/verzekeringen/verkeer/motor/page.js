import MotorverzekeringCards from "../../../_components/MotorverzekeringCards";
import MotorverzekeringList from "../../../_components/MotorverzekeringList";
import MotorverzekeringMain from "../../../_components/MotorverzekeringMain";
import MotorVerzekeringNieuws from "../../../_components/MotorverzekeringNieuws";
import MotorverzekeringTabbedContent from "../../../_components/MotorverzekeringTabbedContent";
import MotorverzekeringVergelijken from "../../../_components/MotorverzekeringVergelijken";
import MotorverzekeringWhyUs from "../../../_components/MotorverzekeringWhyUs";
import { getSortedPostsData } from "../../../_lib/posts";

async function page() {
  const allPosts = await getSortedPostsData();

  return (
    <div className="w-full overflow-hidden">
      <MotorverzekeringMain />
      <MotorverzekeringCards />
      <MotorverzekeringList />
      <MotorverzekeringWhyUs />
      <MotorverzekeringVergelijken />
      <MotorVerzekeringNieuws posts={allPosts} />
      <MotorverzekeringTabbedContent />
    </div>
  );
}

export default page;
