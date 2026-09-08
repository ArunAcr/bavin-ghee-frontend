import { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Bavin Ghee",
  description: "Get in touch with Bavin Ghee for questions, feedback or wholesale enquiries.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16 w-full grid md:grid-cols-2 gap-14">
      <div>
        <p className="uppercase tracking-widest text-sm font-bold text-terracotta mb-2">
          Contact Us
        </p>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-maroon mb-4">
          We&apos;d Love to Hear From You
        </h1>
        <p className="text-foreground/60 mb-8">
          Questions about an order, wholesale enquiries, or just want to say
          hello? Drop us a message and we&apos;ll get back to you soon.
        </p>

        <div className="space-y-4 text-sm">
          <div>
            <p className="font-semibold text-foreground/80">Registered Address</p>
            <p className="text-foreground/60">
              JAIWIN DAIRY FARM <span className="block"> Bavin Ghee 133/1C2, JJ Nagar, Salaipudur, </span>
               <span className="block"> Oddanchatram - 624 619. </span>
            </p>
          </div>
          <div>
            <p className="font-semibold text-foreground/80">Email</p>
            <a href="mailto:hello@bavinghee.com" className="text-maroon hover:text-maroon-dark transition-colors">
              jaiwindairyfarm@gmail.com
            </a>
          </div>
          <div>
            <p className="font-semibold text-foreground/80">Phone</p>
            <a href="tel:+911234567890" className="text-maroon hover:text-maroon-dark transition-colors">
              +91 12345 67890
            </a>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gold/30 bg-white p-6 sm:p-8 h-fit">
        <ContactForm />
      </div>
    </div>
  );
}
