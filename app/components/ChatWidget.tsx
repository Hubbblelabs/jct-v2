'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Loader2 } from 'lucide-react';

interface Message {
    id: string;
    role: 'bot' | 'user';
    text: string;
    timestamp: Date;
}

interface ChatWidgetProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ChatWidget({ isOpen, onClose }: ChatWidgetProps) {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            role: 'bot',
            text: 'Hello! I am the JCT AI Assistant. How can I help you today regarding admissions, courses, or campus life?',
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            text: input,
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        // Simulate AI response delay
        setTimeout(() => {
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'bot',
                text: "Thank you for your message. Our admissions team will get back to you shortly. In the meantime, you can explore our 'Colleges' section for more details.",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMessage]);
            setIsLoading(false);
        }, 1500);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-0 right-0 md:bottom-24 md:right-6 w-full md:w-96 h-[80vh] md:h-[600px] bg-white md:rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-slide-up border border-neutral-200">
            {/* Header */}
            <div className="p-4 bg-primary-dark text-white flex items-center justify-between shadow-md shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                        <Bot className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                        <h3 className="font-bold text-sm text-gradient">JCT Assistant</h3>
                        <p className="text-xs text-white/70 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            Online
                        </p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    aria-label="Close chat"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50 scrollbar-thin">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-[80%] rounded-2xl p-3 text-sm leading-relaxed shadow-sm ${msg.role === 'user'
                                    ? 'bg-primary text-white rounded-tr-none'
                                    : 'bg-white text-neutral-800 rounded-tl-none border border-neutral-100'
                                }`}
                        >
                            {msg.text}
                            <div
                                className={`text-[10px] mt-1 text-right ${msg.role === 'user' ? 'text-white/70' : 'text-neutral-400'
                                    }`}
                            >
                                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                        </div>
                    </div>
                ))}

                {isLoading && (
                    <div className="flex justify-start">
                        <div className="bg-white rounded-2xl rounded-tl-none p-3 border border-neutral-100 shadow-sm flex items-center gap-2">
                            <Loader2 className="w-4 h-4 text-primary animate-spin" />
                            <span className="text-xs text-neutral-500">Typing...</span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-neutral-100 shrink-0">
                <form onSubmit={handleSend} className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 bg-neutral-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
                    />
                    <button
                        type="submit"
                        disabled={!input.trim() || isLoading}
                        className="bg-primary hover:bg-primary-dark text-white p-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <Send className="w-5 h-5" />
                    </button>
                </form>
                <div className="text-center mt-2">
                    <p className="text-[10px] text-neutral-400">
                        Powered by JCT AI • Responses may be generated by AI
                    </p>
                </div>
            </div>
        </div>
    );
}
