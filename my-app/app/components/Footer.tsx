export default function Footer() {
  return (
    <footer className="bg-green-400 dark:bg-red-200 text-green-100 dark:text-red-300 py-4 transition-colors duration-200">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Silk Road. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 