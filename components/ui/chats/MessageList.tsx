// MessageList.tsx
import { useChatStore } from "@/lib/stores/chatStore";

export function MessageList() {
  const { messages, currentChatId } = useChatStore();
  
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((msg) => (
        <MessageItem key={msg.id} message={msg} />
      ))}
    </div>
  );
}