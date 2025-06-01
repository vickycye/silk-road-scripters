import MessageInput from "./MessageInput";

export default function ChatWindow() {
  return (
    <div className="flex flex-col flex-1 p-4">
      <div className="border-b border-[#8b4513] dark:border-[#deb887] pb-2 mb-2 flex justify-between items-center">
        <div className="text-[#3d2f1f] dark:text-[#e8dcc8] font-medium">username</div>
        <div className="text-[#3d2f1f] dark:text-[#e8dcc8]">⋮</div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2">
        <div className="bg-[#b8860b] dark:bg-[#d4a574] text-[#e8dcc8] dark:text-[#b8b0a0] px-4 py-2 w-fit rounded-md">Hi!</div>
        <div className="bg-[#b8860b] dark:bg-[#d4a574] text-[#e8dcc8] dark:text-[#b8b0a0] px-4 py-2 w-fit rounded-md ml-auto">Hello there!</div>
      </div>

      <MessageInput />
    </div>
  );
}