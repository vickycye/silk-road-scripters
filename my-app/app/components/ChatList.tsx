import Searchbar from "./Searchbar";

export default function ChatList() {
  return (
    <div className="w-1/3 border-r border-[#8b4513] dark:border-[#deb887] p-4 space-y-4">
        <div className="container py-6 px-4">
          <Searchbar/>
        </div>
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-[#b8860b] dark:bg-[#d4a574] hover:bg-[#daa520] dark:hover:bg-[#8b6914] active:bg-[#9a7209] dark:active:bg-[#c4955c] h-12 rounded-md cursor-pointer transition-colors" />
      ))}
    </div>
  );
}