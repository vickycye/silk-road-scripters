import CardGrid from "./components/CardGrid";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

export default function Home() {
  return (
    <div>
      <Navbar/>

      <main>
        <div className="min-h-screen bg-[#e6e1d6] dark:bg-[#3c3c3c]">
          <header className="bg-[#e6e1d6] shadow dark:bg-[#3c3c3c]">
            <div className="container mx-auto py-6 px-4">
              <Searchbar/>
            </div>
          </header>

          <CardGrid />
        </div>
      </main>
    </div>
  );
}