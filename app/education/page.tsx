import AlertNote from "@/components/AlertNote";

export default function EducationPage() {
  return (
    <div className="py-10 space-y-6">
      <div className="h1">Community Education</div>
      <AlertNote>
        Browse curated guides sourced from AwarexOne training decks. Replace these stubs with real education content.
      </AlertNote>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card p-5">
          <div className="h3">Lost Item Prevention</div>
          <p className="caption mt-2">Tips for staying vigilant in transit hubs and malls.</p>
        </div>
        <div className="card p-5">
          <div className="h3">Recognizing Scam Patterns</div>
          <p className="caption mt-2">Understand social engineering tactics used in Malaysia.</p>
        </div>
      </div>
    </div>
  );
}
