import NieuwsMain from "../_components/NieuwsMain";
import NieuwsSection from "../_components/NieuwsSection";
import { getSortedPostsData } from "../_lib/posts"; // We gebruiken nu onze nieuwe functie

// Dit is nu een async server component
export default async function NieuwsPage() {
  // Haal data direct op met onze nieuwe functie
  const allPostsData = await getSortedPostsData();

  // Voeg een check toe voor het geval er geen posts zijn
  if (!allPostsData || allPostsData.length === 0) {
    return <div>Geen nieuwsberichten gevonden.</div>;
  }

  return (
    <div>
      <NieuwsMain latestPost={allPostsData[0]} />
      <NieuwsSection posts={allPostsData} />
    </div>
  );
}
