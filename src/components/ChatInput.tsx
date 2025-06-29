
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isProcessing: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isProcessing }) => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "24px";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isProcessing) {
      onSendMessage(message);
      setMessage("");
      // Reset height
      if (textareaRef.current) {
        textareaRef.current.style.height = "24px";
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-background border border-border rounded-2xl p-1 backdrop-blur-sm flex items-end gap-1 transition-all focus-within:border-primary/50 focus-within:shadow-[0_0_0_1px_rgba(var(--primary-rgb),0.1)]"
    >
      <textarea
        ref={textareaRef}
        className="flex-1 max-h-[120px] resize-none p-2 focus:outline-none bg-transparent text-foreground placeholder:text-muted-foreground text-sm md:text-base"
        placeholder="Ask something..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={1}
        disabled={isProcessing}
      />
      <Button
        type="submit"
        disabled={!message.trim() || isProcessing}
        size="icon"
        className="rounded-xl h-8 w-8 transition-all"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </form>
  );
};

export default ChatInput;
