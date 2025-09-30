import NieuwsMain from "../_components/NieuwsMain";
import NieuwsSection from "../_components/NieuwsSection";
import { getSortedPostsData } from "../_lib/posts";

// BELANGRIJK: Force dynamic rendering zodat data bij elke request wordt opgehaald
export const dynamic = "force-dynamic";

// Of gebruik revalidatie voor betere performance (cached voor X seconden):
// export const revalidate = 60; // Herlaad elke 60 seconden

// Dit is nu een async server component
export default async function NieuwsPage() {
  // Haal data direct op met onze nieuwe functie
  const allPostsData = await getSortedPostsData();

  // Voeg een check toe voor het geval er geen posts zijn
  if (!allPostsData || allPostsData.length === 0) {
    return (
      <div className="container px-4 py-8 mx-auto">
        <p className="text-center text-gray-600">
          Geen nieuwsberichten gevonden.
        </p>
      </div>
    );
  }

  return (
    <div>
      <NieuwsMain latestPost={allPostsData[0]} />
      <NieuwsSection posts={allPostsData} />
    </div>
  );
}
