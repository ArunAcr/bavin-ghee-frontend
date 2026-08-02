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
      "Our Pure Cow Ghee is made from the milk of desi cows using the traditional bilona method, slow-simmered to preserve its natural aroma and nutrients. Grainy, golden and fragrant, it's the everyday essential your kitchen has been missing.",
    category: "cow-ghee",
    categoryLabel: "Cow Ghee",
    images: [
      "/images/products/cow-ghee-bottle.png",
      "/images/products/cow-ghee-box.jpeg",
    ],
    variants: [
      { id: "cg-200", label: "200 ml", price: 325 },
      { id: "cg-500", label: "500 ml", price: 749, compareAtPrice: 849 },
      { id: "cg-1000", label: "1 L", price: 1399, compareAtPrice: 1599 },
    ],
    benefits: [
      "Rich source of healthy fats for daily energy",
      "Supports digestion and gut health",
      "Nourishes skin and hair from within",
      "High smoke point, ideal for cooking and frying",
      "No preservatives, no additives, no shortcuts",
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
      "Made from buffalo milk, this ghee has a denser texture and a richer, more robust flavour than cow ghee. A favourite for those who grew up with the taste of home-style tempering and festive sweets.",
    category: "buffalo-ghee",
    categoryLabel: "Buffalo Ghee",
    images: ["/images/products/buffalo-ghee-bottle.png"],
    variants: [
      { id: "bg-200", label: "200 ml", price: 299 },
      { id: "bg-500", label: "500 ml", price: 699, compareAtPrice: 799 },
      { id: "bg-1000", label: "1 L", price: 1299 },
    ],
    benefits: [
      "Higher fat content for a richer taste",
      "Naturally cholesterol-friendly in moderation",
      "Perfect for sweets, sweets and festive cooking",
      "Long shelf life without refrigeration",
      "Slow-cooked in small batches",
    ],
    rating: 4.7,
    reviewCount: 184,
  },
  {
    slug: "cow-butter",
    name: "Cow Butter",
    shortDescription: "Fresh, creamy, straight from the churn.",
    description:
      "Freshly churned white butter from cow milk, light and creamy with none of the salt or preservatives found in store-bought spreads. Melt it into your morning paratha or dal for an instant upgrade.",
    category: "cow-butter",
    categoryLabel: "Cow Butter",
    images: ["/images/products/cow-butter.png"],
    variants: [
      { id: "cb-200", label: "200 g", price: 189 },
      { id: "cb-500", label: "500 g", price: 429 },
    ],
    benefits: [
      "Light, creamy texture straight off the churn",
      "No added salt or preservatives",
      "A good source of vitamin A and D",
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
      "Thicker and richer than cow butter, our buffalo butter brings a deeply indulgent taste to everything it touches. A small spoon goes a long way on hot rice, dal or fresh bread.",
    category: "buffalo-butter",
    categoryLabel: "Buffalo Butter",
    images: ["/images/products/buffalo-butter.png"],
    variants: [
      { id: "bb-200", label: "200 g", price: 179 },
      { id: "bb-500", label: "500 g", price: 409 },
    ],
    benefits: [
      "Higher fat content for an indulgent bite",
      "Naturally thick, creamy consistency",
      "Traditional taste, minimally processed",
      "Pairs beautifully with hot rice and dal",
      "No preservatives, ever",
    ],
    rating: 4.5,
    reviewCount: 41,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
