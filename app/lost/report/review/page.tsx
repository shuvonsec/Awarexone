import Stepper from "@/components/Stepper";
import AlertNote from "@/components/AlertNote";

export default function LostReportReview() {
  return (
    <div className="py-10 grid md:grid-cols-[240px_1fr] gap-6">
      <Stepper steps={["Item Details", "Location & Date", "Review"]} current={2} />
      <div className="space-y-4">
        <div className="card p-4">
          <div className="h3">Review &amp; Submit</div>
          <p className="caption mt-2">Recap panels here with edit anchors.</p>
        </div>
        <AlertNote>We value your privacy. Location is approximate and never shows your exact address.</AlertNote>
        <div className="flex gap-2 justify-end">
          <a className="px-4 py-2 rounded-xl border" href="/lost/report/location-date">Previous</a>
          <a className="px-4 py-2 rounded-xl bg-black text-white" href="/lost">Submit</a>
        </div>
      </div>
    </div>
  );
}
