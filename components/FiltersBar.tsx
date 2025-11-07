import { ReactNode } from "react";

export default function FiltersBar({ children }: { children?: ReactNode }) {
  return <div className="card p-3 flex flex-wrap gap-2 items-center">{children ?? <div className="caption">Filters</div>}</div>;
}
