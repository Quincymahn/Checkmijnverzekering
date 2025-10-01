import { Work_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import Script from "next/script";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--work-sans",
  display: "swap",
});

export const metadata = {
  title: "Checkmijnverzekering",
  description: "Slim vergelijken, slimmer verzekeren",
};

export default function RootLayout({ children }) {
  // Haal de GTM ID op uit je environment variabelen
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="nl">
      <head>
        {/* --- START GTM SCRIPT --- */}
        {/* Dit is het hoofdscript voor Google Tag Manager. */}
        <Script
          id="gtm-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
          }}
        />
        {/* --- EINDE GTM SCRIPT --- */}

        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="31fc550f-5e04-4b25-90dc-c14dcdf3d847"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />

        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="lazyOnload"
        />
      </head>
      <body className={`${workSans.variable} antialiased relative`}>
        {/* --- START GTM NOSCRIPT FALLBACK --- */}
        {/* Dit is een fallback voor browsers waarin JavaScript is uitgeschakeld. */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* --- EINDE GTM NOSCRIPT FALLBACK --- */}

        <div className="absolute left-0 right-0 z-10 flex justify-center w-full top-4">
          <Navbar />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
