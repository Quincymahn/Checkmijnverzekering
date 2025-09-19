import Image from "next/image";
import Link from "next/link";
import DateFormatter from "./DateFormatter";

function NewsSection({ posts }) {
  const latestPost = posts[0];
  const secondLatestPost = posts[1];

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  if (!latestPost || !secondLatestPost) {
    return null;
  }

  return (
    <div className="py-30">
      <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-7">
        <div className="flex flex-col justify-between col-span-1 xl:col-span-1 md:col-span-2">
          <p className="text-3xl font-medium">
            Uw Financiële Zekerheid <br /> Ons Advies
          </p>
          <p className="text-gray-600">
            Of u nu starter, huiseigenaar of ondernemer bent, uw financiële
            situatie is uniek. Wij bieden persoonlijk en onafhankelijk advies om
            ervoor te zorgen dat uw verzekeringen naadloos aansluiten op uw
            leven.
          </p>
          <ul className="my-8 space-y-2 list-disc">
            <li className="ml-5 text-[#1b7ced]">
              <span className="text-gray-600">
                Duidelijkheid over uw polissen
              </span>
            </li>
            <li className="ml-5 text-[#1b7ced]">
              <span className="text-gray-600">
                Besparen zonder in te leveren op dekking
              </span>
            </li>
            <li className="ml-5 text-[#1b7ced]">
              <span className="text-gray-600">Zekerheid voor uw toekomst</span>
            </li>
          </ul>
          <Link
            href="#"
            className="group relative inline-block text-lg self-start font-medium text-center
    bg-[#00af76] text-white 
    py-1 px-8 rounded-full
    shadow-md-custom
    overflow-hidden
    transition-all duration-300"
          >
            <span className="absolute top-0 w-full h-full transition-transform duration-500 ease-in-out transform -skew-x-12 -left-[105%] bg-gradient-to-r from-transparent to-white/30 group-hover:translate-x-[110%]"></span>

            <span className="relative">Start vergelijken</span>
          </Link>
        </div>

        <Link
          href={`/nieuws/${latestPost.slug}`}
          className="flex flex-col rounded-2xl shadow-md-custom group"
        >
          {/* Afbeelding sectie blijft ongewijzigd */}
          <div className="relative overflow-hidden rounded-t-2xl">
            <Image
              src={latestPost.coverImage}
              width={400}
              height={250}
              alt={latestPost.title}
              className="object-cover w-full transition-transform duration-300 h-52 group-hover:scale-105"
            />
            <p className="absolute px-2 text-white border border-gray-200 rounded-full bottom-2 left-2 backdrop-blur-md bg-black/20">
              {latestPost.category}
            </p>
          </div>

          {/* De inhoudscontainer, nu met flexbox om de datum onderaan te pinnen */}
          <div className="flex flex-col flex-grow p-4 space-y-3">
            {/* Titel container met een minimale hoogte */}
            <div className="min-h-[5.25rem]">
              {" "}
              {/* <-- DE KERN VAN DE OPLOSSING */}
              <span className="text-lg font-medium text-gray-800 group-hover:text-[#1b7ced] transition-colors">
                {latestPost.title}
              </span>
            </div>

            {/* Excerpt container die de resterende ruimte vult */}
            <div className="flex-grow">
              <span className="text-gray-600">
                {truncateText(latestPost.excerpt, 15)}{" "}
                {/* Limiet iets verhoogd voor meer context */}
              </span>
            </div>
          </div>
        </Link>

        <Link
          href={`/nieuws/${secondLatestPost.slug}`}
          className="flex flex-col rounded-2xl shadow-md-custom group"
        >
          {/* Afbeelding sectie blijft ongewijzigd */}
          <div className="relative overflow-hidden rounded-t-2xl">
            <Image
              src={secondLatestPost.coverImage}
              width={400}
              height={250}
              alt={secondLatestPost.title}
              className="object-cover w-full transition-transform duration-300 h-52 group-hover:scale-105"
            />
            <p className="absolute px-2 text-white border border-gray-200 rounded-full bottom-2 left-2 backdrop-blur-md bg-black/20">
              {secondLatestPost.category}
            </p>
          </div>

          {/* De inhoudscontainer, nu met flexbox om de datum onderaan te pinnen */}
          <div className="flex flex-col flex-grow p-4 space-y-3">
            {/* Titel container met een minimale hoogte */}
            <div className="min-h-[5.25rem]">
              {" "}
              {/* <-- DE KERN VAN DE OPLOSSING */}
              <span className="text-lg font-medium text-gray-800 group-hover:text-[#1b7ced] transition-colors">
                {secondLatestPost.title}
              </span>
            </div>

            {/* Excerpt container die de resterende ruimte vult */}
            <div className="flex-grow">
              <span className="text-gray-600">
                {truncateText(secondLatestPost.excerpt, 15)}{" "}
                {/* Limiet iets verhoogd voor meer context */}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NewsSection;
