import Link from "next/link";
import Image from "next/image";

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
    </div>
  );
}
