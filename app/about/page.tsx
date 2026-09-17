import { Metadata } from "next";
import Image from "next/image";
import Logo from "@/components/brand/Logo";
import { BUSINESS_ADDRESS, CITIES_SERVED } from "@/lib/business";

const title = "About Us";
const description = "The story behind Bavin Ghee — pure, traditional ghee and butter made the way your grandmother intended.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about" },
  twitter: { title, description },
};

const values = [
  {
    title: "Traditional Bilona Method",
    text: "We slow-churn curd into butter and simmer it into ghee, exactly the way it's been done for generations.",
  },
  {
    title: "Small Batches",
    text: "No mass production. Every batch is made in small quantities so quality never slips.",
  },
  {
    title: "Honest Ingredients",
    text: "Just milk. No preservatives, no additives, no shortcuts — ever.",
  },
  {
    title: "Family Owned",
    text: "Bavin Ghee is run by a family that grew up on this same ghee, and still eats it every day.",
  },
];

const founders = [
  { name: "Venkatesh Gowtham", initials: "VG", image: "/images/brand/venkatesh.png" },
  { name: "Vivek", initials: "V", image: "/images/brand/vivek.png" },
  { name: "Sabrinathan", initials: "S", image: "/images/brand/sabri.png" },
  { name: "Jeyamani", initials: "J", image: "/images/brand/jeyamani.png" },
];

export default function AboutPage() {
  return (
    <div className="w-full">
      <section className="bg-cream-dark py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center flex flex-col items-center gap-6">
          <Logo className="h-20 w-20" />
          <p className="uppercase tracking-widest text-sm font-bold text-terracotta">
            Made From Scratch, With Care
          </p>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-maroon">
            Meet the Family Behind Bavin Ghee
          </h1>
          <p className="text-foreground/70 leading-relaxed max-w-3xl">
            We believe that the quality of ghee depends on the quality and care
            given at every stage of its journey. On our family farm in{" "}
            {BUSINESS_ADDRESS.city}, {BUSINESS_ADDRESS.state}, our A2 cow ghee
            is made through a carefully managed process, with attention given
            to purity, traditional methods, hygiene, and consistency. We also
            manufacture fresh butter, allowing us to maintain greater control
            over the process and the quality of the final products.
          </p>
          <p className="text-foreground/70 leading-relaxed max-w-2xl">
            For us, it is not just about making and selling dairy products. It
            is about building a brand around trust, transparency, and genuine
            quality.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="uppercase tracking-widest text-sm font-bold text-terracotta mb-2">
            Four Friends, One Vision
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-maroon">
            Our Founders
          </h2>
          <p className="mt-3 text-foreground/60">
            The company is proudly owned and built by four friends who share
            the same vision. Each of us contributes to the journey in our own
            way, working together as one team to oversee the production,
            quality, and growth of the brand.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="rounded-2xl border border-gold/30 bg-white p-6 text-center flex flex-col items-center gap-4"
            >
              {founder.image ? (
                <div className="relative h-24 w-24 rounded-full overflow-hidden bg-cream-dark ring-2 ring-gold/40">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    sizes="6rem"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="h-24 w-24 rounded-full bg-maroon/10 text-maroon font-display font-bold text-2xl flex items-center justify-center ring-2 ring-gold/40">
                  {founder.initials}
                </div>
              )}
              <h3 className="font-display font-bold text-maroon">{founder.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16 sm:pb-24 grid sm:grid-cols-2 gap-6">
        {values.map((v) => (
          <div key={v.title} className="rounded-2xl border border-gold/30 bg-white p-6">
            <h3 className="font-display font-bold text-lg text-maroon mb-2">{v.title}</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">{v.text}</p>
          </div>
        ))}
      </section> */}

      <section className="bg-green py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <p className="uppercase tracking-widest text-sm font-bold text-gold mb-2">
            Our Promise
          </p>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-cream mb-4">
            The Taste of Heaven, in Every Jar
          </h2>
          <p className="text-cream/80 leading-relaxed mb-4">
            We started this journey with one goal — to give customers pure,
            carefully made A2 cow ghee and quality dairy products they can
            feel confident about.
          </p>
          <p className="text-cream/80 leading-relaxed">
            From our hands to your home, every product represents the effort,
            teamwork, and passion we have put into building this brand from
            the ground up.
          </p>
          <p className="mt-8 font-display font-bold text-lg text-gold">
            Four friends. One team. One vision — bringing purity to every home.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20 text-center">
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-maroon mb-4">
          Where We Deliver
        </h2>
        <p className="text-foreground/70 leading-relaxed">
          Bavin Ghee is made at our family farm in {BUSINESS_ADDRESS.city},{" "}
          {BUSINESS_ADDRESS.state}, and delivered fresh across{" "}
          {CITIES_SERVED.slice(0, -1).join(", ")} and {CITIES_SERVED[CITIES_SERVED.length - 1]} —
          with more cities added as we grow.
        </p>
      </section>
    </div>
  );
}
