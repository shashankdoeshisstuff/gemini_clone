'use client';
import { useChatStore } from "@/lib/stores/chatStore";

export default function ChatHeader() {
  const { chatrooms, currentChatId } = useChatStore();
  
  if (!currentChatId) return null;
  
  const currentChat = chatrooms.find(chat => chat.id === currentChatId);
  
  return (
    <div className="pl-18 md:pl-4 py-4 pr-4 border-b border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white">
        {currentChat?.title || "Untitled Chat"}
      </h2>
    </div>
  );
}