
import React from "react";
import { cn } from "@/lib/utils";
import { ChatMessage as ChatMessageType } from "@/utils/chatUtils";

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.type === "user";
  
  return (
    <div
      className={cn(
        "group animate-fade-in w-fit max-w-[80%] md:max-w-[70%] flex flex-col",
        isUser ? "ml-auto" : "mr-auto"
      )}
    >
      <div
        className={cn(
          "px-4 py-3 rounded-2xl shadow-message break-words",
          isUser
            ? "bg-chat-user text-chat-user-foreground rounded-br-sm"
            : "bg-chat-bot text-chat-bot-foreground rounded-bl-sm"
        )}
      >
        <p className="text-sm md:text-base leading-relaxed">{message.text}</p>
      </div>
      <div 
        className={cn(
          "text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity",
          isUser ? "text-right mr-1" : "ml-1"
        )}
      >
        {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </div>
    </div>
  );
};

export default ChatMessage;
