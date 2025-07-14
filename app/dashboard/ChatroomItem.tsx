import { Chatroom } from "@/types";
import { Trash2, ChevronRight } from "lucide-react";
import { format } from "date-fns";

interface ChatroomItemProps {
  chatroom: Chatroom;
  isActive: boolean;
  isDeleting: boolean;
  onSelect: () => void;
  onDelete: () => void;
}

export default function ChatroomItem({ 
  chatroom, 
  isActive, 
  isDeleting, 
  onSelect, 
  onDelete 
}: ChatroomItemProps) {
  const bgClass = isActive 
    ? "bg-blue-50 dark:bg-blue-900/30" 
    : "hover:bg-gray-100 dark:hover:bg-gray-700";
  
  const opacityClass = isDeleting ? "opacity-50" : "opacity-100";

  return (
    <div 
      className={`flex items-center justify-between p-4 cursor-pointer transition-all ${bgClass} ${opacityClass}`}
      onClick={onSelect}
    >
      <div className="flex-1 min-w-0">
        <div className="font-medium text-gray-900 dark:text-white truncate">
          {chatroom.title}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {format(new Date(chatroom.createdAt), "MMM d, yyyy h:mm a")}
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          <Trash2 size={16} />
        </button>
        
        {isActive && (
          <ChevronRight size={20} className="text-blue-500" />
        )}
      </div>
    </div>
  );
}