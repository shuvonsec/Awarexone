import Stepper from "@/components/Stepper";
import Uploader from "@/components/Uploader";

export default function ScamReportEvidence() {
  return (
    <div className="py-10 grid md:grid-cols-[240px_1fr] gap-6">
      <Stepper steps={["Basics", "Evidence", "Review"]} current={1} />
      <div className="space-y-4">
        <div className="card p-4">
          <div className="h3">Evidence</div>
          <p className="caption mt-2">Upload screenshots, chat logs, or voice recordings.</p>
        </div>
        <Uploader />
        <div className="flex gap-2 justify-end">
          <a className="px-4 py-2 rounded-xl border" href="/scams/report/basic">Previous</a>
          <a className="px-4 py-2 rounded-xl bg-black text-white" href="/scams/report/review">Next</a>
        </div>
      </div>
    </div>
  );
}
