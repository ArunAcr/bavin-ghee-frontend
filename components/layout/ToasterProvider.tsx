"use client";

import { Toaster } from "react-hot-toast";

export default function ToasterProvider() {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        style: {
          background: "#1e4620",
          color: "#fdf0d5",
          fontFamily: "var(--font-poppins)",
          fontSize: "14px",
        },
      }}
    />
  );
}
