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
          chatrooms: [...state.chatrooms, newChatroom],
          messages: { ...state.messages, [newChatroom.id]: [] },
          currentChatId: newChatroom.id,
        }));
      },

      deleteChatroom: (id) => {
        set((state) => {
          const updatedChatrooms = state.chatrooms.filter(c => c.id !== id);
          const updatedMessages = { ...state.messages };
          delete updatedMessages[id];
          const newCurrentChatId = updatedChatrooms[0]?.id ?? null;
          return {
            chatrooms: updatedChatrooms,
            messages: updatedMessages,
            currentChatId: newCurrentChatId,
          };
        });
      },

      setCurrentChat: (id) => set({ currentChatId: id }),

      sendMessage: (message) => {
        const currentChatId = get().currentChatId;
        if (!currentChatId) return;

        const newMessage: Message = {
          ...message,
          id: uuidv4(),
          timestamp: new Date(),
        };
        set((state) => ({
          messages: {
            ...state.messages,
            [currentChatId]: [...(state.messages[currentChatId] || []), newMessage],
          },
        }));

        if (message.role === 'user') {
          setTimeout(() => {
            set({ typing: true });
            setTimeout(() => {
              set((state) => {
                const msgs = state.messages[currentChatId] || [];
                return {
                  typing: false,
                  messages: {
                    ...state.messages,
                    [currentChatId]: [
                      ...msgs,
                      {
                        id: uuidv4(),
                        content: "This is a simulated AI response based on your query.",
                        role: 'ai',
                        timestamp: new Date(),
                      }
                    ],
                  },
                };
              });
            }, 2000);
          }, 500);
        }
      },

      loadMoreMessages: () => {
        const currentChatId = get().currentChatId;
        if (!currentChatId) return;

        const currentMessages = get().messages[currentChatId] || [];
        if (currentMessages.length > 50) return;

        const olderMessages: Message[] = Array.from({ length: 10 }, (_, i) => ({
          id: `old-${Date.now()}-${i}`,
          content: `Older message ${currentMessages.length + i}`,
          role: i % 2 === 0 ? 'user' : 'ai',
          timestamp: new Date(Date.now() - (i + 1) * 60000),
        }));

        set((state) => ({
          messages: {
            ...state.messages,
            [currentChatId]: [...olderMessages, ...currentMessages],
          },
        }));
      },
    }),
    {
      name: 'chat-storage',
    }
  )
);
