'use client';

import React from 'react';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    type?: 'button' | 'submit';
}

export default function Button({
    variant = 'primary',
    size = 'md',
    href,
    onClick,
    children,
    className = '',
    type = 'button',
}: ButtonProps) {
    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const baseClasses = `btn btn-${variant} ${sizeClasses[size]} ${className}`;

    if (href) {
        return (
            <a href={href} className={baseClasses}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={baseClasses}>
            {children}
        </button>
    );
}
