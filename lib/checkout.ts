import { getProductBySlug } from "@/lib/products";

export const FREE_SHIPPING_THRESHOLD = 1999;
export const SHIPPING_FEE = 79;

export interface CartItemInput {
  productSlug: string;
  variantId: string;
  quantity: number;
}

export interface ValidatedOrderItem {
  productSlug: string;
  productName: string;
  variantId: string;
  variantLabel: string;
  price: number;
  quantity: number;
}

export class CartValidationError extends Error {}

export function validateCartItems(items: CartItemInput[]): {
  orderItems: ValidatedOrderItem[];
  subtotal: number;
} {
  if (!Array.isArray(items) || items.length === 0) {
    throw new CartValidationError("Cart is empty");
  }

  const orderItems = items.map((item) => {
    const quantity = Number(item?.quantity);
    if (!item?.productSlug || !item?.variantId || !Number.isInteger(quantity) || quantity <= 0) {
      throw new CartValidationError("Invalid cart item");
    }

    const product = getProductBySlug(item.productSlug);
    if (!product) {
      throw new CartValidationError(`Unknown product: ${item.productSlug}`);
    }

    const variant = product.variants.find((v) => v.id === item.variantId);
    if (!variant) {
      throw new CartValidationError(`Unknown variant: ${item.variantId}`);
    }

    return {
      productSlug: product.slug,
      productName: product.name,
      variantId: variant.id,
      variantLabel: variant.label,
      price: variant.price,
      quantity,
    };
  });

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return { orderItems, subtotal };
}

export function computeShipping(subtotal: number): number {
  return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
}

export function generateOrderNumber(): string {
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `BG${random}`;
}
