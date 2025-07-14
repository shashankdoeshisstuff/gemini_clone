'use client';
import ChatInterface from "@/components/chat/ChatInterface";
import { useChatStore } from "@/lib/stores/chatStore";
import { useEffect } from "react";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  const { chatrooms, currentChatId, setCurrentChat } = useChatStore();
  
  // Set the first chat as active if none is selected
  useEffect(() => {
    if (chatrooms.length > 0 && !currentChatId) {
      setCurrentChat(chatrooms[0].id);
    }
  }, [chatrooms, currentChatId, setCurrentChat]);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        {currentChatId ? (
          <ChatInterface />
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center p-8">
              <h2 className="text-2xl font-bold text-gray-700 dark:text-white mb-4">
                No Chat Selected
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Select a chat from the sidebar or create a new one to start messaging.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}