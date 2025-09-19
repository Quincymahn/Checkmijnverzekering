import Image from "next/image";
import DateFormatter from "./DateFormatter";

function PostMain({ post }) {
  return (
    <div className="p-4 h-[60vh] lg:h-[75vh]">
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <Image
          src={post.coverImage}
          width={1300}
          height={1300}
          alt={post.title}
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute top-0 w-full h-full bg-black/20"></div>
        <div className="absolute bottom-0 z-10 flex flex-col justify-center w-full px-5 py-4 space-y-4 rounded-bl-none md:px-20 lg:bottom-30 md:bottom-20 md:bg-white md:w-170 rounded-b-2xl md:rounded-r-2xl backdrop-blur-sm md:backdrop-blur-none bg-gray-300/40 md:top-1/2">
          <h1 className="text-[#1b7ced] md:text-3xl text-xl font-medium">
            {post.title}
          </h1>
          <p className="text-gray-200 md:text-black">
            <DateFormatter dateString={post.date} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostMain;
