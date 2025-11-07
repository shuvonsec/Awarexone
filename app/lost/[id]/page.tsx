import MapBox from "@/components/MapBox";
import BadgeStatus from "@/components/BadgeStatus";

export default function LostDetail() {
  // Static stub; wire to params + data as needed
  return (
    <article className="py-10 space-y-6">
      <div className="h1">Wallet - Brown Leather</div>
      <BadgeStatus status="APPROVED" />
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div className="h-64 bg-neutral-100 rounded-xl" />
          <div className="card p-4">
            <div className="h3">Identifying Features</div>
            <p className="caption mt-2">DOB card, student ID, two receipts…</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="card p-4">
            <div className="h3">Location</div>
            <MapBox />
          </div>
          <div className="card p-4">
            <div className="h3">Safety Tips</div>
            <p className="caption">Meet in public places. Verify ownership.</p>
          </div>
        </div>
      </div>
    </article>
  );
}
