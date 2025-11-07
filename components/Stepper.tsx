export default function Stepper({ steps, current }: { steps: string[]; current: number }) {
  return (
    <aside className="card p-4 min-w-[220px]">
      <ol className="space-y-3">
        {steps.map((s, i) => (
          <li key={s} className={i === current ? "font-semibold" : "text-neutral-500"}>
            {i + 1}. {s}
          </li>
        ))}
      </ol>
    </aside>
  );
}
