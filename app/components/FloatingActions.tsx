'use client';

import React, { useState } from 'react';
import { MessageCircle, MessageSquareText } from 'lucide-react';
import ChatWidget from './ChatWidget';

export default function FloatingActions() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <>
            {/* Container for buttons to ensure they are above everything */}
            <div className="fixed bottom-6 left-6 z-40">
                {/* WhatsApp Button - Bottom Left */}
                <a
                    href="https://wa.me/919361488801" // Replace with actual number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-[#25D366]/40 cursor-pointer"
                    aria-label="Chat on WhatsApp"
                >
                    <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
                </a>
            </div>

            <div className="fixed bottom-6 right-6 z-40">
                {/* AI Chat Button - Bottom Right */}
                <button
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer ${isChatOpen
                        ? 'bg-neutral-800 text-white rotate-90'
                        : 'bg-primary text-white hover:shadow-primary/40'
                        }`}
                    aria-label="Open AI Chat"
                >
                    {isChatOpen ? (
                        <div className="w-6 h-6 relative">
                            <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-white -translate-y-1/2 rotate-45" />
                            <span className="absolute top-1/2 left-0 w-6 h-0.5 bg-white -translate-y-1/2 -rotate-45" />
                        </div>
                    ) : (
                        <MessageSquareText className="w-6 h-6 md:w-7 md:h-7" />
                    )}
                </button>
            </div>

            {/* Chat Widget */}
            <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </>
    );
}
