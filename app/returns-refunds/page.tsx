import { Metadata } from "next";
import PolicyLayout, { PolicySection } from "@/components/legal/PolicyLayout";
import { BUSINESS_EMAIL, BUSINESS_PHONE_DISPLAY } from "@/lib/business";

const title = "Return & Refund Policy";
const description = "Bavin Ghee's policy on returns, replacements and refunds for damaged, incorrect or quality-affected orders.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/returns-refunds" },
  openGraph: { title, description, url: "/returns-refunds" },
  twitter: { title, description },
};

export default function ReturnsRefundsPage() {
  return (
    <PolicyLayout eyebrow="Help Center" title={title} updated="9 September 2026">
      <PolicySection title="Our Approach">
        <p>
          Because Bavin Ghee is a consumable food product made fresh in small batches, we
          don&apos;t accept returns simply due to change of mind. That said, if something is
          wrong with your order, we want to make it right — every order is covered against
          damage, quality issues and delivery errors.
        </p>
      </PolicySection>

      <PolicySection title="Eligible Cases">
        <ul className="list-disc list-inside space-y-1">
          <li>The product arrived damaged, leaking or with a broken seal</li>
          <li>You received the wrong product or quantity</li>
          <li>The product shows a genuine quality issue (off aroma, texture or taste)</li>
          <li>The order arrived significantly past the promised delivery window</li>
        </ul>
      </PolicySection>

      <PolicySection title="How to Request a Replacement or Refund">
        <p>
          Contact us within 48 hours of delivery at{" "}
          <a href={`mailto:${BUSINESS_EMAIL}`} className="text-maroon hover:text-maroon-dark transition-colors">
            {BUSINESS_EMAIL}
          </a>{" "}
          or call {BUSINESS_PHONE_DISPLAY} with your order number, a brief description of the
          issue, and clear photos/videos of the product and packaging. Our team will review
          your request within 1–2 business days.
        </p>
      </PolicySection>

      <PolicySection title="Resolution">
        <p>
          Once approved, we&apos;ll offer a free replacement of the affected item, or a full
          refund to your original payment method, based on what&apos;s appropriate for your
          case. We do not require the product to be shipped back to us in most cases — photo
          evidence is usually sufficient.
        </p>
      </PolicySection>

      <PolicySection title="Refund Timelines">
        <p>
          Approved refunds are initiated within 3–5 business days and are credited to your
          original payment method (card, UPI, netbanking, or wallet via Razorpay). Depending
          on your bank, it may take an additional 5–7 business days to reflect in your
          account.
        </p>
      </PolicySection>

      <PolicySection title="Cancellations">
        <p>
          Orders can be cancelled free of charge as long as they haven&apos;t been packed or
          dispatched yet. Once an order has shipped, it can no longer be cancelled, but it
          remains covered under the eligible cases above.
        </p>
      </PolicySection>

      <PolicySection title="Contact Us">
        <p>
          For any questions about a return or refund, reach out at{" "}
          <a href={`mailto:${BUSINESS_EMAIL}`} className="text-maroon hover:text-maroon-dark transition-colors">
            {BUSINESS_EMAIL}
          </a>{" "}
          or call {BUSINESS_PHONE_DISPLAY}.
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
