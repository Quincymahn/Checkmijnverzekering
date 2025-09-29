import CaravanverzekeringCards from "../../../_components/CaravanverzekeringCards";
import CaravanverzekeringList from "../../../_components/CaravanverzekeringList";
import CaravanverzekeringMain from "../../../_components/CaravanverzekeringMain";
import CaravanverzekeringNieuws from "../../../_components/CaravanverzekeringNieuws";
import CaravanverzekeringTabbedContent from "../../../_components/CaravanverzekeringTabbedContent";
import CaravanverzekeringVergelijken from "../../../_components/CaravanverzekeringVergelijken";
import CaravanverzekeringWhyUs from "../../../_components/CaravanverzekeringWhyUs";
import { getSortedPostsData } from "../../../_lib/posts";

async function page() {
  const allPosts = await getSortedPostsData();

  return (
    <div className="w-full overflow-hidden">
      <CaravanverzekeringMain />
      <CaravanverzekeringCards />
      <CaravanverzekeringList />
      <CaravanverzekeringWhyUs />
      <CaravanverzekeringVergelijken />
      <CaravanverzekeringNieuws posts={allPosts} />
      <CaravanverzekeringTabbedContent />
    </div>
  );
}

export default page;
