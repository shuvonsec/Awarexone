export default function ConsentPanel() {
  return (
    <div className="card p-4 space-y-2">
      <label className="flex items-center gap-2"><input type="checkbox" /> I agree to safety and privacy terms.</label>
      <label className="flex items-center gap-2"><input type="checkbox" /> I confirm details are accurate.</label>
    </div>
  );
}
