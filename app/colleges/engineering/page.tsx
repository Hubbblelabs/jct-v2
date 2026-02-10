import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import CollegeHero from '../../components/college/CollegeHero';
import {
    ComputerIcon, SignalIcon, BoltIcon, GearIcon, BuildingIcon, GlobeIcon,
    LightbulbIcon, ChipIcon, BookIcon, WrenchIcon,
    // MicrophoneIcon, // Not used in active code
    TrophyIcon
} from '../../components/Icons';

// Lazy load heavy components
const DepartmentGrid = dynamic(() => import('../../components/college/DepartmentGrid'), { ssr: true });
const FacilitiesGallery = dynamic(() => import('../../components/college/FacilitiesGallery'), { ssr: true });
const PlacementStats = dynamic(() => import('../../components/college/PlacementStats'), { ssr: true });

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
    // {
    //     name: 'Seminar Hall',
    //     description: 'Modern auditorium for conferences, seminars, and events.',
    //     icon: <MicrophoneIcon />,
    //     image: '/images/facility-seminar.jpg',
    // },
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
                            <Link href="https://admissions.jct.ac.in/" className="btn btn-primary btn-lg animate-pulse-glow">
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
// Icons are now imported from '../../components/Icons'
