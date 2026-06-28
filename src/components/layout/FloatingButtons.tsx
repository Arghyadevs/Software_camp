"use client";

import { useState, useEffect } from "react";
import { ArrowUp, Phone, MessageSquare, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";

// Custom WhatsApp Icon Component since lucide doesn't have one matching exactly our style
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12.031 21.082a9.92 9.92 0 0 1-4.733-1.196l-.34-.202-3.522.923.94-3.436-.222-.353A9.907 9.907 0 0 1 2.656 11.5 9.954 9.954 0 0 1 12.613 1.545a9.96 9.96 0 0 1 7.042 2.925 9.96 9.96 0 0 1 2.92 7.047 9.957 9.957 0 0 1-9.958 9.953l-.586-.388zm-4.321-2.073a8.232 8.232 0 0 0 4.312 1.205 8.27 8.27 0 0 0 8.274-8.27 8.28 8.28 0 0 0-2.428-5.854 8.281 8.281 0 0 0-5.856-2.43 8.27 8.27 0 0 0-8.273 8.27 8.238 8.238 0 0 0 1.267 4.394l.115.183-.558 2.037 2.086-.547.191.112h-.13zm7.048-5.011c-.244-.122-1.442-.71-1.666-.791-.223-.082-.387-.122-.549.122-.162.245-.629.791-.77 9.53-.141.162-.284.184-.528.062a6.679 6.679 0 0 1-1.956-1.21 7.234 7.234 0 0 1-1.355-1.688c-.141-.244-.015-.377.107-.499.11-.11.245-.285.367-.428.122-.143.162-.245.244-.407.082-.163.041-.305-.02-.428-.061-.122-.55-1.325-.752-1.814-.197-.474-.397-.41-.55-.417l-.467-.008a.895.895 0 0 0-.646.301c-.224.244-.852.833-.852 2.033 0 1.2.873 2.36 1 2.523.121.163 1.716 2.62 4.156 3.673 1.341.58 1.884.62 2.584.524.63-.087 1.443-.59 1.646-1.16.203-.57.203-1.058.142-1.16-.06-.102-.222-.163-.466-.285z" />
  </svg>
);

export function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: "ai", text: "Hello! Welcome to Software Camp. How can I help you today?" }
  ]);
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;
    
    setChatMessages([...chatMessages, { role: "user", text: messageInput }]);
    setMessageInput("");
    
    // Simulate AI response
    setTimeout(() => {
      setChatMessages(prev => [...prev, { role: "ai", text: "Thanks for your message! Our human agents are currently busy, but we'll get back to you shortly. Please use WhatsApp for urgent queries." }]);
    }, 1000);
  };

  return (
    <>
      {/* AI Chat Window */}
      <div className={cn(
        "fixed bottom-24 right-6 w-[350px] h-[500px] glass rounded-2xl flex flex-col overflow-hidden transition-all duration-300 z-50 origin-bottom-right",
        isChatOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
      )}>
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-[var(--color-primary)]" />
            </div>
            <div>
              <h4 className="text-white font-semibold">AI Assistant</h4>
              <p className="text-white/80 text-xs">Online</p>
            </div>
          </div>
          <button onClick={() => setIsChatOpen(false)} className="text-white hover:bg-white/20 p-1 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Chat Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
          {chatMessages.map((msg, idx) => (
            <div key={idx} className={cn("max-w-[85%] rounded-2xl p-3 text-sm", msg.role === "ai" ? "bg-[var(--color-surface)] border border-[var(--color-border)] text-white mr-auto rounded-tl-none" : "bg-[var(--color-primary)] text-black ml-auto rounded-tr-none")}>
              {msg.text}
            </div>
          ))}
        </div>
        
        {/* Chat Input */}
        <div className="p-4 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input 
              type="text" 
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Type your message..." 
              className="flex-1 bg-background border border-[var(--color-border)] rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-[var(--color-primary)]"
            />
            <button type="submit" className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-black shrink-0 hover:scale-105 transition-transform">
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* AI Chat Button */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-12 h-12 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center text-white shadow-[0_0_15px_rgba(0,240,255,0.4)] hover:scale-110 transition-transform relative group"
          aria-label="AI Assistant"
        >
          {isChatOpen ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
          <span className="absolute right-full mr-4 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            AI Assistant
          </span>
        </button>
      {/* Call Button */}
      <a
        href="tel:+919732740816"
        className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform relative group"
        aria-label="Call Now"
      >
        <Phone className="w-5 h-5" />
        <span className="absolute right-full mr-4 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
          Call Now
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919732740816"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform relative group"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
          Chat on WhatsApp
        </span>
      </a>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={cn(
          "w-12 h-12 bg-[var(--color-surface)] backdrop-blur border border-[var(--color-border)] rounded-full flex items-center justify-center text-white shadow-lg hover:bg-[var(--color-primary)] hover:text-black transition-all",
          showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
        aria-label="Back to Top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
    </>
  );
}
