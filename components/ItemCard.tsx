import BadgeStatus from "./BadgeStatus";

export default function ItemCard({ title, location, status }: { title: string; location: string; status: string }) {
  return (
    <div className="card p-4">
      <div className="h-32 w-full rounded-xl bg-neutral-100 mb-3" />
      <div className="flex items-center justify-between">
        <div>
          <div className="h3">{title}</div>
          <div className="caption">{location}</div>
        </div>
        <BadgeStatus status={status} />
      </div>
    </div>
  );
}
