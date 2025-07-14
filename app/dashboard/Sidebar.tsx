'use client';
import { useState, useEffect } from "react";
import { useAuthStore } from "@/lib/stores/authStore";
import { useChatStore } from "@/lib/stores/chatStore";
import CreateChatModal from "./CreateChatModal";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { SearchIcon, PlusIcon } from "lucide-react";
import useDebounce from "@/hooks/useDebounce"; // Fixed import
import ChatroomList from "./ChatroomList";

export default function Sidebar() {
  const logout = useAuthStore((state) => state.logout);
  const { chatrooms, createChatroom, deleteChatroom } = useChatStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300); // Now works correctly
  
  const filteredChatrooms = chatrooms.filter(chatroom => 
    chatroom.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  const handleCreateChat = (title: string) => {
    createChatroom(title);
    setIsModalOpen(false);
  };

  return (
    <div className="w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col h-full">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">Gemini Clone</h1>
          <ThemeToggle />
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search chats..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <ChatroomList
          chatrooms={filteredChatrooms} 
          onDelete={deleteChatroom} 
        />
      </div>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          New Chat
        </button>
        
        <button
          onClick={logout}
          className="mt-4 w-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 py-2 px-4 rounded-lg transition-colors"
        >
          Logout
        </button>
      </div>
      
      <CreateChatModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onCreate={handleCreateChat} 
      />
    </div>
  );
}