'use client';

import React, { useState } from 'react';

interface VideoModalProps {
    videoUrl: string;
    title: string;
    onClose: () => void;
}

export default function VideoModal({ videoUrl, title, onClose }: VideoModalProps) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

            {/* Modal */}
            <div
                className="relative w-full max-w-5xl animate-scale-in"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors flex items-center gap-2"
                >
                    <span className="text-sm">Close</span>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                        <CloseIcon />
                    </div>
                </button>

                {/* Title */}
                <h3 className="text-white text-xl font-semibold mb-4">{title}</h3>

                {/* Video Container */}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
                    <iframe
                        src={videoUrl}
                        title={title}
                        className="absolute inset-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
}

function CloseIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}
