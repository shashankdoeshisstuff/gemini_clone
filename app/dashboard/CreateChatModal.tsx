import { useState } from "react";
import toast from "react-hot-toast";

interface CreateChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (title: string) => void;
}

export default function CreateChatModal({ 
  isOpen, 
  onClose, 
  onCreate 
}: CreateChatModalProps) {
  const [title, setTitle] = useState("");
  
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error("Please enter a chat title");
      return;
    }
    onCreate(title.trim());
    setTitle("");
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/10 bg-opacity-20 flex items-center justify-center p-4 h-screen w-screen">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md">
        {/* Modal content here */}
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
            Create New Chat
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label 
                htmlFor="chat-title" 
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Chat Title
              </label>
              <input
                id="chat-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter a title for your chat"
              />
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}