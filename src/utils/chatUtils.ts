
export type MessageType = 'user' | 'bot';

export interface ChatMessage {
  id: string;
  text: string;
  type: MessageType;
  timestamp: Date;
}

export function generateUniqueId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

// Simulate AI response with a delay
export function getAIResponse(message: string): Promise<string> {
  const responses = [
    "I'm here to help you with any questions you might have.",
    "That's an interesting question. Let me think about that.",
    "I understand what you're asking. Here's what I can tell you...",
    "I'm processing your request. Is there anything specific you'd like to know?",
    "Thank you for your message. I'm happy to assist you with that.",
    "I'm always learning and trying to improve my responses.",
    "I appreciate your patience while I formulate the best response.",
    "I'm designed to be helpful, harmless, and honest in my interactions.",
    "Let me know if you need more information on this topic.",
    "I'm here to make your experience as seamless as possible."
  ];

  // Add some product-specific responses
  if (message.toLowerCase().includes("feature")) {
    responses.push("Our product has many amazing features that can help you be more productive.");
  }
  
  if (message.toLowerCase().includes("price") || message.toLowerCase().includes("cost")) {
    responses.push("We offer flexible pricing plans to suit different needs and budgets.");
  }
  
  if (message.toLowerCase().includes("help") || message.toLowerCase().includes("support")) {
    responses.push("Our support team is available 24/7 to help you with any issues you might encounter.");
  }

  return new Promise((resolve) => {
    // Random response time between 1 and 3 seconds
    const delay = Math.floor(Math.random() * 2000) + 1000;
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * responses.length);
      resolve(responses[randomIndex]);
    }, delay);
  });
}
