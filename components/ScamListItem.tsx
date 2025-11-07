export default function ScamListItem({ title, priority, meta }: { title: string; priority: "P1" | "P2" | "P3"; meta?: string }) {
  const color =
    priority === "P1"
      ? "bg-red-100 text-red-700 border-red-200"
      : priority === "P2"
      ? "bg-orange-100 text-orange-700 border-orange-200"
      : "bg-amber-100 text-amber-700 border-amber-200";
  return (
    <div className="card p-4 flex items-center justify-between">
      <div>
        <div className="h3">{title}</div>
        {meta && <div className="caption mt-1">{meta}</div>}
      </div>
      <span className={`text-xs px-2 py-1 rounded-full border ${color}`}>{priority}</span>
    </div>
  );
}
