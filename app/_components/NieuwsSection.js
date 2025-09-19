"use client";

import Link from "next/link";
import PostCard from "./PostCard";
import { useState } from "react";

function NieuwsSection({ posts }) {
  const categories = [
    "Alle",
    "Verkeer",
    "Wonen",
    "Recht & Zekerheid",
    "Vrije Tijd",
  ];
  const [activeFilter, setActiveFilter] = useState("Alle");

  const POSTS_PER_PAGE = 9;
  const POSTS_TO_LOAD = 3;
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  // Zorg ervoor dat 'posts' een array is voordat je slice gebruikt
  const validPosts = Array.isArray(posts) ? posts : [];

  const filteredPosts = validPosts.slice(1).filter((post) => {
    if (activeFilter === "Alle") {
      return true;
    }
    return post.category === activeFilter;
  });

  const postsToShow = filteredPosts.slice(0, visibleCount);

  const loadMorePosts = () => {
    setVisibleCount((prevCount) => prevCount + POSTS_TO_LOAD);
  };

  return (
    <div className="px-4 py-12 mx-auto sm:py-16 max-w-7xl">
      {/* --- CHANGE: Filter container is now horizontally scrollable on mobile --- */}
      <div className="w-full border-b border-gray-200">
        {/* 'no-scrollbar' is a utility class you can add to hide the scrollbar visually */}
        <div className="flex space-x-1 overflow-x-auto sm:space-x-2 whitespace-nowrap no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              // --- CHANGE: Responsive padding and adjusted border for cleaner look ---
              className={`px-3 sm:px-4 py-3 transition-colors duration-300 border-b-2 ${
                activeFilter === category
                  ? "border-[#09182b] text-black font-medium"
                  : "border-transparent text-gray-500 hover:text-black hover:border-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* --- CHANGE: Grid is now responsive --- */}
      {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
      <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {postsToShow.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {visibleCount < filteredPosts.length && (
        // --- CHANGE: Responsive gap for the "load more" section ---
        <div className="flex items-center gap-4 sm:gap-10 mt-15">
          <div className="border-b border-[#1b7ced] flex-grow"></div>
          <button
            onClick={loadMorePosts}
            className="text-[#1b7ced] rounded-full py-1.5 px-10 border border-[#1b7ced] whitespace-nowrap cursor-pointer shadow-md-custom -translate-y-1 hover:translate-y-0 hover:shadow-none transition-all duration-300"
          >
            Lees meer
          </button>
          <div className="border-b border-[#1b7ced] flex-grow"></div>
        </div>
      )}
    </div>
  );
}

export default NieuwsSection;
