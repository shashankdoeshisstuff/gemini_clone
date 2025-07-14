import { useChatStore } from "@/lib/stores/chatStore";
import ChatroomItem from "./ChatroomItem";
import { Chatroom } from "@/types";
import { useState } from "react";

export default function ChatroomList({ 
  chatrooms, 
  onDelete 
}: { 
  chatrooms: Chatroom[];
  onDelete: (id: string) => void;
}) {
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const { currentChatId, setCurrentChat } = useChatStore();
  
  const handleDelete = (id: string) => {
    setDeletingId(id);
    setTimeout(() => {
      onDelete(id);
      setDeletingId(null);
    }, 300);
  };

  if (chatrooms.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500 dark:text-gray-400">
        No chatrooms found. Create a new one to get started!
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {chatrooms.map((chatroom) => (
        <ChatroomItem
          key={chatroom.id}
          chatroom={chatroom}
          isActive={currentChatId === chatroom.id}
          isDeleting={deletingId === chatroom.id}
          onSelect={() => setCurrentChat(chatroom.id)}
          onDelete={() => handleDelete(chatroom.id)}
        />
      ))}
    </div>
  );
}