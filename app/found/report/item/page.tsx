import Stepper from "@/components/Stepper";
import Uploader from "@/components/Uploader";

export default function FoundReportItem() {
  return (
    <div className="py-10 grid md:grid-cols-[240px_1fr] gap-6">
      <Stepper steps={["Item", "Contact", "Review"]} current={0} />
      <div className="space-y-4">
        <div className="card p-4">
          <div className="h3">Item You Found</div>
          <div className="grid md:grid-cols-2 gap-3 mt-3">
            <input className="border rounded-xl px-3 py-2" placeholder="Title" />
            <input className="border rounded-xl px-3 py-2" placeholder="Category" />
            <textarea className="border rounded-xl px-3 py-2 md:col-span-2" rows={4} placeholder="Brief description" />
          </div>
        </div>
        <Uploader />
        <div className="flex gap-2 justify-end">
          <a className="px-4 py-2 rounded-xl border" href="/found">Cancel</a>
          <a className="px-4 py-2 rounded-xl bg-black text-white" href="/found/report/contact">Next</a>
        </div>
      </div>
    </div>
  );
}
