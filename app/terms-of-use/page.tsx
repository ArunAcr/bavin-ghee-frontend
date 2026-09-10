import { Metadata } from "next";
import PolicyLayout, { PolicySection } from "@/components/legal/PolicyLayout";
import { BUSINESS_ADDRESS, BUSINESS_EMAIL, BUSINESS_NAME, BUSINESS_PHONE_DISPLAY } from "@/lib/business";

const title = "Terms of Use";
const description = "The terms and conditions that apply when you use the Bavin Ghee website and place an order with us.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms-of-use" },
  openGraph: { title, description, url: "/terms-of-use" },
  twitter: { title, description },
};

export default function TermsOfUsePage() {
  return (
    <PolicyLayout eyebrow="Help Center" title={title} updated="9 September 2026">
      <PolicySection title="Acceptance of Terms">
        <p>
          By accessing or using the {BUSINESS_NAME} website (&quot;Bavin Ghee&quot;,
          &quot;we&quot;, &quot;us&quot;), you agree to be bound by these Terms of Use. If you
          do not agree, please do not use our website or services.
        </p>
      </PolicySection>

      <PolicySection title="Products & Orders">
        <p>
          All products are subject to availability. We reserve the right to limit quantities,
          refuse or cancel any order at our discretion — for example, in cases of suspected
          fraud, pricing errors, or stock unavailability. If we cancel a paid order, a full
          refund will be issued.
        </p>
      </PolicySection>

      <PolicySection title="Pricing & Payments">
        <p>
          Prices listed on our website are in Indian Rupees (INR) and are inclusive of
          applicable taxes unless stated otherwise. We reserve the right to change prices at
          any time without prior notice. Payments are processed securely through our payment
          partner, Razorpay; we do not store your card, UPI or bank details.
        </p>
      </PolicySection>

      <PolicySection title="Shipping & Returns">
        <p>
          Delivery timelines and shipping charges are outlined in our{" "}
          <a href="/shipping-delivery" className="text-maroon hover:text-maroon-dark transition-colors">
            Shipping &amp; Delivery Policy
          </a>
          . Returns, replacements and refunds are governed by our{" "}
          <a href="/returns-refunds" className="text-maroon hover:text-maroon-dark transition-colors">
            Return &amp; Refund Policy
          </a>
          .
        </p>
      </PolicySection>

      <PolicySection title="Account & User Conduct">
        <p>
          You agree to provide accurate information when placing an order or contacting us,
          and not to misuse our website — including attempting unauthorized access, posting
          harmful content, or using the site for any unlawful purpose.
        </p>
      </PolicySection>

      <PolicySection title="Intellectual Property">
        <p>
          All content on this website — including the Bavin Ghee name, logo, product
          photography, and written content — is the property of {BUSINESS_NAME} and may not
          be copied, reproduced or used without our prior written consent.
        </p>
      </PolicySection>

      <PolicySection title="Limitation of Liability">
        <p>
          While we take care to ensure product quality and website accuracy, Bavin Ghee shall
          not be liable for any indirect or incidental damages arising from the use of our
          website or products, to the extent permitted by law. Nothing in these terms limits
          your rights as a consumer under applicable Indian law.
        </p>
      </PolicySection>

      <PolicySection title="Governing Law">
        <p>
          These Terms of Use are governed by the laws of India, and any disputes shall be
          subject to the exclusive jurisdiction of the courts in {BUSINESS_ADDRESS.state}.
        </p>
      </PolicySection>

      <PolicySection title="Changes to These Terms">
        <p>
          We may revise these Terms of Use from time to time. Continued use of our website
          after changes are posted constitutes acceptance of the updated terms.
        </p>
      </PolicySection>

      <PolicySection title="Contact Us">
        <p>
          For any questions about these terms, write to us at{" "}
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
