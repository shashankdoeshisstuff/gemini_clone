import { Message } from "@/types";
import { format } from "date-fns";
import CopyButton from "@/components/ui/CopyButton";
import { User, Bot } from "lucide-react";
import Image from "next/image";

interface MessageItemProps {
  message: Message;
}

export default function MessageItem({ message }: MessageItemProps) {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[80%] rounded-xl p-4 ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>
        <div className="flex items-start gap-3">
          <div className="mt-1">
            {isUser ? (
              <User className="h-5 w-5" />
            ) : (
              <Bot className="h-5 w-5" />
            )}
          </div>
          
          <div className="flex-1">
            {message.image && (
              <div className="mb-2 relative w-full max-w-full h-auto">
                <Image
                  src={message.image}
                  alt="Uploaded"
                  unoptimized
                  width={400}
                  height={400}
                  className="rounded-lg object-contain"
                />
              </div>
            )}

            
            {message.content && (
              <p className="whitespace-pre-wrap break-words">
                {message.content}
              </p>
            )}
            
            <div className={`flex justify-between mt-2 text-xs ${isUser ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
              <span>
                {format(new Date(message.timestamp), 'h:mm a')}
              </span>
              <CopyButton text={message.content || message.image || ""} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}