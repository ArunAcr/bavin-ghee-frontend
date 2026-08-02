"use client";

import { useEffect } from "react";
import { useCartStore } from "@/store/cartStore";

export default function CartHydrator() {
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return null;
}
