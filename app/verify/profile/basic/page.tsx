export default function VerifyProfileBasic() {
  return (
    <div className="py-10 max-w-2xl mx-auto space-y-4">
      <div className="h1">Profile Basics</div>
      <p className="caption">Provide foundational details for verification.</p>
      <div className="card p-6 space-y-3">
        <input className="border rounded-xl px-3 py-2 w-full" placeholder="Full name" />
        <input className="border rounded-xl px-3 py-2 w-full" placeholder="National ID" />
        <input className="border rounded-xl px-3 py-2 w-full" placeholder="Phone number" />
        <button className="px-4 py-2 rounded-xl bg-black text-white">Save &amp; Continue</button>
      </div>
    </div>
  );
}
