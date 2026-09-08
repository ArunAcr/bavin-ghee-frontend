"use client";

import { useEffect } from "react";
import { useCartStore } from "@/store/cartStore";

export default function ClearCartOnMount() {
  useEffect(() => {
    useCartStore.getState().clearCart();
  }, []);

  return null;
}
