import Stepper from "@/components/Stepper";
import AlertNote from "@/components/AlertNote";

export default function ScamReportBasic() {
  return (
    <div className="py-10 grid md:grid-cols-[240px_1fr] gap-6">
      <Stepper steps={["Basics", "Evidence", "Review"]} current={0} />
      <div className="space-y-4">
        <div className="card p-4">
          <div className="h3">Scam Basics</div>
          <div className="grid md:grid-cols-2 gap-3 mt-3">
            <input className="border rounded-xl px-3 py-2" placeholder="Scam title" />
            <select className="border rounded-xl px-3 py-2">
              <option value="">Priority</option>
              <option value="P1">P1 - Urgent</option>
              <option value="P2">P2 - High</option>
              <option value="P3">P3 - Medium</option>
            </select>
            <textarea className="border rounded-xl px-3 py-2 md:col-span-2" rows={4} placeholder="Describe what happened" />
          </div>
        </div>
        <AlertNote>Do not share sensitive information such as banking PINs or passwords.</AlertNote>
        <div className="flex gap-2 justify-end">
          <a className="px-4 py-2 rounded-xl border" href="/scams">Cancel</a>
          <a className="px-4 py-2 rounded-xl bg-black text-white" href="/scams/report/evidence">Next</a>
        </div>
      </div>
    </div>
  );
}
