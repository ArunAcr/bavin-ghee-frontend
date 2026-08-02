import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ToasterProvider from "@/components/layout/ToasterProvider";
import CartHydrator from "@/components/layout/CartHydrator";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Bavin Ghee | Pure Cow & Buffalo Ghee, The Taste of Heaven",
  description:
    "Bavin Ghee brings you pure, traditionally made cow and buffalo ghee and butter. 100% natural, no additives, made the way your grandmother intended.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-foreground">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <ToasterProvider />
        <CartHydrator />
      </body>
    </html>
  );
}
