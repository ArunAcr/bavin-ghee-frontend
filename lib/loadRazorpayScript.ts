const RAZORPAY_SCRIPT_SRC = "https://checkout.razorpay.com/v1/checkout.js";

let loadPromise: Promise<boolean> | null = null;

export function loadRazorpayScript(): Promise<boolean> {
  if (typeof window !== "undefined" && window.Razorpay) {
    return Promise.resolve(true);
  }

  if (!loadPromise) {
    loadPromise = new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = RAZORPAY_SCRIPT_SRC;
      script.onload = () => resolve(true);
      script.onerror = () => {
        loadPromise = null;
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  return loadPromise;
}
