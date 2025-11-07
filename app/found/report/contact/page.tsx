import Stepper from "@/components/Stepper";
import ConsentPanel from "@/components/ConsentPanel";

export default function FoundReportContact() {
  return (
    <div className="py-10 grid md:grid-cols-[240px_1fr] gap-6">
      <Stepper steps={["Item", "Contact", "Review"]} current={1} />
      <div className="space-y-4">
        <div className="card p-4">
          <div className="h3">Your Contact</div>
          <div className="grid md:grid-cols-2 gap-3 mt-3">
            <input className="border rounded-xl px-3 py-2" placeholder="Name" />
            <input className="border rounded-xl px-3 py-2" placeholder="Phone" />
            <input className="border rounded-xl px-3 py-2 md:col-span-2" placeholder="Preferred meetup location" />
          </div>
        </div>
        <ConsentPanel />
        <div className="flex gap-2 justify-end">
          <a className="px-4 py-2 rounded-xl border" href="/found/report/item">Previous</a>
          <a className="px-4 py-2 rounded-xl bg-black text-white" href="/found/report/review">Next</a>
        </div>
      </div>
    </div>
  );
}
