
import { Message } from "@/types";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useChatStore } from "@/lib/stores/chatStore";
import MessageItem from "./MessageItem";

interface MessageListProps {
  messages: Message[];
}

export default function MessageList({ messages }: MessageListProps) {
  const [ref, inView] = useInView();
  const { loadMoreMessages } = useChatStore();
  const listRef = useRef<HTMLDivElement>(null);
  
  // Load more messages when user scrolls to top
  useEffect(() => {
    if (inView) {
      loadMoreMessages();
    }
  }, [inView, loadMoreMessages]);

  return (
    <div ref={listRef} className="space-y-6 pb-4">
      {messages.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No messages yet. Start a conversation!
          </p>
        </div>
      ) : (
        <>
          <div ref={ref} className="h-1" />
          
          {messages.map((message) => (
            <MessageItem key={message.id} message={message} />
          ))}
        </>
      )}
    </div>
  );
}