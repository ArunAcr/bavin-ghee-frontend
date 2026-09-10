import { ReactNode } from "react";

interface PolicyLayoutProps {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}

export default function PolicyLayout({ eyebrow, title, updated, children }: PolicyLayoutProps) {
  return (
    <div className="w-full">
      <section className="bg-cream-dark py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <p className="uppercase tracking-widest text-sm font-bold text-terracotta mb-2">
            {eyebrow}
          </p>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-maroon">
            {title}
          </h1>
          <p className="mt-3 text-sm text-foreground/50">Last updated: {updated}</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-14 sm:py-16">
        <div className="flex flex-col gap-10">{children}</div>
      </section>
    </div>
  );
}

export function PolicySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="font-display font-bold text-xl text-maroon mb-3">{title}</h2>
      <div className="text-sm text-foreground/70 leading-relaxed space-y-3">{children}</div>
    </div>
  );
}
