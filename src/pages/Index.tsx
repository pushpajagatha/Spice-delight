
import React from "react";
import ChatInterface from "@/components/ChatInterface";
import { MessageSquare, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <header className="w-full max-w-3xl mb-4 sm:mb-6">
        <div className="flex items-center justify-center md:justify-start gap-2">
          <div className="bg-primary rounded-xl w-10 h-10 flex items-center justify-center shadow-soft">
            <MessageSquare className="text-primary-foreground w-5 h-5" />
          </div>
          <h1 className="text-2xl font-medium">AI Assistant</h1>
        </div>
        <div className="mt-2 text-center md:text-left">
          <p className="text-muted-foreground text-sm">Your intelligent virtual assistant, ready to help</p>
        </div>
        
        <div className="mt-4 flex justify-center md:justify-start">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/menu">
              <UtensilsCrossed className="h-4 w-4" />
              View Restaurant Menu
            </Link>
          </Button>
        </div>
      </header>
      
      <main className="w-full max-w-3xl flex-1 flex flex-col chat-container">
        <ChatInterface />
      </main>
      
      <footer className="w-full max-w-3xl mt-4 text-center">
        <p className="text-xs text-muted-foreground">
          Powered by advanced AI technology
        </p>
      </footer>
    </div>
  );
};

export default Index;
