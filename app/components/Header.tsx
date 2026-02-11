'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import Image from 'next/image';

const colleges = [
    {
        name: 'JCT College of Engineering & Technology',
        shortName: 'Engineering',
        tag: 'Autonomous',
        href: '/colleges/engineering',
        description: 'B.E./B.Tech programs with NBA accreditation',
        icon: <EngineeringIcon />,
    },
    {
        name: 'JCT College of Arts & Science',
        shortName: 'Arts & Science',
        href: '/colleges/arts-science',
        description: 'UG & PG programs in Arts, Science & Commerce',
        icon: <BookIcon />,
    },
    {
        name: 'JCT Polytechnic College',
        shortName: 'Polytechnic',
        href: '/colleges/polytechnic',
        description: 'Industry-ready Diploma programs',
        icon: <GearIcon />,
    },
];

const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Placements', href: '/placements' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const pathname = usePathname();
    const isEngineering = pathname?.startsWith('/colleges/engineering');
    const isArtsScience = pathname?.startsWith('/colleges/arts-science');
    const isPolytechnic = pathname?.startsWith('/colleges/polytechnic');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isCollegesOpen, setIsCollegesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            data-theme={isArtsScience ? 'arts-science' : isPolytechnic ? 'polytechnic' : undefined}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-lg shadow-lg py-2'
                : 'bg-white py-3'
                }`}>
            <div className="container relative">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 sm:gap-3 group z-50 relative">
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-transform group-hover:scale-105 shrink-0">
                            <Image
                                src="/jct_logo.svg"
                                alt="JCT Logo"
                                width={190}
                                height={48}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="block">
                            <div className="font-bold text-primary text-sm sm:text-lg leading-tight max-w-[200px] sm:max-w-none">
                                {isEngineering ? 'JCT College of Engineering & Technology' :
                                    isArtsScience ? 'JCT College of Arts & Science' :
                                        isPolytechnic ? 'JCT Polytechnic College' : 'JCT Institutions'}
                            </div>
                            <div className="text-[10px] sm:text-xs text-neutral-500">Excellence in Education</div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {/* Colleges Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setIsCollegesOpen(true)}
                            onMouseLeave={() => setIsCollegesOpen(false)}
                        >
                            <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-neutral-700 hover:text-primary hover:bg-primary/5 transition-colors font-medium">
                                Colleges
                                <ChevronDownIcon className={`w-4 h-4 transition-transform ${isCollegesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Mega Menu */}
                            <div className={`absolute top-full left-0 pt-2 transition-all duration-200 ${isCollegesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                                }`}>
                                <div className="bg-white rounded-2xl shadow-2xl border border-neutral-100 p-6 w-[480px]">
                                    <div className="grid gap-4">
                                        {colleges.map((college) => (
                                            <Link
                                                key={college.name}
                                                href={college.href}
                                                className="flex items-start gap-4 p-3 rounded-xl hover:bg-neutral-50 transition-colors group"
                                            >
                                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                                    {college.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-semibold text-neutral-900 group-hover:text-primary transition-colors">
                                                            {college.shortName}
                                                        </span>
                                                        {college.tag && (
                                                            <span className="badge badge-primary text-xs">
                                                                {college.tag}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-sm text-neutral-500 mt-0.5">{college.description}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-neutral-100">
                                        <Link href="/colleges" className="text-sm text-primary font-medium hover:underline flex items-center gap-1">
                                            View All Colleges
                                            <ArrowRightIcon className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        {quickLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 rounded-lg text-neutral-700 hover:text-primary hover:bg-primary/5 transition-colors font-medium whitespace-nowrap"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA & Mobile Menu */}
                    <div className="flex items-center gap-3">
                        {/* Phone Number - Visible on Mobile/Tablet */}
                        <a href="tel:+919361488801" className="flex lg:hidden items-center gap-2 text-sm font-medium text-neutral-600 hover:text-primary transition-colors mr-2 whitespace-nowrap">
                            <PhoneIcon className="w-4 h-4" />
                            <span>+91 93614 88801</span>
                        </a>

                        {/* Phone Number - Desktop (LG+) */}
                        <a href="tel:+919361488801" className="hidden lg:flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-primary transition-colors mr-2 whitespace-nowrap">
                            <PhoneIcon className="w-4 h-4" />
                            <span>+91 93614 88801</span>
                        </a>

                        <div className="hidden lg:block">
                            <Link href="https://admissions.jct.ac.in/" className="btn btn-primary">
                                Apply Now
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center z-50 relative"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-neutral-100 transition-all duration-300 origin-top ${isMobileMenuOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'
                    }`}>
                    <div className="p-4 space-y-2 max-h-[80vh] overflow-y-auto">
                        {colleges.map((college) => (
                            <Link
                                key={college.name}
                                href={college.href}
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    {college.icon}
                                </div>
                                <div>
                                    <span className="font-medium text-sm sm:text-base">{college.shortName}</span>
                                    {college.tag && (
                                        <span className="ml-2 badge badge-primary text-[10px] sm:text-xs">{college.tag}</span>
                                    )}
                                </div>
                            </Link>
                        ))}
                        <div className="pt-2 border-t border-neutral-100 mt-2">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="block p-3 text-neutral-700 hover:text-primary font-medium"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="pt-2 border-t border-neutral-100 mt-2">
                            <a
                                href="tel:+919361488801"
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50 text-neutral-700 hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    <PhoneIcon className="w-5 h-5" />
                                </div>
                                <span className="font-medium">+91 93614 88801</span>
                            </a>
                        </div>
                        <div className="pt-4 pb-2">
                            <Link href="https://admissions.jct.ac.in/" className="btn btn-primary w-full justify-center">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

// SVG Icons
function EngineeringIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
    );
}

function BookIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
    );
}

function GearIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );
}

function ChevronDownIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    );
}

function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
    );
}

function MenuIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}

function PhoneIcon({ className }: { className?: string }) {
    return (
        <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
    );
}
