import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ToasterProvider from "@/components/layout/ToasterProvider";
import CartHydrator from "@/components/layout/CartHydrator";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo";
import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_PHONE_TEL,
  CITIES_SERVED,
} from "@/lib/business";
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

const title = "Pure Cow & Buffalo Ghee in Oddanchatram | Bavin Ghee";
const description =
  "Shop Bavin Ghee's pure cow and buffalo ghee, made in small batches on our family farm in Oddanchatram, Tamil Nadu, using the traditional Bilona method. 100% natural, no additives — delivered across Tamil Nadu and South India.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title,
    description,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/brand/logo.png`,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  telephone: BUSINESS_PHONE_TEL,
  email: BUSINESS_EMAIL,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS_ADDRESS.line1,
    addressLocality: BUSINESS_ADDRESS.city,
    postalCode: BUSINESS_ADDRESS.postalCode,
    addressRegion: BUSINESS_ADDRESS.state,
    addressCountry: BUSINESS_ADDRESS.country,
  },
  areaServed: [
    { "@type": "State", name: "Tamil Nadu" },
    ...CITIES_SERVED.map((city) => ({ "@type": "City", name: city })),
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <ToasterProvider />
        <CartHydrator />
        <WhatsAppButton />
      </body>
    </html>
  );
}
