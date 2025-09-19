import Link from "next/link";
import PostFeaturedSection from "./PostFeaturedSection";

function PostText({ contentHtml, currentPost, allPosts }) {
  return (
    // --- CHANGE: The grid is now responsive ---
    // Mobile: Stacks into 1 column with a smaller vertical gap.
    // Desktop (lg): Switches to a 7-column layout with a larger horizontal gap.
    <div className="grid grid-cols-1 gap-12 px-4 py-16 mx-auto max-w-7xl lg:grid-cols-7 lg:gap-20 sm:px-6 lg:px-8">
      {/* --- CHANGE: Column span is now prefixed with lg: --- */}
      {/* On mobile, this is a full-width grid item. On lg screens, it takes 5/7 columns. */}
      <div className="lg:col-span-5">
        <article>
          <div
            // The 'prose' classes from Tailwind Typography are already responsive!
            className="prose lg:prose-xl max-w-none" // `max-w-none` ensures it fills its container
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>

        <Link
          href="/contact"
          className="group relative mt-10 inline-block text-lg font-medium
            bg-[#00af76] text-white 
            py-2 px-8 rounded-full // Increased vertical padding slightly for better balance
            shadow-md-custom
            overflow-hidden
            transition-all duration-300
          "
        >
          {/* Shine effect */}
          <span className="absolute top-0 w-full h-full transition-transform duration-500 ease-in-out transform -skew-x-12 -left-[105%] bg-gradient-to-r from-transparent to-white/30 group-hover:translate-x-[110%]"></span>

          {/* Text content */}
          <span className="relative">Plan een gesprek</span>
        </Link>
      </div>

      {/* --- CHANGE: Column span is now prefixed with lg: --- */}
      {/* On mobile, this sidebar stacks below the main content. On lg screens, it takes 2/7 columns. */}
      <div className="lg:col-span-2">
        <PostFeaturedSection currentPost={currentPost} allPosts={allPosts} />
      </div>
    </div>
  );
}

export default PostText;
