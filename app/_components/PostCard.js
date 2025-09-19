// app/_components/PostCard.js

import { ArrowUpRight, TextSearch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DateFormatter from "./DateFormatter";

function PostCard({ post }) {
  // Functie om tekst af te kappen blijft hetzelfde
  const truncateExcerpt = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const shortExcerpt = truncateExcerpt(post.excerpt, 17);

  return (
    // Pas de className hier aan om Flexbox te gebruiken
    <Link href={`/nieuws/${post.slug}`} className="flex flex-col group">
      {/* Sectie 1: De afbeelding */}
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={post.coverImage}
          width={800}
          height={800}
          alt={post.title}
          className="object-cover object-top transition-transform duration-300 rounded-2xl h-57 group-hover:scale-105"
        />
        <p className="absolute px-2 text-white border border-gray-200 rounded-full bottom-2 left-2 backdrop-blur-md bg-black/20">
          {post.category}
        </p>
      </div>

      {/* Sectie 2: De tekstinhoud die kan groeien */}
      <div className="flex-grow">
        {" "}
        {/* Deze div vult de resterende ruimte */}
        <div className="flex items-start justify-between pr-4 mt-2">
          <div>
            <p className="mt-2 text-xl font-medium group-hover:text-[#1b7ced] transition-colors duration-300">
              {post.title}
            </p>
          </div>
          {/* Voorkomt dat het icoon krimpt */}
        </div>
        <p className="mt-2 text-gray-600">{shortExcerpt}</p>
      </div>

      {/* Sectie 3: De datumsectie (blijft altijd onderaan) */}
      <div className="flex items-center gap-4 mt-3">
        <div className="flex items-center justify-between w-full pr-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 border border-gray-700 rounded-full">
              <TextSearch className="text-gray-700 w-7 h-5.5" />
            </div>
            <p className="text-gray-700">
              <DateFormatter dateString={post.date} />
            </p>
          </div>
          <ArrowUpRight className="flex-shrink-0" />
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
