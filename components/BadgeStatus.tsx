export default function BadgeStatus({ status }: { status: string }) {
  const map: Record<string, string> = {
    APPROVED: "bg-green-100 text-green-700 border-green-200",
    VERIFYING: "bg-amber-100 text-amber-700 border-amber-200",
    PENDING: "bg-neutral-100 text-neutral-700 border-neutral-200",
    CLAIMED: "bg-blue-100 text-blue-700 border-blue-200",
    RESOLVED: "bg-emerald-100 text-emerald-700 border-emerald-200",
  };
  return <span className={`text-xs px-2 py-1 rounded-full border ${map[status] ?? map.PENDING}`}>{status}</span>;
}
