import MessageInput from "./MessageInput";

export default function ChatWindow() {
  return (
    <div className="flex flex-col flex-1 p-4">
      <div className="border-b border-green-300 dark:border-red-100 pb-2 mb-2 flex justify-between items-center">
        <div className="text-green-300 dark:text-red-100 font-medium">username</div>
        <div className="text-green-300 dark:text-red-100">⋮</div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2">
        <div className="bg-green-300 dark:bg-red-100 text-green-100 dark:text-red-300 px-4 py-2 w-fit rounded-md">Hi!</div>
        <div className="bg-green-300 dark:bg-red-100 text-green-100 dark:text-red-300 px-4 py-2 w-fit rounded-md ml-auto">Hello there!</div>
      </div>

      <MessageInput />
    </div>
  );
}
