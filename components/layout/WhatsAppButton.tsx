import { BUSINESS_PHONE_TEL } from "@/lib/business";

const WHATSAPP_MESSAGE = "Hi Bavin Ghee, I'd like to know more about your products.";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.62 1.44 5.16L2 22l5.09-1.53a9.8 9.8 0 0 0 4.95 1.34h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.78 14.17c-.24.69-1.42 1.34-1.96 1.42-.5.08-1.13.11-1.83-.12-.42-.13-.96-.31-1.65-.6-2.9-1.26-4.79-4.18-4.94-4.38-.14-.19-1.19-1.58-1.19-3.02 0-1.44.75-2.14 1.02-2.43.27-.29.58-.36.78-.36l.56.01c.18 0 .42-.07.65.5.24.58.82 2.01.89 2.16.07.15.11.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.18 1.53 1.91 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.6-.07.16-.2.68-.8.87-1.07.18-.28.36-.23.6-.14.24.09 1.55.73 1.82.87.27.14.44.2.51.32.07.12.07.68-.17 1.37Z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const number = BUSINESS_PHONE_TEL.replace("+", "");
  const href = `https://wa.me/${number}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" aria-hidden />
      <WhatsAppIcon />
    </a>
  );
}
