import CardGrid from "../components/CardGrid";
import Searchbar from "../components/Searchbar";

export default function Markets() {
  return (
    <main>
      <div className="min-h-screen bg-silk-bg dark:bg-silk-dark-bg">
        <header className="bg-silk-bg shadow dark:bg-silk-dark-bg">
          <div className="container mx-auto py-6 px-4">
            <Searchbar/>
          </div>
        </header>

        <CardGrid />
      </div>
    </main>
  );
}
