import NieuwsMain from "../_components/NieuwsMain";
import NieuwsSection from "../_components/NieuwsSection";
import { getPostData, getSortedPostsData } from "../_lib/posts";

async function page() {
  const allPostsData = getSortedPostsData();

  return (
    <div>
      <NieuwsMain latestPost={allPostsData[0]} />
      <NieuwsSection posts={allPostsData} />
    </div>
  );
}

export default page;
