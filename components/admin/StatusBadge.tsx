const STATUS_STYLES: Record<string, string> = {
  pending: "bg-gold/20 text-gold-dark",
  paid: "bg-green/10 text-green",
  shipped: "bg-terracotta/10 text-terracotta",
  delivered: "bg-green/20 text-green",
  failed: "bg-maroon/10 text-maroon",
  cancelled: "bg-foreground/10 text-foreground/60",
};

export default function StatusBadge({ status }: { status: string }) {
  const style = STATUS_STYLES[status] ?? "bg-foreground/10 text-foreground/60";
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold capitalize ${style}`}>
      {status}
    </span>
  );
}
