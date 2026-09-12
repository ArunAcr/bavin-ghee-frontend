import { Product, ProductCategory } from "@/types/product";

export const categories: { key: ProductCategory; label: string; blurb: string }[] = [
  {
    key: "cow-ghee",
    label: "Pure Cow Ghee",
    blurb: "Golden, aromatic ghee made from desi cow milk.",
  },
  {
    key: "buffalo-ghee",
    label: "Pure Buffalo Ghee",
    blurb: "Rich, dense ghee with a deep traditional flavour.",
  },
  {
    key: "cow-butter",
    label: "Cow Butter",
    blurb: "Fresh, creamy white butter churned from cow milk.",
  },
  {
    key: "buffalo-butter",
    label: "Buffalo Butter",
    blurb: "Thick, indulgent butter with a naturally rich taste.",
  },
];

export const products: Product[] = [
  {
    slug: "pure-cow-ghee",
    name: "Pure Cow Ghee",
    shortDescription: "Golden goodness, made the traditional way.",
    description:
      "Our Pure Cow Ghee is carefully prepared from cow milk through a traditional dairy process. From milk to butter and finally to rich, aromatic ghee, every stage is handled with care by our team. Golden, flavorful and made for everyday cooking, it brings the goodness of traditional ghee to your kitchen.",
    category: "cow-ghee",
    categoryLabel: "Cow Ghee",
    images: [
      "/images/products/ghee_3.png",
      "/images/products/ghee_2.png",
      "/images/products/ghee_1.png",
    ],
    variants: [
      { id: "cg-100", label: "100 ml", price: 83 },
      { id: "cg-200", label: "200 ml", price: 164 },
      { id: "cg-500", label: "500 ml", price: 405 },
      { id: "cg-1000", label: "1 L", price: 800 },
    ],
    benefits: [
      "Rich, golden colour and natural aroma",
      "Perfect for everyday cooking and traditional recipes",
      "Carefully prepared from cow milk",
      "Made with attention to purity and quality",
      "Suitable for cooking, frying and traditional dishes",
    ],
    badge: "Bestseller",
    rating: 4.8,
    reviewCount: 312,
  },
  {
    slug: "pure-buffalo-ghee",
    name: "Pure Buffalo Ghee",
    shortDescription: "Rich, dense and deeply traditional.",
    description:
      "Our Pure Buffalo Ghee is carefully prepared from buffalo milk and transformed into rich, aromatic ghee through a carefully managed traditional process. From milk to butter and finally ghee, our team oversees every stage to maintain quality, consistency and the authentic taste of traditional dairy.",
    category: "buffalo-ghee",
    categoryLabel: "Buffalo Ghee",
    images: ["/images/products/ghee_4.png"],
    variants: [
      { id: "bg-100", label: "100 ml", price: 95 },
      { id: "bg-200", label: "200 ml", price: 186 },
      { id: "bg-500", label: "500 ml", price: 460 },
      { id: "bg-1000", label: "1 L", price: 900 },
    ],
    benefits: [
      "Rich and creamy dairy flavour",
      "Naturally golden and aromatic",
      "Carefully prepared from buffalo milk",
      "Ideal for everyday cooking",
      "Great for traditional Indian recipes",
      "Made with care from milk to finished ghee"
    ],
    rating: 4.7,
    reviewCount: 184,
  },
  {
    slug: "cow-butter",
    name: "Cow Butter",
    shortDescription: "Fresh, creamy, straight from the churn.",
    description:
      "Our Fresh Cow Butter is carefully prepared from cow milk, with every stage of the process handled by our team. Made for those who enjoy the natural taste and creamy texture of fresh dairy, it is a simple and delicious addition to everyday meals, breakfast and traditional recipes.",
    category: "cow-butter",
    categoryLabel: "Cow Butter",
    images: ["/images/products/butter_1.png"],
    variants: [
      { id: "cb-250", label: "250 g", price: 160 },
      { id: "cb-500", label: "500 g", price: 310 },
      { id: "cb-1000", label: "1 kg", price: 600 },
    ],
    benefits: [
      "Creamy texture and natural dairy taste",
      "Carefully prepared from cow milk",
      "Freshly made with attention to quality",
      "Great on rotis, parathas and toast",
      "Made fresh in small weekly batches",
    ],
    badge: "New",
    rating: 4.6,
    reviewCount: 58,
  },
  {
    slug: "buffalo-butter",
    name: "Buffalo Butter",
    shortDescription: "Thick, indulgent, unmistakably rich.",
    description:
      "Our Fresh Buffalo Butter is prepared from buffalo milk and carefully processed by our team to retain its rich, creamy character. From the initial dairy process to the finished butter, we focus on quality and consistency to bring you a delicious traditional dairy product for everyday use.",
    category: "buffalo-butter",
    categoryLabel: "Buffalo Butter",
    images: ["/images/products/butter_2.png"],
    variants: [
      { id: "bb-250", label: "250 g", price: 180 },
      { id: "bb-500", label: "500 g", price: 340 },
      { id: "bb-1000", label: "1 kg", price: 650 },
    ],
    benefits: [
      "Rich and creamy texture",
      "Higher fat content for an indulgent bite",
      "Made from buffalo milk",
      "Traditional taste, minimally processed",
      "Pairs beautifully with hot rice and dal",
      "Great for traditional recipes",
    ],
    rating: 4.5,
    reviewCount: 41,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
