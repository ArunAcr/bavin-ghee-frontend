import Hero from "@/components/home/Hero";
import TrustBadges from "@/components/home/TrustBadges";
import CategoryGrid from "@/components/home/CategoryGrid";
import Bestsellers from "@/components/home/Bestsellers";
import ProductHighlight from "@/components/home/ProductHighlight";
import BrandStory from "@/components/home/BrandStory";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustBadges />
      <CategoryGrid />
      <Bestsellers />
      <ProductHighlight />
      <BrandStory />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
