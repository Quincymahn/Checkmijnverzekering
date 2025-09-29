import PostMain from "../../_components/PostMain";
import PostText from "../../_components/PostText";
import { getPostData, getSortedPostsData } from "../../_lib/posts";

export default async function Page({ params }) {
  const postData = await getPostData(params.slug);
  const allPosts = await getSortedPostsData();

  // Als de post niet gevonden wordt, toon een 404-pagina (Next.js doet dit automatisch)
  if (!postData) {
    return null;
  }

  return (
    <div>
      <PostMain post={postData} />
      <PostText
        contentHtml={postData.contentHtml}
        currentPost={postData}
        allPosts={allPosts}
      />
    </div>
  );
}
