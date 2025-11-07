import Stepper from "@/components/Stepper";
import MapBox from "@/components/MapBox";
import ConsentPanel from "@/components/ConsentPanel";

export default function LostReportLocation() {
  return (
    <div className="py-10 grid md:grid-cols-[240px_1fr] gap-6">
      <Stepper steps={["Item Details", "Location & Date", "Review"]} current={1} />
      <div className="space-y-4">
        <div className="card p-4">
          <div className="h3">Location &amp; Date</div>
          <div className="mt-3 space-y-3">
            <MapBox />
            <input className="border rounded-xl px-3 py-2 w-full" placeholder="City / Area" />
            <input className="border rounded-xl px-3 py-2 w-full" type="datetime-local" />
          </div>
        </div>
        <ConsentPanel />
        <div className="flex gap-2 justify-end">
          <a className="px-4 py-2 rounded-xl border" href="/lost/report/item-details">Previous</a>
          <a className="px-4 py-2 rounded-xl bg-black text-white" href="/lost/report/review">Next</a>
        </div>
      </div>
    </div>
  );
}
