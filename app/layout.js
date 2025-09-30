import { Work_Sans } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

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
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased relative`}>
        <div className="w-full flex justify-center absolute top-4 left-0 right-0 z-10">
          <Navbar />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
