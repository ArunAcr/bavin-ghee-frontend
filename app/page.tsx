import HeroGlass from "@/components/home/HeroGlass";
import TrustBadges from "@/components/home/TrustBadges";
import CategoryGrid from "@/components/home/CategoryGrid";
import Bestsellers from "@/components/home/Bestsellers";
import ProductHighlight from "@/components/home/ProductHighlight";
import BrandStory from "@/components/home/BrandStory";
import VideoShowcase from "@/components/home/VideoShowcase";
import GheeComparison from "@/components/home/GheeComparison";
import QualityTesting from "@/components/home/QualityTesting";
import FAQ from "@/components/home/FAQ";
import BlogTeaser from "@/components/home/BlogTeaser";
import Testimonials from "@/components/home/Testimonials";
// import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroGlass />
      <TrustBadges />
      <CategoryGrid />
      <VideoShowcase />
      <ProductHighlight />
      <Bestsellers />
      <BrandStory />
      <GheeComparison />
      <QualityTesting />
      <BlogTeaser />
      <Testimonials />
      <FAQ />
      {/* <Newsletter /> */}
    </div>
  );
}
