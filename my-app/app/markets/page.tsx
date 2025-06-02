import MarketSearch from "../components/MarketSearch";
import MarketEvents from "../components/MarketEvents";

export default function Markets() {
  return (
    <main className="min-h-screen bg-[#e6e1d6] dark:bg-[#3c3c3c] pt-20">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-[#3d2f1f] dark:text-[#e8dcc8] text-center mb-8">
          Discover Artisan Markets & Fairs
        </h1>
        <MarketSearch />
        <div className="mt-8">
          <MarketEvents />
        </div>
      </div>
    </main>
  );
}
