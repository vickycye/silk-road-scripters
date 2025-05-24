import type { Metadata } from "next";
import {
  ClerkProvider,
  // SignInButton,
  // SignUpButton,
  // SignedIn,
  // SignedOut,
  // UserButton,
} from '@clerk/nextjs'

// Import style
import { GeistSans, GeistMono } from 'geist/font'
import "./globals.css";
// Import Components 

/**
 * Imported fonts are added to the global stylesheet.
 */
const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: "The Silk Road",
  description: "A content platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${geistSans.className} ${geistMono.className} antialiased`}>
        {/* <header className="flex justify-end items-center p-4 gap-4 h-16 bg-white">
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header> */}
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
