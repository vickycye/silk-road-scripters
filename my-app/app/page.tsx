import Head from "next/head";
import CardGrid from "./components /CardGrid";
import Navbar from "./components /Navbar";
import Searchbar from "./components /Searchbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Silk Road - Interactive Cards Gallery</title>
        <meta name="description" content="Browse our collection of creative content!" />
        <link rel="icon" href="/images/silk.png" />
      </Head>

      <div className="flex min-h-screen bg-green-100">
        <Navbar />
        
        <main className="flex-1 ml-20">
          <header className="sticky top-0 z-30 bg-green-100 shadow-sm py-4">
            <div className="container mx-auto px-4">
              <Searchbar />
            </div>
          </header>

          <div className="container mx-auto px-4">
            <CardGrid />
          </div>
        </main>
      </div>

      <footer className="bg-emerald-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Silk Road. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
