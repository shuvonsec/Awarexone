import FiltersBar from "@/components/FiltersBar";
import ItemGrid from "@/components/ItemGrid";
import ItemCard from "@/components/ItemCard";
import found from "../_data/found.json";

export default function FoundIndex() {
  return (
    <div className="space-y-6 py-10">
      <div className="h1">Found Items</div>
      <FiltersBar />
      <ItemGrid>
        {found.map((i) => (
          <ItemCard key={i.id} title={i.title} location={`${i.city}, ${i.state}`} status={i.status} />
        ))}
      </ItemGrid>
    </div>
  );
}
