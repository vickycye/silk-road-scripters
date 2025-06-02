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
          <div className="container mx-auto px-4 py-8 text-center">
            <p className="text-[#3d2f1f] dark:text-[#e8dcc8] text-lg italic opacity-75">More lovely products coming soon...</p>
          </div>
        </div>
      </main>
    </div>
  );
}