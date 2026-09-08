import Link from "next/link";
import { prisma } from "@/lib/prisma";
import LogoutButton from "@/components/admin/LogoutButton";

export const dynamic = "force-dynamic";

export default async function AdminContactPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 w-full">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display font-extrabold text-3xl text-maroon">Contact Messages</h1>
        <div className="flex items-center gap-4">
          <Link href="/admin/orders" className="text-sm font-semibold text-maroon hover:text-maroon-dark transition-colors">
            Orders
          </Link>
          <LogoutButton />
        </div>
      </div>

      {messages.length === 0 ? (
        <p className="text-foreground/60">No messages yet.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {messages.map((msg) => (
            <div key={msg.id} className="rounded-2xl border border-gold/30 bg-white p-5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-maroon">{msg.name}</span>
                  <span className="text-foreground/50 text-sm">
                    &lt;
                    <a href={`mailto:${msg.email}`} className="hover:text-maroon transition-colors">
                      {msg.email}
                    </a>
                    &gt;
                  </span>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full ${
                      msg.inquiryType === "wholesale"
                        ? "bg-terracotta/15 text-terracotta"
                        : "bg-green/10 text-green"
                    }`}
                  >
                    {msg.inquiryType === "wholesale" ? "Wholesale" : "Retail"}
                  </span>
                </div>
                <span className="text-foreground/50 text-xs whitespace-nowrap">
                  {msg.createdAt.toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
              <p className="text-sm text-foreground/70 whitespace-pre-wrap">{msg.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
