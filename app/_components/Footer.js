import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react"; // Importeer iconen voor duidelijkheid

function Footer() {
  return (
    <div className="w-full">
      {/* Blue CTA Section */}
      <div className="bg-[#1b7ced] px-6 md:px-12 lg:px-30 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-20 lg:flex-row lg:items-start">
            {/* Left Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="mx-auto text-3xl font-medium leading-tight text-white md:text-4xl lg:mx-0">
                Klaar om de beste verzekering te vinden die écht bij u past?
              </h2>
              <p className="max-w-2xl mx-auto text-sm text-white lg:mx-0 md:text-base opacity-90">
                Wij staan voor u klaar met onafhankelijk en persoonlijk advies.
                Of u nu vragen heeft over uw huidige polissen of een compleet
                nieuw pakket wilt samenstellen, wij helpen u de juiste keuzes te
                maken. Neem vandaag nog contact op voor een vrijblijvend gesprek
                en ontdek hoe wij u kunnen helpen besparen en beter verzekerd
                kunnen zijn.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <a
                  href="tel:0612345678"
                  className="inline-flex items-center justify-center px-6 py-2 text-white transition-all duration-300 border border-white rounded-xl hover:bg-white hover:text-black"
                >
                  <Phone size={16} className="mr-2" />
                  085 401 5280
                </a>
                <a
                  href="mailto:info@checkmijnverzekering.nl"
                  className="inline-flex items-center justify-center px-6 py-2 text-black transition-all duration-300 bg-white border border-white rounded-xl hover:bg-inherit hover:border hover:border-white hover:text-white"
                >
                  <Mail size={16} className="mr-2" />
                  info@checkmijnverzekering.nl
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-shrink-0">
              <Image
                src="/img/footerlogo.png"
                width={300}
                height={300}
                alt="Checkmijnverzekering Logo Illustratie"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dark Footer Section */}
      <div className="bg-[#181818] px-6 md:px-12 lg:px-30 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center">
                <Image
                  src="/img/hypotheek-offertes-favicon-white.png"
                  width={40} // Iets kleiner logo voor balans
                  height={40}
                  alt="Checkmijnverzekering Logo"
                  className="flex-shrink-0"
                />
                <div className="ml-3">
                  <p className="text-xl font-semibold leading-tight text-white">
                    Check mijn
                    <br />
                    Verzekering
                  </p>
                </div>
              </Link>
              <p className="max-w-xs text-sm leading-relaxed text-gray-400">
                Uw partner in onafhankelijk verzekeringsadvies. Wij maken de
                complexe wereld van verzekeringen helder en begrijpelijk.
              </p>
            </div>

            {/* Verzekeringen */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-white">
                Verzekeringen
              </h3>
              <nav className="flex flex-col space-y-3">
                <Link
                  href="/verzekeringen/wonen"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  Wonen
                </Link>
                <Link
                  href="/verzekeringen/verkeer"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  Verkeer
                </Link>
                <Link
                  href="/verzekeringen/recht-en-zekerheid"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  Recht & Zekerheid
                </Link>
                <Link
                  href="/verzekeringen/vrije-tijd"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  Vrije Tijd
                </Link>
              </nav>
            </div>

            {/* Klantenservice */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-white">
                Klantenservice
              </h3>
              <nav className="flex flex-col space-y-3">
                <Link
                  href="/over-ons"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  Over ons
                </Link>
                <Link
                  href="/verzekeringen"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  Verzekeringen
                </Link>
                <Link
                  href="/nieuws"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  Nieuws & Blog
                </Link>
                <Link
                  href="/plan-een-gesprek"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  Plan een gesprek
                </Link>
              </nav>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-white">
                Checkmijnverzekering
              </h3>
              <nav className="flex flex-col space-y-3">
                <Link
                  href="/disclaimer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  Disclaimer
                </Link>
                <Link
                  href="/klachtenregeling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  Klachtenregeling
                </Link>
                <Link
                  href="/vergelijkingskaart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  Vergelijkingskaart
                </Link>
                <Link
                  href="/credits"
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  Image credits
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#181818] border-t border-gray-700 px-6 md:px-12 lg:px-30 py-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-sm text-gray-400">
              ©{new Date().getFullYear()} Checkmijnverzekering.nl | Alle rechten
              voorbehouden.
            </p>
            <nav className="flex flex-wrap gap-6 md:gap-8">
              <Link
                href="/gebruikers-voorwaarden"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
              >
                Gebruikers voorwaarden
              </Link>
              <Link
                href="/privacybeleid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
              >
                Privacybeleid
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
