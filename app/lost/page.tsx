import FiltersBar from "@/components/FiltersBar";
import ItemGrid from "@/components/ItemGrid";
import ItemCard from "@/components/ItemCard";
import lost from "../_data/lost.json";

export default function LostIndex() {
  return (
    <div className="space-y-6 py-10">
      <div className="h1">Lost Items</div>
      <FiltersBar />
      <ItemGrid>
        {lost.map((i) => (
          <ItemCard key={i.id} title={i.title} location={`${i.city}, ${i.state}`} status={i.status} />
        ))}
      </ItemGrid>
    </div>
  );
}
