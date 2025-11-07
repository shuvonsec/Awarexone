import Stepper from "@/components/Stepper";
import AlertNote from "@/components/AlertNote";

export default function ScamReportReview() {
  return (
    <div className="py-10 grid md:grid-cols-[240px_1fr] gap-6">
      <Stepper steps={["Basics", "Evidence", "Review"]} current={2} />
      <div className="space-y-4">
        <div className="card p-4">
          <div className="h3">Review &amp; Submit</div>
          <p className="caption mt-2">Double-check your alert before notifying the community.</p>
        </div>
        <AlertNote>Scam alerts go through moderation before being visible to everyone.</AlertNote>
        <div className="flex gap-2 justify-end">
          <a className="px-4 py-2 rounded-xl border" href="/scams/report/evidence">Previous</a>
          <a className="px-4 py-2 rounded-xl bg-black text-white" href="/scams">Submit</a>
        </div>
      </div>
    </div>
  );
}
