import CtaSection from "./_components/CtaSection";
import FormSection from "./_components/FormSection";
import InsuranceCards from "./_components/InsuranceCards";
import Main from "./_components/Main";
import NewsSection from "./_components/NewsSection";
import TestimonialSection from "./_components/TestimonialSection";
import { getSortedPostsData } from "./_lib/posts";

export default function Home() {
  const allPosts = getSortedPostsData();

  return (
    <div className="w-full overflow-hidden">
      <Main />
      <div className="px-4 mx-auto max-w-7xl">
        <InsuranceCards />
      </div>
      <FormSection />
      <CtaSection />
      <div className="px-4 mx-auto max-w-7xl">
        <NewsSection posts={allPosts} />
        <TestimonialSection />
      </div>
    </div>
  );
}
