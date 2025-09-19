// app/nieuws/[slug]/page.js

import PostText from "../../_components/PostText";
import { getPostData, getSortedPostsData } from "../../_lib/posts";
import PostMain from "../../_components/PostMain";

// We gaan terug naar de meest simpele vorm
export default async function Page({ params }) {
  // We halen de slug hier expliciet op
  const postData = await getPostData(params.slug);

  const allPosts = getSortedPostsData();

  return (
    <div>
      <PostMain post={postData} />
      <PostText
        currentPost={postData}
        allPosts={allPosts}
        contentHtml={postData.contentHtml}
      />
    </div>
  );
}
