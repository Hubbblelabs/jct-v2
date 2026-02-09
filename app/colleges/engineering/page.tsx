import React from 'react';
import Link from 'next/link';
import CollegeHero from '../../components/college/CollegeHero';
import DepartmentGrid from '../../components/college/DepartmentGrid';
import FacilitiesGallery from '../../components/college/FacilitiesGallery';
import PlacementStats from '../../components/college/PlacementStats';

export const metadata = {
    title: 'JCT College of Engineering & Technology | JCT Institutions',
    description: 'Autonomous institution offering B.E./B.Tech programs with NBA accreditation, excellent placements, and world-class infrastructure.',
};

const departments = [
    {
        name: 'Computer Science & Engineering',
        code: 'CSE',
        description: 'Learn cutting-edge technologies including AI, ML, Cloud Computing, and Full-Stack Development.',
        href: '/colleges/engineering/cse',
        icon: <ComputerIcon />,
        image: '/images/dept-cse.jpg',
    },
    {
        name: 'Electronics & Communication',
        code: 'ECE',
        description: 'Master embedded systems, VLSI design, signal processing, and wireless communications.',
        href: '/colleges/engineering/ece',
        icon: <SignalIcon />,
        image: '/images/dept-ece.jpg',
    },
    {
        name: 'Electrical & Electronics',
        code: 'EEE',
        description: 'Focus on power systems, renewable energy, control systems, and electrical machines.',
        href: '/colleges/engineering/eee',
        icon: <BoltIcon />,
        image: '/images/dept-eee.jpg',
    },
    {
        name: 'Mechanical Engineering',
        code: 'MECH',
        description: 'Study design, manufacturing, thermal engineering, and automotive technologies.',
        href: '/colleges/engineering/mech',
        icon: <GearIcon />,
        image: '/images/dept-mech.jpg',
    },
    {
        name: 'Civil Engineering',
        code: 'CIVIL',
        description: 'Master structural design, construction management, and environmental engineering.',
        href: '/colleges/engineering/civil',
        icon: <BuildingIcon />,
        image: '/images/dept-civil.jpg',
    },
    {
        name: 'Information Technology',
        code: 'IT',
        description: 'Specialize in software development, networking, cybersecurity, and database management.',
        href: '/colleges/engineering/it',
        icon: <GlobeIcon />,
        image: '/images/dept-it.jpg',
    },
];

const facilities = [
    {
        name: 'Advanced Computing Lab',
        description: 'State-of-the-art computer labs with high-performance workstations and latest software.',
        icon: <ComputerIcon />,
        image: '/images/facility-computer-lab.jpg',
    },
    {
        name: 'Innovation Hub',
        description: 'Dedicated space for student projects, startups, and entrepreneurship activities.',
        icon: <LightbulbIcon />,
        image: '/images/facility-innovation.jpg',
    },
    {
        name: 'Electronics Lab',
        description: 'Fully equipped with modern testing and measurement equipment.',
        icon: <ChipIcon />,
        image: '/images/facility-electronics-lab.jpg',
    },
    {
        name: 'Central Library',
        description: 'Extensive collection of books, journals, and digital resources.',
        icon: <BookIcon />,
        image: '/images/facility-library.jpg',
    },
    {
        name: 'Workshop',
        description: 'Hands-on training facilities with industry-grade machinery.',
        icon: <WrenchIcon />,
        image: '/images/facility-workshop.jpg',
    },
    {
        name: 'Seminar Hall',
        description: 'Modern auditorium for conferences, seminars, and events.',
        icon: <MicrophoneIcon />,
        image: '/images/facility-seminar.jpg',
    },
];

const placementStats = {
    placementRate: '100%',
    averagePackage: '4.5 LPA',
    highestPackage: '12 LPA',
    companiesVisited: '65+',
};

const recruiters = [
    { name: 'TCS' },
    { name: 'Infosys' },
    { name: 'Wipro' },
    { name: 'Cognizant' },
    { name: 'HCL' },
    { name: 'Tech Mahindra' },
    { name: 'Zoho' },
    { name: 'Amazon' },
];

export default function EngineeringCollegePage() {
    return (
        <>
            {/* Hero Section */}
            <CollegeHero
                name="JCT College of Engineering & Technology"
                shortName="Engineering & Technology"
                tagline="Where Innovation Meets Excellence"
                description="An autonomous institution offering world-class engineering education with NBA accredited programs, industry partnerships, and 100% placement support."
                tag="Autonomous"
                image="/images/engineering-hero.jpg"
                stats={[
                    { value: '2500+', label: 'Students' },
                    { value: '8', label: 'Programs' },
                    { value: '100%', label: 'Placement' },
                    { value: '65+', label: 'Recruiters' },
                ]}
            />

            {/* About Section */}
            <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-neutral-50 overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px]" />

                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2 mb-6">
                                <span className="w-2 h-2 bg-accent rounded-full" />
                                <span className="text-primary/80 text-sm font-medium">About the College</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                                Shaping Future <span className="text-gradient">Engineers</span>
                            </h2>
                            <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                                JCT College of Engineering & Technology, established in 2008, is an
                                autonomous institution affiliated to Anna University. We are committed
                                to providing quality technical education that meets global standards.
                            </p>
                            <p className="text-neutral-600 leading-relaxed mb-8">
                                Our institution boasts NBA accredited programs, experienced faculty,
                                modern infrastructure, and strong industry connections that ensure
                                our students are industry-ready from day one.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2">
                                    <span className="w-2 h-2 bg-accent rounded-full" />
                                    <span className="text-sm font-medium text-primary">NAAC &apos;A&apos; Grade</span>
                                </div>
                                <div className="flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2">
                                    <span className="w-2 h-2 bg-accent rounded-full" />
                                    <span className="text-sm font-medium text-primary">NBA Accredited</span>
                                </div>
                                <div className="flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2">
                                    <span className="w-2 h-2 bg-accent rounded-full" />
                                    <span className="text-sm font-medium text-primary">Autonomous</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-primary-light shadow-2xl">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: "url('/images/engineering-campus.jpg')" }}
                                />
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-neutral-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-primary-dark">
                                        <TrophyIcon />
                                    </div>
                                    <div>
                                        <div className="text-sm text-neutral-500">Since</div>
                                        <div className="text-2xl font-bold text-primary">2008</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Departments */}
            <DepartmentGrid
                departments={departments}
                title="Academic Departments"
                subtitle="Choose from our range of B.E./B.Tech programs"
            />

            {/* Facilities */}
            <FacilitiesGallery
                facilities={facilities}
                title="World-Class Infrastructure"
                subtitle="Modern facilities designed for excellence in learning"
            />

            {/* Placements */}
            <PlacementStats
                stats={placementStats}
                recruiters={recruiters}
            />

            {/* CTA Section */}
            <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-dark via-primary to-primary-dark overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 decoration-dots opacity-[0.05]" />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px]" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
                </div>

                <div className="container relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                            <span className="text-white/90 text-sm font-medium">Start Your Journey</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-white mb-6">
                            Ready to Start Your <br className="hidden sm:block" />
                            <span className="text-gradient">Engineering Journey?</span>
                        </h2>
                        <p className="!text-white/70 text-lg mb-10 max-w-xl mx-auto">
                            Join our community of innovators and begin your path to success with world-class education.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/apply" className="btn btn-primary btn-lg animate-pulse-glow">
                                Apply Now
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link href="/contact" className="btn btn-ghost btn-lg">
                                Schedule a Visit
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// SVG Icons
function ComputerIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
    );
}

function SignalIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
        </svg>
    );
}

function BoltIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
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

function BuildingIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
    );
}

function GlobeIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
    );
}

function LightbulbIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
    );
}

function ChipIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
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

function WrenchIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
    );
}

function MicrophoneIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
        </svg>
    );
}

function TrophyIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m3.044.568a6.003 6.003 0 00-2.062-.795m2.062.795a6.003 6.003 0 003.386-4.956c.962-.203 1.934-.377 2.916-.52V4.5a6.003 6.003 0 01-2.916 5.228M14.27 9.728a6.726 6.726 0 01-2.748 1.35" />
        </svg>
    );
}
