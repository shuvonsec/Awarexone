import MapBox from "@/components/MapBox";
import BadgeStatus from "@/components/BadgeStatus";

export default function FoundDetail() {
  // Static stub; wire to params + data as needed
  return (
    <article className="py-10 space-y-6">
      <div className="h1">Honda Car Key</div>
      <BadgeStatus status="APPROVED" />
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div className="h-64 bg-neutral-100 rounded-xl" />
          <div className="card p-4">
            <div className="h3">Where it was found</div>
            <p className="caption mt-2">Parking lot near Queensbay Mall.</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="card p-4">
            <div className="h3">Location</div>
            <MapBox />
          </div>
          <div className="card p-4">
            <div className="h3">Next Steps</div>
            <p className="caption">Contact finder to verify ownership before handover.</p>
          </div>
        </div>
      </div>
    </article>
  );
}
