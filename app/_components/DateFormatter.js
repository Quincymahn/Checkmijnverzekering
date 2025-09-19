// app/_components/DateFormatter.js

import { parseISO, format } from "date-fns";
import { nl } from "date-fns/locale";

function DateFormatter({ dateString }) {
  // --- DEBUGGING STAP ---
  // Log de waarde die binnenkomt naar de terminal (server-side) en browser console (client-side)
  console.log("DateFormatter ontvangen:", dateString);

  // --- GUARD CLAUSE ---
  // Als er geen dateString is, of als het geen geldige string is, toon niets.
  if (!dateString || typeof dateString !== "string") {
    return null; // Voorkomt de crash
  }

  try {
    const date = parseISO(dateString);
    const formattedDate = format(date, "dd LLLL yyyy", { locale: nl });
    return <>{formattedDate}</>;
  } catch (error) {
    // Als er ondanks alles toch een fout optreedt, log het en toon de originele string
    console.error("Fout bij formatteren datum:", dateString, error);
    return <>{dateString}</>; // Toon de 'slechte' data zodat we het kunnen zien
  }
}

export default DateFormatter;
