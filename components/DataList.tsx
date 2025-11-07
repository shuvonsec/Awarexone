import { ReactNode } from "react";

export default function DataList({ children }: { children: ReactNode }) {
  return <div className="space-y-3">{children}</div>;
}
