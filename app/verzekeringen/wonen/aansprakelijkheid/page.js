import AansprakelijkheidsverzekeringCards from "../../../_components/AansprakelijkheidsverzekeringCards";
import AansprakelijkheidsverzekeringList from "../../../_components/AansprakelijkheidsverzekeringList";
import AansprakelijkheidsverzekeringMain from "../../../_components/AansprakelijkheidsverzekeringMain";
import AansprakelijkheidsverzekeringNieuws from "../../../_components/AansprakelijkheidsverzekeringNieuws";
import AansprakelijkheidsverzekeringTabbedContent from "../../../_components/AansprakelijkheidsverzekeringTabbedContent";
import AansprakelijkheidsverzekeringVergelijken from "../../../_components/AansprakelijkheidsverzekeringVergelijken";
import AansprakelijkheidsverzekeringWhyUs from "../../../_components/AansprakelijkheidsverzekeringWhyUs";
import { getSortedPostsData } from "../../../_lib/posts";

function page() {
  const allPosts = getSortedPostsData();

  return (
    <div className="w-full overflow-hidden">
      <AansprakelijkheidsverzekeringMain />
      <AansprakelijkheidsverzekeringCards />
      <AansprakelijkheidsverzekeringList />
      <AansprakelijkheidsverzekeringWhyUs />
      <AansprakelijkheidsverzekeringVergelijken />
      <AansprakelijkheidsverzekeringNieuws posts={allPosts} />
      <AansprakelijkheidsverzekeringTabbedContent />
    </div>
  );
}

export default page;
