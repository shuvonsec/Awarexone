import "./globals.css";
import { ReactNode } from "react";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export const metadata = { title: "AwarexOne", description: "Reunite items. Report scams. Help others." };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppHeader />
        <main className="container-max">{children}</main>
        <AppFooter />
      </body>
    </html>
  );
}
