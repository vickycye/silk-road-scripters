import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import CardGrid from "./components /CardGrid";

export default function Home() {
  return (
    <div>
      <h1> Welcome to the Silk Road </h1>
      <p> This is the place to be for all your silk needs </p>
      <Image
        src="/images/silk.png"
        alt="Silk"
        width={500}
        height={500}
      />


      {/* Vicky throws card stuff in here */}
      <Head>
        <title>Interactive Cards Gallery</title>
        <meta name="description" content="Browse our collection of creative content!"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white shadow">
            <div className="container mx-auto py-6 px-4">
              <h1 className="text-2xl font-bold text-gray-800">content platform</h1>
            </div>
          </header>

          <CardGrid />
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Silk Road. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
