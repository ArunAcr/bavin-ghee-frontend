import { Metadata } from "next";
import PolicyLayout, { PolicySection } from "@/components/legal/PolicyLayout";
import { BUSINESS_ADDRESS, BUSINESS_EMAIL, BUSINESS_NAME, BUSINESS_PHONE_DISPLAY } from "@/lib/business";

const title = "Privacy Policy";
const description = "How Bavin Ghee collects, uses, and protects your personal information when you shop with us.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: { title, description, url: "/privacy-policy" },
  twitter: { title, description },
};

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout eyebrow="Help Center" title={title} updated="9 September 2026">
      <PolicySection title="Overview">
        <p>
          {BUSINESS_NAME} (&quot;Bavin Ghee&quot;, &quot;we&quot;, &quot;us&quot;) respects your
          privacy. This policy explains what information we collect when you use our website
          or place an order, how we use it, and the choices you have.
        </p>
      </PolicySection>

      <PolicySection title="Information We Collect">
        <ul className="list-disc list-inside space-y-1">
          <li>Name, phone number and email address, when you place an order, contact us, or sign up for our newsletter</li>
          <li>Shipping and billing address, for order delivery and invoicing</li>
          <li>Order history and preferences</li>
          <li>Payment information, processed securely by our payment partner, Razorpay — we never store your card, UPI or bank details on our servers</li>
          <li>Basic usage data such as pages visited and device/browser type, collected automatically to improve our site</li>
        </ul>
      </PolicySection>

      <PolicySection title="How We Use Your Information">
        <ul className="list-disc list-inside space-y-1">
          <li>To process, pack and deliver your orders</li>
          <li>To send order updates, delivery notifications and support responses</li>
          <li>To respond to enquiries submitted through our contact form</li>
          <li>To send offers or newsletters, only if you&apos;ve opted in — you can unsubscribe anytime</li>
          <li>To improve our website, products and customer experience</li>
        </ul>
      </PolicySection>

      <PolicySection title="Sharing of Information">
        <p>
          We do not sell your personal information. We share only what&apos;s necessary with
          trusted service providers who help us run our business — such as our payment
          gateway (Razorpay), courier partners for delivery, and email service providers for
          order and newsletter communication. These partners are only permitted to use your
          data to provide the relevant service to us.
        </p>
      </PolicySection>

      <PolicySection title="Data Security">
        <p>
          We use industry-standard measures, including encrypted connections (HTTPS) and
          secure payment processing, to protect your information. However, no method of
          transmission over the internet is completely secure, and we cannot guarantee
          absolute security.
        </p>
      </PolicySection>

      <PolicySection title="Cookies">
        <p>
          Our website may use cookies and similar technologies to remember your cart, keep
          you signed in, and understand how visitors use our site. You can disable cookies in
          your browser settings, though some features may not work as intended.
        </p>
      </PolicySection>

      <PolicySection title="Your Rights">
        <p>
          You can request access to, correction of, or deletion of your personal information
          at any time by contacting us. You may also opt out of marketing communications
          using the unsubscribe link in our emails.
        </p>
      </PolicySection>

      <PolicySection title="Children's Privacy">
        <p>
          Our website and services are not directed at children under 18, and we do not
          knowingly collect personal information from children.
        </p>
      </PolicySection>

      <PolicySection title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on
          this page with a revised &quot;last updated&quot; date.
        </p>
      </PolicySection>

      <PolicySection title="Contact Us">
        <p>
          For any privacy-related questions or requests, write to us at{" "}
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
