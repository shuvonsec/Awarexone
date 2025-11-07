import AlertNote from "@/components/AlertNote";
import MapBox from "@/components/MapBox";

export default function ScamDetail() {
  // Static stub; wire to params + data as needed
  return (
    <article className="py-10 space-y-6">
      <div className="h1">Fake Bank TAC Calls</div>
      <AlertNote>Always call the bank using official numbers before sharing any TAC codes.</AlertNote>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <div className="card p-4">
            <div className="h3">What Happened</div>
            <p className="caption mt-2">Scammers posed as bank officers asking for TAC confirmation.</p>
          </div>
          <div className="card p-4">
            <div className="h3">How to Stay Safe</div>
            <p className="caption mt-2">Banks never ask for TAC numbers verbally. Hang up and call the bank.</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="card p-4">
            <div className="h3">Reported From</div>
            <MapBox />
          </div>
          <div className="card p-4">
            <div className="h3">Resources</div>
            <p className="caption">Link to official bank advisory and Bank Negara hotline.</p>
          </div>
        </div>
      </div>
    </article>
  );
}
