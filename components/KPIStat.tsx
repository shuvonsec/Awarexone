export default function KPIStat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="card p-5 text-center">
      <div className="text-3xl md:text-4xl font-semibold">{value}</div>
      <div className="caption mt-1">{label}</div>
    </div>
  );
}
