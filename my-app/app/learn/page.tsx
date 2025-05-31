import CardGrid from "../components /CardGrid";
import Footer from "../components /Footer";
import Navbar from "../components /Navbar";
import Searchbar from "../components /Searchbar";


export default function Learn() {
  return (
    <div className='pl-20'>
      <Navbar/>
      <main>
        <div className="min-h-screen bg-green-100 dark:bg-red-300">
          <header className="bg-green-100 shadow dark:bg-red-300">
            <div className="container mx-auto py-6 px-4">
              <Searchbar/>
            </div>
          </header>

          <CardGrid />
        </div>
      </main>
      <Footer/>
    </div>
  );
}
