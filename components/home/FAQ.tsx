"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is the Bilona method?",
    answer:
      "Bilona is a traditional method where curd is hand-churned to extract butter, which is then slow-simmered into ghee. It's slower than industrial methods but preserves aroma, texture and nutrients.",
  },
  {
    question: "How should I store Bavin Ghee?",
    answer:
      "Store in a cool, dry place away from direct sunlight. Ghee doesn't need refrigeration and has a long shelf life thanks to its low moisture content — just use a dry spoon each time.",
  },
  {
    question: "Is cow ghee or buffalo ghee better?",
    answer:
      "Neither is strictly \"better\" — cow ghee is lighter and more aromatic, ideal for daily cooking, while buffalo ghee is richer and denser, often preferred for sweets and festive dishes.",
  },
  {
    question: "Do you deliver outside Tamil Nadu?",
    answer:
      "Yes — we currently deliver across Tamil Nadu, Bangalore and Hyderabad, with more cities being added as we grow.",
  },
  {
    question: "Is Bavin Ghee suitable for infants and the elderly?",
    answer:
      "Pure ghee is a traditional part of Indian diets for all ages, including infants and the elderly, but please consult your doctor for specific dietary advice.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-cream-dark py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-sm font-bold text-terracotta mb-2">
            Got Questions?
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-maroon">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="rounded-2xl border border-gold/30 bg-white overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-foreground">{faq.question}</span>
                  <span className={`shrink-0 text-maroon text-xl transition-transform ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 text-sm text-foreground/60 leading-relaxed">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
