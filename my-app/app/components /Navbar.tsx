import Link from 'next/link';
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
    </nav>
  );
}
