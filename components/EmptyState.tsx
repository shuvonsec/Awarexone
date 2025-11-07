export default function EmptyState({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="card p-8 text-center">
      <div className="h3">{title}</div>
      {hint && <p className="caption mt-1">{hint}</p>}
    </div>
  );
}
