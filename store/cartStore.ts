import { useSyncExternalStore } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  productSlug: string;
  productName: string;
  variantId: string;
  variantLabel: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  removeItem: (productSlug: string, variantId: string) => void;
  updateQuantity: (
    productSlug: string,
    variantId: string,
    quantity: number
  ) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item, quantity = 1) => {
        set((state) => {
          const existing = state.items.find(
            (i) =>
              i.productSlug === item.productSlug &&
              i.variantId === item.variantId
          );

          if (existing) {
            return {
              items: state.items.map((i) =>
                i === existing
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              ),
            };
          }

          return { items: [...state.items, { ...item, quantity }] };
        });
      },

      removeItem: (productSlug, variantId) => {
        set((state) => ({
          items: state.items.filter(
            (i) =>
              !(i.productSlug === productSlug && i.variantId === variantId)
          ),
        }));
      },

      updateQuantity: (productSlug, variantId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productSlug, variantId);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.productSlug === productSlug && i.variantId === variantId
              ? { ...i, quantity }
              : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      totalItems: () =>
        get().items.reduce((sum, i) => sum + i.quantity, 0),

      totalPrice: () =>
        get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    }),
    { name: "bavin-ghee-cart", skipHydration: true }
  )
);

export function useCartHasHydrated() {
  return useSyncExternalStore(
    (callback) => useCartStore.persist.onFinishHydration(callback),
    () => useCartStore.persist.hasHydrated(),
    () => false
  );
}
