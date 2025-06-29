
import React, { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import LoadingDots from "./LoadingDots";
import { generateUniqueId, getAIResponse, ChatMessage as ChatMessageType } from "@/utils/chatUtils";
import { ArrowDown } from "lucide-react";

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial bot message
    const timeout = setTimeout(() => {
      const initialMessage: ChatMessageType = {
        id: generateUniqueId(),
        text: "Hello! I'm your AI assistant. How can I help you today?",
        type: "bot",
        timestamp: new Date()
      };
      setMessages([initialMessage]);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (!chatContainer) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = chatContainer;
      const atBottom = scrollHeight - scrollTop - clientHeight < 100;
      setShowScrollButton(!atBottom);
    };

    chatContainer.addEventListener("scroll", handleScroll);
    return () => chatContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (text: string) => {
    // Add user message
    const userMessage: ChatMessageType = {
      id: generateUniqueId(),
      text,
      type: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      // Get AI response
      const response = await getAIResponse(text);
      
      // Add bot message
      const botMessage: ChatMessageType = {
        id: generateUniqueId(),
        text: response,
        type: "bot",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Error getting AI response:", error);
      
      // Error message
      const errorMessage: ChatMessageType = {
        id: generateUniqueId(),
        text: "I'm sorry, I couldn't process your request. Please try again.",
        type: "bot",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-full relative rounded-3xl shadow-soft bg-white/80 backdrop-blur-sm border border-border overflow-hidden">
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4"
      >
        {messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isTyping && (
          <div className="animate-fade-in w-fit">
            <div className="bg-chat-bot rounded-2xl rounded-bl-sm shadow-message">
              <LoadingDots />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToBottom}
          className="absolute bottom-20 right-4 rounded-full p-2 bg-primary text-primary-foreground shadow-soft animate-bounce-slight"
          aria-label="Scroll to bottom"
        >
          <ArrowDown className="h-4 w-4" />
        </button>
      )}

      <div className="p-4 bg-background/80 backdrop-blur-sm border-t border-border">
        <ChatInput 
          onSendMessage={handleSendMessage} 
          isProcessing={isTyping} 
        />
      </div>
    </div>
  );
};

export default ChatInterface;
