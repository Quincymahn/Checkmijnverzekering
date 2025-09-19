import NieuwsPostCard from "./NieuwsPostCard";

function AansprakelijkheidsverzekeringNieuws({ posts }) {
  const woonPosts = posts
    .filter((post) => post.category === "Wonen")
    .slice(0, 3);

  return (
    <div className="px-4 mx-auto max-w-7xl py-30">
      <div className="flex gap-4">
        <p className="text-3xl font-medium">
          Laatste nieuws over woonverzekeringen
        </p>
        <div className="flex gap-2">
          <div className="w-4.5 h-9 rounded-tl-2xl rounded-tr-xl rounded-bl-2xl rounded-br-md bg-[#1b7ced] -translate-y-1 -rotate-8"></div>
          <div className="w-3.5 h-6 rounded-tl-xl rounded-tr-2xl rounded-bl-md rounded-br-2xl bg-[#181818] translate-y-5 rotate-15"></div>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 mt-8 md:grid-cols-3">
        {woonPosts.map((post) => (
          <NieuwsPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

export default AansprakelijkheidsverzekeringNieuws;
