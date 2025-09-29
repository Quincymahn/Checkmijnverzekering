function page() {
  return (
    <div className="bg-gray-50">
      <div className="pt-40 w-full pb-10 bg-[#09182b]">
        <h1 className="px-4 mx-auto text-3xl font-medium text-white max-w-7xl">
          Vergelijkingskaart Hypotheek
        </h1>
      </div>
      <div className="px-4 py-10 mx-auto space-y-6 text-gray-700 max-w-7xl bg-gray-50">
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <p className="mb-4 text-lg">
            Op deze vergelijkingskaart staat informatie over onze financiële
            dienstverlening. Als je meerdere vergelijkingskaarten verzamelt, kun
            je financiële dienstverleners met elkaar vergelijken. Door
            oriëntatiegesprekken te voeren met verschillende financiële
            dienstverleners, kun je bepalen welke het beste bij je past.
          </p>

          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="mb-3 text-xl font-semibold text-black">
              Qonsult B.V.
            </h2>
            <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
              <div>
                <p>Bijlestaal 48L</p>
                <p>1721 PW Broek op Langedijk</p>
                <p>www.qonsult.nl</p>
              </div>
              <div>
                <p>📞 085 401 5280</p>
                <p>📧 info@qonsult.nl</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <p className="mb-6 text-3xl font-medium text-black">
            Wat kan deze financiële dienstverlener voor je doen?
          </p>

          <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-blue-50">
              <h3 className="mb-2 text-lg font-semibold text-black">
                Hypotheek
              </h3>
            </div>
            <div className="p-4 rounded-lg bg-green-50">
              <h3 className="mb-2 text-lg font-semibold text-black">
                Verzekeringen bij de hypotheek
              </h3>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-4 pl-4 border-l-4 border-green-500 rounded-r-lg bg-green-50">
              <h4 className="mb-2 text-lg font-semibold text-black">
                ✅ Advies geven én contract regelen
              </h4>
              <p className="mb-3">
                We kijken naar jouw persoonlijke situatie. Daarna adviseren we
                welke hypotheek/verzekering geschikt is. Ook zorgen we ervoor
                dat je het contract kunt afsluiten.
              </p>
              <p className="text-sm text-green-700">
                Deze financiële dienstverlener levert de dienst &apos;advies
                geven en contract regelen&apos; voor hypotheken.
              </p>
              <p className="text-sm text-green-700">
                Deze financiële dienstverlener levert de dienst &apos;advies
                geven en contract regelen&apos; voor verzekeringen bij de
                hypotheek.
              </p>
            </div>

            <div className="p-4 pl-4 border-l-4 border-red-500 rounded-r-lg bg-red-50">
              <h4 className="mb-2 text-lg font-semibold text-black">
                ❌ Alleen contract regelen
              </h4>
              <p className="mb-3">
                Jij kiest zelf een hypotheek/verzekering. Wij zorgen ervoor dat
                je het contract kunt afsluiten.
              </p>
              <p className="text-sm text-red-700">
                Deze financiële dienstverlener levert niet de dienst
                &apos;alleen contract regelen&apos; voor hypotheken.
              </p>
              <p className="text-sm text-red-700">
                Deze financiële dienstverlener levert niet de dienst
                &apos;alleen contract regelen&apos; voor verzekeringen bij de
                hypotheek.
              </p>
            </div>

            <div className="p-4 pl-4 border-l-4 border-red-500 rounded-r-lg bg-red-50">
              <h4 className="mb-2 text-lg font-semibold text-black">
                ❌ Alleen advies geven
              </h4>
              <p className="mb-3">
                We kijken naar jouw persoonlijke situatie. Daarna adviseren we
                welke hypotheek/verzekering geschikt is.
              </p>
              <p className="text-sm text-red-700">
                Deze financiële dienstverlener levert niet de dienst
                &apos;alleen advies geven&apos; voor hypotheken.
              </p>
              <p className="text-sm text-red-700">
                Deze financiële dienstverlener levert niet de dienst
                &apos;alleen advies geven&apos; voor verzekeringen bij de
                hypotheek.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="mb-4 text-2xl font-medium text-black">
            Bij welk soort hypotheken en verzekeringen?
          </h3>
          <p className="mb-4">
            De dienstverlening van deze financiële dienstverlener geldt bij:
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-3 font-semibold text-black">Hypotheekvormen</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-green-600">✓</span>{" "}
                  Annuïteitenhypotheek
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-600">✓</span> Lineaire
                  hypotheek
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-600">✓</span> Spaarhypotheek
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-600">✓</span>{" "}
                  Beleggingshypotheek
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-600">✓</span> Aflossingsvrije
                  hypotheek
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-600">✓</span> Levenhypotheek
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-green-600">✓</span>{" "}
                  Krediethypotheek
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 font-semibold text-black">Verzekeringen</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="mr-2 text-green-600">✓</span>
                  <span>
                    Overlijdensrisicoverzekering<sup>1</sup>
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2 text-red-600">✗</span>
                  <span>
                    Betalingsbeschermer<sup>2</sup>
                  </span>
                </li>
              </ul>
              <p className="p-3 mt-4 text-sm text-gray-600 bg-gray-100 rounded">
                Op deze vergelijkingskaart staan alleen verzekeringen naast je
                hypotheek. De financiële dienstverlener kan ook nog andere
                verzekeringen bieden. Vraag daarnaar in het gesprek.
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-2 text-xs text-gray-600">
            <p>
              <sup>1</sup> Als je een hypotheek afsluit kan je ook een
              overlijdensrisicoverzekering afsluiten. Bij een
              overlijdensrisicoverzekering krijgen nabestaanden een bedrag als
              jij overlijdt. Met dit bedrag kunnen ze bijvoorbeeld (een deel
              van) de hypotheek aflossen.
            </p>
            <p>
              <sup>2</sup> Als je een hypotheek afsluit, kun je ook een
              betalingsbeschermer afsluiten. Bij een betalingsbeschermer (ook
              woonlastenverzekering genoemd) krijg je bijvoorbeeld een uitkering
              voor je woonlasten als je arbeidsongeschikt of werkloos wordt.
            </p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="mb-4 text-2xl font-medium text-black">
            Hoe kun je advies krijgen bij deze financiële dienstverlener?
          </h3>
          <p className="mb-4">
            Je kunt op verschillende manieren advies krijgen. De donkerblauwe
            iconen geven aan wat er bij deze financiële dienstverlener mogelijk
            is. Een combinatie is soms ook mogelijk. De manier van advies geven
            kan invloed hebben op de kosten. Vraag de financiële dienstverlener
            naar de verschillen in kosten.
          </p>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            <div className="p-4 text-center bg-gray-100 rounded-lg opacity-50">
              <div className="mb-2 text-2xl">🏢</div>
              <p className="text-sm">Bij ons op kantoor</p>
              <p className="text-xs text-red-600">Niet beschikbaar</p>
            </div>
            <div className="p-4 text-center bg-gray-100 rounded-lg opacity-50">
              <div className="mb-2 text-2xl">🏠</div>
              <p className="text-sm">Bij jou thuis</p>
              <p className="text-xs text-red-600">Niet beschikbaar</p>
            </div>
            <div className="p-4 text-center bg-blue-100 rounded-lg">
              <div className="mb-2 text-2xl">📹</div>
              <p className="text-sm">Videogesprek</p>
              <p className="text-xs text-green-600">Beschikbaar</p>
            </div>
            <div className="p-4 text-center bg-blue-100 rounded-lg">
              <div className="mb-2 text-2xl">📞</div>
              <p className="text-sm">Telefoongesprek</p>
              <p className="text-xs text-green-600">Beschikbaar</p>
            </div>
            <div className="p-4 text-center bg-blue-100 rounded-lg">
              <div className="mb-2 text-2xl">💻</div>
              <p className="text-sm">Online</p>
              <p className="text-xs text-green-600">Beschikbaar</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="mb-4 text-2xl font-medium text-black">
            Geeft deze financiële dienstverlener een onafhankelijk advies?
          </h3>
          <p className="mb-6">
            Onafhankelijk advies over producten moet aan twee voorwaarden
            voldoen.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-green-50">
              <h4 className="mb-3 text-lg font-semibold text-black">
                Hypotheek
              </h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="mt-1 mr-2 text-green-600">✓</span>
                  <div>
                    <p className="font-medium">
                      Voorwaarde 1: genoeg hypotheken vergelijken
                    </p>
                    <p className="text-sm text-green-700">
                      Deze financiële dienstverlener voldoet aan deze
                      voorwaarde. Hij vergelijkt genoeg hypotheken.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mt-1 mr-2 text-green-600">✓</span>
                  <div>
                    <p className="font-medium">
                      Voorwaarde 2: niet uitsluitend hypotheken van verbonden
                      aanbieders
                    </p>
                    <p className="text-sm text-green-700">
                      Deze financiële dienstverlener voldoet aan deze
                      voorwaarde.
                    </p>
                  </div>
                </div>
                <p className="p-2 font-semibold text-center text-green-600 bg-white rounded">
                  ✅ Ja, onafhankelijk
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-green-50">
              <h4 className="mb-3 text-lg font-semibold text-black">
                Verzekeringen bij de hypotheek
              </h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="mt-1 mr-2 text-green-600">✓</span>
                  <div>
                    <p className="font-medium">
                      Voorwaarde 1: genoeg verzekeringen vergelijken
                    </p>
                    <p className="text-sm text-green-700">
                      Deze financiële dienstverlener voldoet aan deze
                      voorwaarde. Hij vergelijkt genoeg verzekeringen.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="mt-1 mr-2 text-green-600">✓</span>
                  <div>
                    <p className="font-medium">
                      Voorwaarde 2: niet uitsluitend verzekeringen van verbonden
                      aanbieders
                    </p>
                    <p className="text-sm text-green-700">
                      Deze financiële dienstverlener voldoet aan deze
                      voorwaarde.
                    </p>
                  </div>
                </div>
                <p className="p-2 font-semibold text-center text-green-600 bg-white rounded">
                  ✅ Ja, onafhankelijk
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="mb-4 text-2xl font-medium text-black">
            Waarom moet je deze financiële dienstverlener kiezen?
          </h3>
          <p className="p-4 rounded-lg bg-blue-50">
            Kies voor Qonsult voor deskundig, op maat gemaakt hypotheekadvies.
            We bieden transparantie, persoonlijke begeleiding en oplossingen
            afgestemd op uw financiële situatie en wensen. Met onze ervaring
            zorgen we voor een soepel aanvraagproces en optimale
            financieringsmogelijkheden.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="mb-4 text-2xl font-medium text-black">
            Wat betaal je aan deze financiële dienstverlener?
          </h3>
          <p className="mb-6">
            Je vindt hier alleen gemiddelde prijzen. De gemiddelde prijs is de
            prijs die klanten betalen in een vergelijkbare situatie. Hoe
            complexer je financiële situatie, hoe meer je meestal betaalt. Je
            financiële dienstverlener informeert je over de precieze prijs. Laat
            afspraken ook altijd vastleggen, zodat je weet wat de financiële
            dienstverlener voor je doet en hoeveel je daarvoor betaalt.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-collapse border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 text-left border border-gray-300"></th>
                  <th
                    className="p-3 text-center border border-gray-300"
                    colSpan="2"
                  >
                    In loondienst
                  </th>
                  <th
                    className="p-3 text-center border border-gray-300"
                    colSpan="2"
                  >
                    Zelfstandig ondernemer
                  </th>
                </tr>
                <tr className="bg-gray-50">
                  <th className="p-3 text-left border border-gray-300"></th>
                  <th className="p-3 text-center border border-gray-300">
                    Niet eerder woning gekocht
                  </th>
                  <th className="p-3 text-center border border-gray-300">
                    Wel eerder woning gekocht
                  </th>
                  <th className="p-3 text-center border border-gray-300">
                    Niet eerder woning gekocht
                  </th>
                  <th className="p-3 text-center border border-gray-300">
                    Wel eerder woning gekocht
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 font-medium border border-gray-300">
                    Advies geven en contract regelen
                  </td>
                  <td className="p-3 text-center border border-gray-300">
                    € 2.500
                  </td>
                  <td className="p-3 text-center border border-gray-300">
                    € 2.950
                  </td>
                  <td className="p-3 text-center border border-gray-300">
                    € 2.950
                  </td>
                  <td className="p-3 text-center border border-gray-300">
                    € 3.500
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 font-medium text-gray-400 border border-gray-300">
                    Alleen contract regelen
                  </td>
                  <td className="p-3 text-center text-gray-400 border border-gray-300">
                    -
                  </td>
                  <td className="p-3 text-center text-gray-400 border border-gray-300">
                    -
                  </td>
                  <td className="p-3 text-center text-gray-400 border border-gray-300">
                    -
                  </td>
                  <td className="p-3 text-center text-gray-400 border border-gray-300">
                    -
                  </td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-gray-400 border border-gray-300">
                    Alleen advies geven
                  </td>
                  <td className="p-3 text-center text-gray-400 border border-gray-300">
                    -
                  </td>
                  <td className="p-3 text-center text-gray-400 border border-gray-300">
                    -
                  </td>
                  <td className="p-3 text-center text-gray-400 border border-gray-300">
                    -
                  </td>
                  <td className="p-3 text-center text-gray-400 border border-gray-300">
                    -
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="mb-4 text-2xl font-medium text-black">
            Wat kan deze financiële dienstverlener in de toekomst voor je
            betekenen?
          </h3>
          <div className="space-y-4">
            <p>
              Ga bij veranderingen in je persoonlijke situatie altijd terug naar
              een financiële dienstverlener. Door deze veranderingen past de
              hypotheek/verzekering misschien niet meer bij je situatie.
              Bijvoorbeeld omdat je gezinssituatie of inkomen verandert. Dan
              betaal je misschien te veel of loop je meer risico dan je wilt.
            </p>
            <p>
              Voor een oriëntatiegesprek kun je altijd bij een financiële
              dienstverlener terecht. Is er een belangrijke verandering in je
              hypotheek en/of verzekering? Dan neemt de financiële
              dienstverlener of aanbieder contact met je op, zonder dat je
              daarvoor betaalt.
            </p>

            <div className="p-4 border-l-4 border-red-500 rounded-lg bg-red-50">
              <h4 className="mb-2 font-semibold text-black">
                Onderhoudsdiensten
              </h4>
              <p className="mb-2 text-red-700">
                ❌ Nee, deze financiële dienstverlener biedt geen
                onderhoudsdiensten aan.
              </p>
              <p className="text-sm text-gray-600">
                <sup>3</sup> Met onderhoudsdiensten kan een financiële
                dienstverlener samen met jou in de gaten houden of er
                veranderingen zijn waardoor een aanpassing in je hypotheek of
                verzekering nodig is.
              </p>
            </div>

            <p className="text-sm text-gray-600">
              Kijk voor meer informatie over andere dienstverlening in de
              toekomst op de website van jouw financiële dienstverlener.
            </p>
          </div>
        </div>

        <div className="p-4 text-sm text-center text-gray-500 bg-white rounded-lg">
          <p>
            Weten waar je op moet letten bij je keuze voor een financiële
            dienstverlener? Kijk op{" "}
            <a
              href="https://www.wijzeringeldzaken.nl/vergelijkingskaart"
              className="text-blue-600 underline"
            >
              www.wijzeringeldzaken.nl/vergelijkingskaart
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
