import Razorpay from "razorpay";

const globalForRazorpay = globalThis as unknown as {
  razorpay?: Razorpay;
};

function createRazorpayClient(): Razorpay {
  if (globalForRazorpay.razorpay) return globalForRazorpay.razorpay;

  const client = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID ?? "",
    key_secret: process.env.RAZORPAY_KEY_SECRET ?? "",
  });

  if (process.env.NODE_ENV !== "production") {
    globalForRazorpay.razorpay = client;
  }

  return client;
}

export function getRazorpayClient(): Razorpay {
  return createRazorpayClient();
}
