import Image from "next/image";
import Link from "next/link";

function NieuwsPostCard({ post }) {
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <Link
      href={`/nieuws/${post.slug}`}
      className="flex flex-col rounded-2xl shadow-md-custom group"
    >
      {/* Afbeelding sectie blijft ongewijzigd */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <Image
          src={post.coverImage}
          width={400}
          height={250}
          alt={post.title}
          className="object-cover w-full transition-transform duration-300 h-52 group-hover:scale-105"
        />
        <p className="absolute px-2 text-white border border-gray-200 rounded-full bottom-2 left-2 backdrop-blur-md bg-black/20">
          {post.category}
        </p>
      </div>

      {/* De inhoudscontainer, nu met flexbox om de datum onderaan te pinnen */}
      <div className="flex flex-col flex-grow p-4 space-y-3">
        {/* Titel container met een minimale hoogte */}
        <div className="min-h-[5.25rem]">
          {" "}
          {/* <-- DE KERN VAN DE OPLOSSING */}
          <span className="text-lg font-medium text-gray-800 group-hover:text-[#1b7ced] transition-colors">
            {post.title}
          </span>
        </div>

        {/* Excerpt container die de resterende ruimte vult */}
        <div className="flex-grow">
          <span className="text-gray-600">
            {truncateText(post.excerpt, 15)}{" "}
            {/* Limiet iets verhoogd voor meer context */}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default NieuwsPostCard;
