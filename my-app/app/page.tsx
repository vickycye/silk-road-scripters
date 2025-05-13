import Head from "next/head";
import CardGrid from "./components /CardGrid";
import Navbar from "./components /Navbar";
import Searchbar from "./components /Searchbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      {/* Vicky throws card stuff in here */}
      <Head>
        <title>Interactive Cards Gallery</title>
        <meta name="description" content="Browse our collection of creative content!"/>
        <link rel="icon" href="/images/silk.png"/>
      </Head>
{/* Figure out where to put se */}
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

      <footer className="bg-emerald-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Silk Road. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
