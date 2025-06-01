export default function Footer() {
  return (
    <footer className="bg-[#3d2f1f] dark:bg-[#5d4e3a] text-[#e8dcc8] dark:text-[#b8b0a0] py-4 transition-colors duration-200">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Silk Road. All rights reserved.
        </p>
      </div>
    </footer>
  );
}