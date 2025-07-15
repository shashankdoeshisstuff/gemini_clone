'use client';
import ChatInterface from "@/components/chat/ChatInterface";
import { useChatStore } from "@/lib/stores/chatStore";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { PanelRightClose, X } from "lucide-react";
import CreateChatModal from "./CreateChatModal";

export default function DashboardLayout() {
  const { chatrooms, currentChatId, setCurrentChat, createChatroom } = useChatStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Set the first chat as active if none is selected
  useEffect(() => {
    if (chatrooms.length > 0 && !currentChatId) {
      setCurrentChat(chatrooms[0].id);
    }
  }, [chatrooms, currentChatId, setCurrentChat]);

  // Close sidebar when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCreateChat = (title: string) => {
    createChatroom(title);
    setIsModalOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="md:hidden fixed top-3 left-4 z-20 p-2 bg-neutral-200 text-blue-500 rounded-xl"
      >
        <PanelRightClose  size={24}/>
      </button>

      {/* Sidebar - Hidden on mobile by default */}
      <div 
        className={`fixed md:relative z-30 h-full transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <Sidebar setIsModalOpen={setIsModalOpen}/>
        
        {/* Close button for mobile sidebar */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="md:hidden absolute top-3 right-4 p-2 text-xl hover:text-red-500 text-blue-500 rounded-xl"
        >
          <X size={24} />
        </button>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
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

      <CreateChatModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onCreate={handleCreateChat} 
      />
    </div>
  );
}