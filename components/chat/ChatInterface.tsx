'use client';
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import InputArea from "./InputArea";
import { useChatStore } from "@/lib/stores/chatStore";
import { useEffect, useRef } from "react";
import TypingIndicator from "./TypingIndicator";

export default function ChatInterface() {
  const { currentChatId, messages, typing } = useChatStore();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  const currentMessages = messages[currentChatId || ""] || [];
  const messageCount = currentMessages.length;

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messageCount, typing]);

  if (!currentChatId) return null;

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <ChatHeader />
      
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 pb-0"
      >
        <MessageList messages={currentMessages} />
        {typing && <TypingIndicator />}
      </div>
      
      <InputArea />
    </div>
  );
}
