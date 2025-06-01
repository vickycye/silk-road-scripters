export default function Footer() {
  return (
    <footer className="bg-emerald-900 dark:bg-emerald-950 text-green-100 dark:text-green-50 py-4 transition-colors duration-200">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Silk Road. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 