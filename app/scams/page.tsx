import ScamListItem from "@/components/ScamListItem";
import scams from "../_data/scams.json";

export default function ScamsIndex() {
  return (
    <div className="space-y-6 py-10">
      <div className="h1">Scam Reports</div>
      <div className="grid gap-3">
        {scams.map((s) => (
          <ScamListItem key={s.slug} title={s.title} priority={s.priority} meta={`${s.state} • ${s.loss} • ${s.time}`} />
        ))}
      </div>
    </div>
  );
}
