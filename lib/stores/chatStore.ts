import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { Message, Chatroom } from "@/types";

interface ChatState {
  chatrooms: Chatroom[];
  messages: Record<string, Message[]>;
  currentChatId: string | null;
  typing: boolean;
  createChatroom: (title: string) => void;
  deleteChatroom: (id: string) => void;
  setCurrentChat: (id: string) => void;
  sendMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void;
  loadMoreMessages: () => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      chatrooms: [],
      messages: {},
      currentChatId: null,
      typing: false,
      
      createChatroom: (title) => {
        const newChatroom: Chatroom = {
          id: uuidv4(),
          title,
          createdAt: new Date(),
        };
        
        set((state) => ({
          // Fixed: 'chatrooms' instead of 'chartrooms'
          chatrooms: [...state.chatrooms, newChatroom],
          messages: {
            ...state.messages,
            [newChatroom.id]: []
          },
          currentChatId: newChatroom.id
        }));
      },
      
      deleteChatroom: (id) => {
        set((state) => {
          const updatedChatrooms = state.chatrooms.filter(chat => chat.id !== id);
          const updatedMessages = { ...state.messages };
          delete updatedMessages[id];
          
          return {
            chatrooms: updatedChatrooms,
            messages: updatedMessages,
            currentChatId: updatedChatrooms.length > 0 ? updatedChatrooms[0].id : null
          };
        });
      },
      
      setCurrentChat: (id) => set({ currentChatId: id }),
      
      sendMessage: (message) => {
        const { currentChatId, messages } = get();
        if (!currentChatId) return;
        
        const newMessage: Message = {
          ...message,
          id: uuidv4(),
          timestamp: new Date()
        };
        
        set((state) => ({
          messages: {
            ...state.messages,
            [currentChatId]: [...(state.messages[currentChatId] || []), newMessage]
          }
        }));
        
        // Simulate AI response
        if (message.role === 'user') {
          setTimeout(() => {
            set({ typing: true });
            
            setTimeout(() => {
              set((state) => {
                const currentMessages = state.messages[currentChatId] || [];
                return {
                  typing: false,
                  messages: {
                    ...state.messages,
                    [currentChatId]: [
                      ...currentMessages,
                      {
                        id: uuidv4(),
                        content: "This is a simulated AI response based on your query.",
                        role: 'ai',
                        timestamp: new Date()
                      }
                    ]
                  }
                };
              });
            }, 2000); // AI "thinking" time
          }, 500);
        }
      },
      
      loadMoreMessages: () => {
        const { currentChatId, messages } = get();
        if (!currentChatId) return;
        
        const currentMessages = messages[currentChatId] || [];
        if (currentMessages.length > 50) return; // Don't load more if we have enough
        
        // Simulate fetching older messages
        const olderMessages: Message[] = Array.from({ length: 10 }, (_, i) => ({
          id: `old-${Date.now()}-${i}`,
          content: `Older message ${currentMessages.length + i}`,
          role: i % 2 === 0 ? 'user' : 'ai',
          timestamp: new Date(Date.now() - (i + 1) * 60000)
        }));
        
        set((state) => ({
          messages: {
            ...state.messages,
            [currentChatId]: [...olderMessages, ...currentMessages]
          }
        }));
      }
    }),
    {
      name: 'chat-storage',
    }
  )
);