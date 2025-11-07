import Stepper from "@/components/Stepper";
import AlertNote from "@/components/AlertNote";

export default function FoundReportReview() {
  return (
    <div className="py-10 grid md:grid-cols-[240px_1fr] gap-6">
      <Stepper steps={["Item", "Contact", "Review"]} current={2} />
      <div className="space-y-4">
        <div className="card p-4">
          <div className="h3">Review &amp; Submit</div>
          <p className="caption mt-2">Recap details before publishing your found report.</p>
        </div>
        <AlertNote>Please verify the person claiming the item with knowledge only the owner would know.</AlertNote>
        <div className="flex gap-2 justify-end">
          <a className="px-4 py-2 rounded-xl border" href="/found/report/contact">Previous</a>
          <a className="px-4 py-2 rounded-xl bg-black text-white" href="/found">Submit</a>
        </div>
      </div>
    </div>
  );
}
