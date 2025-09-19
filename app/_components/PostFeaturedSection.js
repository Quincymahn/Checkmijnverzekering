import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function FeaturedPostItem({ post }) {
  return (
    <Link
      className="flex flex-row gap-4 lg:flex-col group"
      href={`/nieuws/${post.slug}`}
    >
      {/* Image Container */}
      <div className="relative flex-shrink-0 overflow-hidden w-30 lg:w-full rounded-xl lg:rounded-2xl">
        <Image
          src={post.coverImage}
          width={600}
          height={600}
          alt={post.title}
          className="object-cover w-full transition-transform duration-300 h-30 lg:h-40 group-hover:scale-105"
        />
        <p className="absolute px-2 py-0.5 text-xs text-white border border-gray-200 rounded-full bottom-2 left-2 backdrop-blur-sm bg-black/20">
          {post.category}
        </p>
      </div>

      <div className="flex items-center justify-between flex-grow gap-5 mt-0 lg:mt-2">
        <p className="group-hover:text-[#1b7ced] transition-colors duration-300 font-medium">
          {post.title}
        </p>
        <ArrowDownRight className="scale-y-[-1] flex-shrink-0 w-8 h-8 hidden lg:block" />
      </div>
    </Link>
  );
}

function PostFeaturedSection({ currentPost, allPosts }) {
  const relatedPosts = allPosts
    .filter((post) => post.category === currentPost.category)
    .filter((post) => post.slug !== currentPost.slug)
    .slice(0, 3);

  return (
    <div className="space-y-8">
      <div className="hidden lg:block">
        <p className="text-2xl font-medium ">Benieuwd naar de mogelijkheden?</p>
        <p className="my-4 text-gray-600">
          Ontdek zelf hoe eenvoudig vergelijken kan zijn. Start vandaag nog met
          Checkmijnverzekering.
        </p>
        <Link
          href="/"
          className="group relative inline-block text-lg font-medium
            bg-[#00af76] text-white 
            py-1 px-8 rounded-full
            shadow-md-custom
            overflow-hidden
            transition-all duration-300
          "
        >
          <span className="absolute top-0 w-full h-full transition-transform duration-500 ease-in-out transform -skew-x-12 -left-[105%] bg-gradient-to-r from-transparent to-white/30 group-hover:translate-x-[110%]"></span>
          <span className="relative">Plan een gesprek</span>
        </Link>
      </div>

      {relatedPosts.length > 0 && (
        <>
          <div className="border-b border-gray-300"></div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:block lg:space-y-8">
            {relatedPosts.map((post) => (
              <FeaturedPostItem key={post.slug} post={post} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default PostFeaturedSection;
