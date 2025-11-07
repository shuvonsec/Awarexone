import { ReactNode } from "react";

export default function AlertNote({ children }: { children: ReactNode }) {
  return <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm">{children}</div>;
}
