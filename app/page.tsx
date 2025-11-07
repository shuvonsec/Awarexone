import KPIStat from "@/components/KPIStat";
import ItemGrid from "@/components/ItemGrid";
import ItemCard from "@/components/ItemCard";
import ScamListItem from "@/components/ScamListItem";
import kpis from "./_data/kpis.json";
import lost from "./_data/lost.json";
import found from "./_data/found.json";
import scams from "./_data/scams.json";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="section">
        <div className="card p-10 text-center bg-gradient-to-br from-neutral-50 to-white">
          <h1 className="h1">Reunite with lost items. Report scams. Help others.</h1>
          <p className="caption mt-3">Malaysia’s community platform for lost &amp; found and scam awareness.</p>
        </div>
      </section>

      {/* KPI */}
      <section className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <KPIStat label="Items Found" value={kpis.itemsFound} />
        <KPIStat label="Items Lost" value={kpis.itemsLost} />
        <KPIStat label="Successful Returns" value={kpis.returns} />
        <KPIStat label="Scams Reported" value={kpis.scams} />
        <KPIStat label="Users Helped" value={kpis.usersHelped} />
      </section>

      {/* Recents */}
      <section className="section">
        <div className="h2 mb-4">Recent Lost Items</div>
        <ItemGrid>
          {lost.map((i) => (
            <ItemCard key={i.id} title={i.title} location={`${i.city}, ${i.state}`} status={i.status} />
          ))}
        </ItemGrid>
      </section>

      <section className="section">
        <div className="h2 mb-4">Recent Found Items</div>
        <ItemGrid>
          {found.map((i) => (
            <ItemCard key={i.id} title={i.title} location={`${i.city}, ${i.state}`} status={i.status} />
          ))}
        </ItemGrid>
      </section>

      <section className="section">
        <div className="h2 mb-4">Latest Scam Alerts</div>
        <div className="grid gap-3">
          {scams.map((s) => (
            <ScamListItem key={s.slug} title={s.title} priority={s.priority} meta={`${s.state} • ${s.loss} • ${s.time}`} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="section grid md:grid-cols-3 gap-4">
        {["Report", "Verify", "Reunite"].map((step, i) => (
          <div className="card p-5" key={step}>
            <div className="h3">
              {i + 1}. {step}
            </div>
            <p className="caption mt-2">Short explainer per your PDF.</p>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="section grid md:grid-cols-2 gap-4">
        <div className="card p-5">
          <div className="h3">How to Spot Banking Scams in Malaysia</div>
          <p className="caption mt-2">Read tips &amp; red flags.</p>
        </div>
        <div className="card p-5">
          <div className="h3">Prevent Losing Valuables in Public</div>
          <p className="caption mt-2">Practical prevention advice.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="card p-6 flex items-center justify-between">
          <div>
            <div className="h3">Join the community</div>
            <p className="caption">Post, report, and help others.</p>
          </div>
          <a href="/auth/sign-up" className="px-4 py-2 rounded-xl bg-black text-white">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
