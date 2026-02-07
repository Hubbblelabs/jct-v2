'use client';

import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
    end: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    label: string;
}

export default function Counter({
    end,
    suffix = '',
    prefix = '',
    duration = 2000,
    label,
}: CounterProps) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCount();
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    const animateCount = () => {
        const startTime = Date.now();
        const startValue = 0;

        const tick = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);

            setCount(currentValue);

            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(tick);
    };

    return (
        <div
            ref={counterRef}
            className="text-center p-6"
        >
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
                {prefix}
                <span className={hasAnimated ? 'animate-count-up' : ''}>
                    {count.toLocaleString()}
                </span>
                {suffix}
            </div>
            <div className="text-neutral-600 font-medium">{label}</div>
        </div>
    );
}
