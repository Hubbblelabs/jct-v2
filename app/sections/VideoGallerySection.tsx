'use client';

import React, { useState } from 'react';
import VideoModal from '../components/VideoModal';

const videos = [
    {
        id: 1,
        title: 'Campus Tour',
        thumbnail: '/images/video-campus.jpg',
        videoUrl: 'https://www.youtube.com/embed/RBzA0cneWRA',
        duration: '3:45',
        category: 'Campus',
    },
    {
        id: 2,
        title: 'Student Life at JCT',
        thumbnail: '/images/video-students.jpg',
        videoUrl: 'https://www.youtube.com/embed/RBzA0cneWRA',
        duration: '4:20',
        category: 'Students',
    },
    {
        id: 3,
        title: 'Placement Success Stories',
        thumbnail: '/images/video-placements.jpg',
        videoUrl: 'https://www.youtube.com/embed/RBzA0cneWRA',
        duration: '5:15',
        category: 'Placements',
    },
    {
        id: 4,
        title: 'Research & Innovation',
        thumbnail: '/images/video-research.jpg',
        videoUrl: 'https://www.youtube.com/embed/RBzA0cneWRA',
        duration: '4:00',
        category: 'Research',
    },
];

const categories = ['All', 'Campus', 'Students', 'Placements', 'Research'];

export default function VideoGallerySection() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

    const filteredVideos = activeCategory === 'All'
        ? videos
        : videos.filter(v => v.category === activeCategory);

    return (
        <section className="section bg-white" id="gallery">
            <div className="container">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
                    <div className="max-w-2xl">
                        <div className="section-eyebrow">
                            <span>Media Gallery</span>
                        </div>
                        <h2 className="section-title">
                            Experience <span className="text-gradient">JCT</span>
                        </h2>
                        <p className="section-subtitle">
                            Take a virtual tour and discover what makes our campus special
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                        ? 'bg-primary text-white shadow-md'
                                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Video Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredVideos.map((video, index) => (
                        <button
                            key={video.id}
                            onClick={() => setSelectedVideo(video)}
                            className="group relative rounded-2xl overflow-hidden aspect-video bg-neutral-200 cursor-pointer"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Thumbnail */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url('${video.thumbnail}')` }}
                            />

                            {/* Fallback Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light opacity-80" />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                                    <PlayIcon />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs text-white/70 bg-white/10 px-2 py-0.5 rounded">
                                        {video.duration}
                                    </span>
                                    <span className="text-xs text-accent">{video.category}</span>
                                </div>
                                <h4 className="text-white font-semibold text-sm group-hover:text-accent transition-colors">
                                    {video.title}
                                </h4>
                            </div>
                        </button>
                    ))}
                </div>

                {/* View All Link */}
                <div className="text-center mt-10">
                    <a href="/gallery" className="btn btn-outline">
                        View All Videos
                        <ArrowIcon />
                    </a>
                </div>
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <VideoModal
                    videoUrl={selectedVideo.videoUrl}
                    title={selectedVideo.title}
                    onClose={() => setSelectedVideo(null)}
                />
            )}
        </section>
    );
}

function PlayIcon() {
    return (
        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
        </svg>
    );
}

function ArrowIcon() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
    );
}
