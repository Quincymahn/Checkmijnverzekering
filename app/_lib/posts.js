// app/_lib/posts.js

import { remark } from "remark";
import html from "remark-html";
import axios from "axios";

const STRAPI_INTERNAL_URL = process.env.STRAPI_API_URL_INTERNAL; // bv. http://strapi:1337
const STRAPI_PUBLIC_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL; // zorg dat deze exact overeenkomt met je .env

const normalizeUrl = (url) => {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  const base = (process.env.NEXT_PUBLIC_STRAPI_API_URL || "").replace(
    /\/$/,
    ""
  );
  const path = url.startsWith("/") ? url : `/${url}`;
  return `${base}${path}`;
};

const formatPostData = (strapiPost) => {
  if (!strapiPost) return null;

  // HANDLE both shapes:
  // 1) new flattened shape: { id, title, slug, content, coverImage: { url, ... } }
  // 2) classic Strapi v4 shape: { id, attributes: { title, slug, content, coverImage: { data: { attributes: { url }}}}}
  const source = strapiPost.attributes ? strapiPost.attributes : strapiPost;

  // Get cover image url from either shape
  const coverImageUrl = source.coverImage?.data?.attributes?.url
    ? normalizeUrl(source.coverImage.data.attributes.url)
    : source.coverImage?.url
    ? normalizeUrl(source.coverImage.url)
    : "/img/default-placeholder.jpg";

  return {
    id: strapiPost.id ?? source.id,
    slug: source.slug ?? null,
    title: source.title ?? null,
    excerpt: source.excerpt ?? null,
    content: source.content ?? "",
    date: source.date ?? null,
    category: source.category ?? null,
    coverImage: coverImageUrl,
  };
};

export async function getSortedPostsData() {
  try {
    const response = await axios.get(
      `${STRAPI_INTERNAL_URL}/api/blog-posts?populate=*&sort=date:desc`
    );

    // response.data.data is an array in both shapes
    const allPostsData = (response.data?.data || [])
      .map(formatPostData)
      .filter(Boolean);

    return allPostsData;
  } catch (error) {
    console.error("Fout bij het ophalen van gesorteerde posts:", error.message);
    return [];
  }
}

export async function getPostData(slug) {
  try {
    const response = await axios.get(
      `${STRAPI_INTERNAL_URL}/api/blog-posts?filters[slug][$eq]=${encodeURIComponent(
        slug
      )}&populate=*`
    );

    // Debug: laat zien wat Strapi terugstuurt (verwijder later)
    console.log(
      "getPostData response:",
      JSON.stringify(response.data, null, 2)
    );

    // Pak het eerste resultaat, maar als er meerdere items zijn, probeer exact te matchen op slug
    const items = response.data?.data || [];
    let postData = items[0] ?? null;

    if (items.length > 1) {
      const found = items.find((p) => {
        const source = p.attributes ? p.attributes : p;
        // source.slug voor geneste vorm, p.slug voor platte vorm
        return (
          (source.slug && source.slug === slug) || (p.slug && p.slug === slug)
        );
      });
      if (found) postData = found;
    }

    if (!postData) return null;

    const formattedPost = formatPostData(postData);

    const processedContent = await remark()
      .use(html)
      .process(formattedPost.content || "");
    const contentHtml = processedContent.toString();

    return {
      ...formattedPost,
      contentHtml,
    };
  } catch (error) {
    console.error(`Fout bij het ophalen post "${slug}":`, error.message);
    return null;
  }
}
