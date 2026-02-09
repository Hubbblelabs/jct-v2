'use client';

import React, { useEffect, useRef, useState } from 'react';

interface StatsCounterProps {
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
    duration?: number;
    variant?: 'default' | 'light' | 'accent';
}

export default function StatsCounter({
    value,
    suffix = '',
    prefix = '',
    label,
    duration = 2000,
    variant = 'default',
}: StatsCounterProps) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const startTime = Date.now();
        const endTime = startTime + duration;

        const updateCount = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(easeOutQuart * value);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                setCount(value);
            }
        };

        requestAnimationFrame(updateCount);
    }, [isVisible, value, duration]);

    const variantStyles = {
        default: {
            value: 'text-primary',
            label: 'text-neutral-500',
        },
        light: {
            value: '!text-white',
            label: '!text-white/70',
        },
        accent: {
            value: '!text-accent',
            label: '!text-white/70',
        },
    };

    const styles = variantStyles[variant];

    return (
        <div ref={ref} className="text-center">
            <div className={`text-4xl md:text-5xl lg:text-6xl font-bold ${styles.value} transition-all duration-300`}>
                {prefix}{count.toLocaleString()}{suffix}
            </div>
            <div className={`text-sm md:text-base mt-2 font-medium ${styles.label}`}>
                {label}
            </div>
        </div>
    );
}
