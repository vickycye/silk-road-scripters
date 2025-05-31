import Searchbar from "./Searchbar";

export default function ChatList() {
  return (
    <div className="w-1/3 border-r border-green-300 dark:border-red-100 p-4 space-y-4">
        <div className="container py-6 px-4">
          <Searchbar/>
        </div>
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-green-300 dark:bg-red-100 h-12 rounded-md cursor-pointer" />
      ))}
    </div>
  );
}
