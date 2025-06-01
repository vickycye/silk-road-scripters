import { Paperclip } from "lucide-react";

export default function MessageInput() {
  return (
    <div className="mt-2 border-t border-green-300 dark:border-red-100 pt-2 flex items-center gap-2">
      <input
        className="flex-1 bg-transparent outline-none text-green-300 dark:text-red-100 placeholder:text-green-300 dark:placeholder:text-red-100"
        placeholder="Type a message..."
      />
      <Paperclip className="text-green-300 dark:text-red-100 cursor-pointer" />
    </div>
  );
}
