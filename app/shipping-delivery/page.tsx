import { Metadata } from "next";
import PolicyLayout, { PolicySection } from "@/components/legal/PolicyLayout";
import { BUSINESS_ADDRESS, BUSINESS_EMAIL, BUSINESS_PHONE_DISPLAY, CITIES_SERVED } from "@/lib/business";

const title = "Shipping & Delivery Policy";
const description = "Where and how Bavin Ghee ships orders, delivery timelines, shipping charges, and what to do if your order arrives damaged.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/shipping-delivery" },
  openGraph: { title, description, url: "/shipping-delivery" },
  twitter: { title, description },
};

export default function ShippingDeliveryPage() {
  return (
    <PolicyLayout eyebrow="Help Center" title={title} updated="9 September 2026">
      <PolicySection title="Delivery Locations">
        <p>
          We currently ship across {CITIES_SERVED.slice(0, -1).join(", ")} and{" "}
          {CITIES_SERVED[CITIES_SERVED.length - 1]}, along with the rest of Tamil Nadu. We&apos;re
          steadily adding more cities and pincodes as our delivery network grows — if your
          location isn&apos;t serviceable yet, drop us a message and we&apos;ll let you know as
          soon as it is.
        </p>
      </PolicySection>

      <PolicySection title="Order Processing Time">
        <p>
          Orders are processed and packed within 1–2 business days of payment confirmation.
          Since our ghee and butter are made fresh in small batches, orders placed on weekends
          or public holidays are processed on the next working day.
        </p>
      </PolicySection>

      <PolicySection title="Delivery Timelines">
        <ul className="list-disc list-inside space-y-1">
          <li>Within Tamil Nadu: 2–4 business days from dispatch</li>
          <li>Bangalore &amp; Hyderabad: 3–6 business days from dispatch</li>
          <li>Other serviceable cities: 4–7 business days from dispatch</li>
        </ul>
        <p>
          These are estimated timelines and may vary due to courier delays, weather, or
          circumstances beyond our control. You&apos;ll receive a tracking link by SMS/email
          once your order is dispatched.
        </p>
      </PolicySection>

      <PolicySection title="Shipping Charges">
        <p>
          Shipping charges, if any, are calculated at checkout based on your delivery address
          and order value. We periodically run free-shipping offers above a minimum order
          value — any applicable discount is shown before you complete payment.
        </p>
      </PolicySection>

      <PolicySection title="Packaging">
        <p>
          All jars and pouches are sealed and packed in tamper-evident, leak-resistant
          packaging suited for transit. Ghee does not require refrigeration during shipping.
        </p>
      </PolicySection>

      <PolicySection title="Damaged or Missing Items">
        <p>
          If your order arrives damaged, leaking, or with items missing, please contact us
          within 48 hours of delivery with your order number and photos of the package and
          product. We&apos;ll arrange a replacement or refund as per our{" "}
          <a href="/returns-refunds" className="text-maroon hover:text-maroon-dark transition-colors">
            Return &amp; Refund Policy
          </a>
          .
        </p>
      </PolicySection>

      <PolicySection title="Contact Us">
        <p>
          For any shipping-related questions, write to us at{" "}
          <a href={`mailto:${BUSINESS_EMAIL}`} className="text-maroon hover:text-maroon-dark transition-colors">
            {BUSINESS_EMAIL}
          </a>{" "}
          or call {BUSINESS_PHONE_DISPLAY}. Our registered address is {BUSINESS_ADDRESS.line1},{" "}
          {BUSINESS_ADDRESS.city} - {BUSINESS_ADDRESS.postalCode}, {BUSINESS_ADDRESS.state}.
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
