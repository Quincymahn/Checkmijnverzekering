import { ArrowDownRight, CalendarClock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DateFormatter from "./DateFormatter";

function NieuwsMain({ latestPost }) {
  if (!latestPost) return null;

  return (
    <div className="md:min-h-screen sm:h-[85vh] h-[75vh] p-4">
      {/* Hero: responsieve hoogte zodat mobiel niet wordt overspoeld */}
      <div className="w-full">
        <Link
          href={`/nieuws/${latestPost.slug}`}
          className="relative block w-full overflow-hidden group rounded-2xl"
          aria-label={`Lees artikel: ${latestPost.title}`}
        >
          {/* Responsive height: smaller on mobile, larger on desktop */}
          <div className="h-[55vh] sm:h-[65vh] md:h-[75vh] w-full relative overflow-hidden rounded-2xl">
            <Image
              src={latestPost.coverImage}
              width={2000}
              height={2000}
              alt={latestPost.title}
              className="object-cover w-full h-full transition-transform duration-700 ease-in-out transform -translate-y-1 group-hover:scale-105 sm:-translate-y-2 md:-translate-y-6"
              priority
            />

            {/* subtle overlay so text is readable */}
            <div className="absolute inset-0 pointer-events-none bg-black/20 rounded-2xl" />

            {/* BOTTOM PANEL: grid becomes 1 column on small screens */}
            <div className="absolute bottom-0 grid w-full grid-cols-1 gap-4 px-4 py-4 lg:grid-cols-2 sm:px-8 md:px-20 sm:py-5 backdrop-blur-md bg-gray-800/40 rounded-bl-2xl rounded-br-2xl">
              {/* LEFT: titel + excerpt + meta */}
              <div className="flex flex-col gap-3">
                <p className="text-lg font-medium leading-tight text-white sm:text-2xl md:text-3xl">
                  {latestPost.title}
                </p>

                {/* excerpt: max height + overflow so het niet uitschiet */}
                <p className="overflow-hidden text-sm text-gray-300 sm:text-base max-h-20 sm:max-h-24">
                  {latestPost.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex items-center justify-center border border-white rounded-full w-9 h-9 sm:w-11 sm:h-11">
                      <CalendarClock className="w-4 h-4 text-white sm:w-5 sm:h-5" />
                    </div>
                    <div className="text-xs text-gray-300 sm:text-sm">
                      <DateFormatter dateString={latestPost.date} />
                    </div>
                  </div>

                  <div className="flex flex-row-reverse justify-between gap-3 lg:hidden sm:items-end">
                    <div className="flex items-center gap-3 sm:justify-end">
                      {/* arrow: kleiner op mobiel */}
                      <ArrowDownRight className="w-6 h-6 text-white rotate-180 sm:w-9 sm:h-9" />
                    </div>

                    <div className="flex justify-start mt-2 sm:mt-0 sm:justify-end">
                      <span className="inline-block px-3 py-1 text-xs text-white border border-white rounded-full sm:text-sm">
                        {latestPost.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: arrow + category (op mobiel onder de left, op desktop rechts uitgelijnd) */}
              <div className="flex-col justify-between hidden lg:flex sm:items-end">
                <div className="flex items-center gap-3 sm:justify-end">
                  {/* arrow: kleiner op mobiel */}
                  <ArrowDownRight className="w-6 h-6 text-white rotate-180 sm:w-9 sm:h-9" />
                </div>

                <div className="flex justify-start mt-2 sm:mt-0 sm:justify-end">
                  <span className="inline-block px-3 py-1 text-xs text-white border border-white rounded-full sm:text-sm">
                    {latestPost.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Intro heading below hero — responsief width */}
      <div className="mx-auto max-w-7xl">
        <h1 className="mt-8 sm:mt-12 font-medium text-xl sm:text-2xl md:text-3xl w-full sm:w-[60%]">
          Blijf up-to-date met het laatste nieuws van Checkmijnverzekering
        </h1>
      </div>
    </div>
  );
}

export default NieuwsMain;
