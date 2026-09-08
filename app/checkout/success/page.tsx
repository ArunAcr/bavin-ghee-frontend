import Link from "next/link";
import ClearCartOnMount from "@/components/checkout/ClearCartOnMount";

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string }>;
}) {
  const params = await searchParams;
  const orderNumber = params.order;

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-24 text-center w-full">
      <ClearCartOnMount />

      <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-green/10 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-green">
          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <h1 className="font-display font-extrabold text-3xl text-maroon mb-3">Order Confirmed!</h1>
      <p className="text-foreground/60 mb-2">
        Thank you for shopping with Bavin Ghee. We&apos;ve received your order and will get it packed and shipped soon.
      </p>
      {orderNumber && (
        <p className="text-foreground/80 font-semibold mb-8">Order Number: {orderNumber}</p>
      )}

      <Link
        href="/shop"
        className="inline-flex items-center justify-center rounded-full bg-maroon text-cream font-semibold px-8 py-3.5 hover:bg-maroon-dark transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
