function page() {
  return (
    <div className="bg-gray-50">
      <div className="pt-40 w-full pb-10 bg-[#09182b]">
        <h1 className="px-4 mx-auto text-3xl font-medium text-white max-w-7xl">
          Klachtenregeling
        </h1>
      </div>
      <div className="px-4 py-10 mx-auto space-y-6 text-gray-700 max-w-7xl bg-gray-50">
        <div className="p-6 bg-white rounded-lg shadow-sm">
          <p className="text-lg">
            Bij Checkmijnverzekering.nl (Qonsult B.V.) vinden wij het belangrijk
            dat u tevreden bent over onze dienstverlening. Toch kan het
            voorkomen dat u ergens niet tevreden over bent. Dat vinden wij
            vervelend. Laat ons weten wat uw klacht is, dan zoeken we samen naar
            een passende oplossing.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="mb-4 text-2xl font-medium text-black">
            Klacht indienen
          </h2>
          <p className="mb-4">
            Heeft u een klacht? Dan kunt u deze per e-mail doorgeven via
            info@qonsult.nl. Wij verzoeken u vriendelijk om in uw e-mail de
            volgende gegevens te vermelden:
          </p>
          <ul className="space-y-2 list-disc list-inside">
            <li>Uw naam, adres, e-mailadres en telefoonnummer</li>
            <li>Een duidelijke omschrijving van uw klacht</li>
            <li>
              Een inschatting van de eventuele schade (bijvoorbeeld door een
              nota als bijlage mee te sturen)
            </li>
            <li>
              Uw voorstel hoe wij de klacht naar tevredenheid kunnen oplossen
            </li>
          </ul>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="mb-4 text-2xl font-medium text-black">
            Klachtverwerking
          </h2>
          <p className="mb-4">
            Binnen 10 werkdagen ontvangt u van ons een bevestiging van uw
            klacht. Hierbij controleren we of we uw klacht goed begrijpen.
            Vervolgens onderzoeken wij uw klacht zorgvuldig en betrekken hierbij
            – indien van toepassing – uw adviseur. Als blijkt dat er fouten zijn
            gemaakt, bekijken wij samen met u hoe we dit kunnen herstellen en
            hoe we herhaling kunnen voorkomen.
          </p>
          <p>
            Binnen een redelijke termijn (maximaal 3 weken) ontvangt u ons
            definitieve antwoord met een oplossing.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="mb-4 text-2xl font-medium text-black">
            Tevreden oplossing
          </h2>
          <p>
            Bent u tevreden met de oplossing die wij hebben geboden? Dan
            beschouwen wij de klacht als afgehandeld. Wij waarderen uw feedback,
            omdat dit ons helpt onze dienstverlening te verbeteren.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="mb-4 text-2xl font-medium text-black">
            Herzieningsverzoek
          </h2>
          <p className="mb-4">
            Bent u niet tevreden met onze reactie? Dan kunt u binnen 4 weken na
            de dagtekening van onze reactie een herzieningsverzoek indienen. Ook
            dit doet u per e-mail via info@qonsult.nl. Wij zullen uw
            herzieningsverzoek opnieuw beoordelen.
          </p>
          <div className="p-4 border-l-4 border-orange-500 rounded-r-lg bg-orange-50">
            <p className="text-sm text-orange-800">
              <strong>Let op:</strong> uw herzieningsverzoek moet binnen 4 weken
              na de dagtekening van onze reactie zijn ontvangen. Verzoeken die
              later worden ingediend, nemen wij niet meer inhoudelijk in
              behandeling.
            </p>
          </div>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-sm">
          <h2 className="mb-4 text-2xl font-medium text-black">
            Klachteninstituut Financiële Dienstverlening (Kifid)
          </h2>
          <p className="mb-4">
            Wanneer u geen reactie van ons ontvangt binnen 8 weken na het
            indienen van uw klacht, of wanneer u het niet eens bent met onze
            definitieve reactie, kunt u uw klacht indienen bij het
            Klachteninstituut Financiële Dienstverlening (Kifid).
          </p>

          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-blue-50">
              <h3 className="mb-2 text-lg font-semibold text-black">
                U moet hierbij vermelden:
              </h3>
              <ul className="space-y-2 text-blue-800 list-disc list-inside">
                <li>de datum waarop u uw klacht bij Qonsult heeft ingediend</li>
                <li>
                  dat Qonsult niet binnen 8 weken heeft gereageerd, of dat u het
                  niet eens bent met onze definitieve reactie
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-green-50">
              <h3 className="mb-2 text-lg font-semibold text-black">
                De klacht moet:
              </h3>
              <ul className="space-y-2 text-green-800 list-disc list-inside">
                <li>
                  binnen 1 jaar na uw klacht bij Qonsult zijn ingediend bij
                  Kifid, of
                </li>
                <li>binnen 3 maanden na onze definitieve reactie.</li>
              </ul>
            </div>
          </div>

          <p className="mt-4">
            Meer informatie en de procedure vindt u op de website van Kifid:
            <a
              href="https://www.kifid.nl"
              className="ml-1 text-blue-600 underline"
            >
              www.kifid.nl
            </a>
            . De Geschillencommissie van het Kifid beoordeelt vervolgens of uw
            klacht in behandeling kan worden genomen, en zo ja, op welke wijze.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
