import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import CollegeHero from '../../components/college/CollegeHero';
import {
    ComputerIcon, DesktopIcon, ChartIcon, BriefcaseIcon, CalculatorIcon, BookIcon,
    TheaterIcon, TrophyIcon, CoffeeIcon
} from '../../components/Icons';

// Lazy load heavy components
const DepartmentGrid = dynamic(() => import('../../components/college/DepartmentGrid'), { ssr: true });
const FacilitiesGallery = dynamic(() => import('../../components/college/FacilitiesGallery'), { ssr: true });
const PlacementStats = dynamic(() => import('../../components/college/PlacementStats'), { ssr: true });

export const metadata = {
    title: 'JCT College of Arts & Science | JCT Institutions',
    description: 'Comprehensive UG & PG programs in Arts, Science, and Commerce with focus on holistic development.',
};

const departments = [
    {
        name: 'Computer Science',
        code: 'B.Sc CS',
        description: 'Foundation in programming, data structures, and software development.',
        href: '/colleges/arts-science/bsc-cs',
        icon: <ComputerIcon />,
        image: '/images/dept-cse.jpg',
    },
    {
        name: 'Computer Applications',
        code: 'BCA',
        description: 'Application-focused computing with emphasis on practical skills.',
        href: '/colleges/arts-science/bca',
        icon: <DesktopIcon />,
        image: '/images/dept-it.jpg',
    },
    {
        name: 'Commerce',
        code: 'B.Com',
        description: 'Comprehensive business education covering accounting, finance, and marketing.',
        href: '/colleges/arts-science/bcom',
        icon: <ChartIcon />,
        image: '/images/dept-commerce.jpg',
    },
    {
        name: 'Business Administration',
        code: 'BBA',
        description: 'Management fundamentals with focus on leadership and entrepreneurship.',
        href: '/colleges/arts-science/bba',
        icon: <BriefcaseIcon />,
        image: '/images/dept-commerce.jpg',
    },
    {
        name: 'Mathematics',
        code: 'B.Sc Maths',
        description: 'Pure and applied mathematics with analytical skill development.',
        href: '/colleges/arts-science/bsc-maths',
        icon: <CalculatorIcon />,
        image: '/images/dept-maths.jpg',
    },
    {
        name: 'English Literature',
        code: 'B.A English',
        description: 'Study of literature, language, and communication skills.',
        href: '/colleges/arts-science/ba-english',
        icon: <BookIcon />,
        image: '/images/dept-english.jpg',
    },
];

const facilities = [
    {
        name: 'Digital Library',
        description: 'Access to thousands of digital resources, journals, and e-books.',
        icon: <BookIcon />,
        image: '/images/facility-library.jpg',
    },
    {
        name: 'Computer Labs',
        description: 'Modern computing facilities with latest software and tools.',
        icon: <ComputerIcon />,
        image: '/images/facility-computer-lab.jpg',
    },
    {
        name: 'Auditorium',
        description: 'Well-equipped venue for cultural events and academic activities.',
        icon: <TheaterIcon />,
        image: '/images/facility-seminar.jpg',
    },
    {
        name: 'Sports Complex',
        description: 'Indoor and outdoor facilities for various sports activities.',
        icon: <TrophyIcon />,
        image: '/images/facility-sports.jpg',
    },
    {
        name: 'Cafeteria',
        description: 'Hygienic dining facilities serving nutritious meals.',
        icon: <CoffeeIcon />,
        image: '/images/facility-cafeteria.jpg',
    },
];

const placementStats = {
    placementRate: '95%',
    averagePackage: '3.5 LPA',
    highestPackage: '8 LPA',
    companiesVisited: '40+',
};

const recruiters = [
    { name: 'TCS', logo: 'https://cdn.simpleicons.org/tcs/white' },
    { name: 'Infosys', logo: 'https://cdn.simpleicons.org/infosys/white' },

    { name: 'Wipro', logo: 'https://cdn.simpleicons.org/wipro/white' },
    // { name: 'HDFC Bank', logo: 'https://cdn.simpleicons.org/hdfc/white' },
    // { name: 'ICICI Bank', logo: 'https://cdn.simpleicons.org/icici/white' },
    { name: 'SAP', logo: 'https://cdn.simpleicons.org/sap/white' },
    { name: 'Cisco', logo: 'https://cdn.simpleicons.org/cisco/white' },
    { name: 'Dell', logo: 'https://cdn.simpleicons.org/dell/white' },
    { name: 'HP', logo: 'https://cdn.simpleicons.org/hp/white' },
    // { name: 'Microsoft', logo: 'https://cdn.simpleicons.org/microsoft/white' }
];

export default function ArtsScienceCollegePage() {
    return (
        <div data-theme="arts-science" className="w-full">
            {/* Hero Section */}
            <CollegeHero
                name="JCT College of Arts & Science"
                shortName="Arts & Science"
                tagline="Nurturing Minds, Building Futures"
                description="Comprehensive undergraduate and postgraduate programs designed to develop well-rounded professionals with strong foundations in their chosen fields."
                image="/images/arts-hero.jpg"
                stats={[
                    { value: '1800+', label: 'Students' },
                    { value: '12', label: 'Programs' },
                    { value: '95%', label: 'Placement' },
                    { value: '40+', label: 'Recruiters' },
                ]}
            />

            {/* About Section */}
            <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-neutral-50 overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />

                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2 mb-6">
                                <span className="w-2 h-2 bg-accent rounded-full" />
                                <span className="text-primary/80 text-sm font-medium">About the College</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                                Excellence in <span className="text-primary">Liberal Education</span>
                            </h2>
                            <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                                JCT College of Arts & Science is committed to providing quality
                                education in arts, science, and commerce disciplines. Affiliated
                                to Bharathiar University, we focus on holistic development of students.
                            </p>
                            <p className="text-neutral-600 leading-relaxed mb-8">
                                Our curriculum blends academic rigor with practical exposure,
                                ensuring students are prepared for both higher studies and
                                professional careers.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2">
                                    <span className="w-2 h-2 bg-accent rounded-full" />
                                    <span className="text-sm font-medium text-primary">Bharathiar University</span>
                                </div>
                                <div className="flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2">
                                    <span className="w-2 h-2 bg-accent rounded-full" />
                                    <span className="text-sm font-medium text-primary">UG & PG Programs</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-secondary-dark shadow-2xl">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: "url('/images/arts-campus.jpg')" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Departments */}
            <DepartmentGrid
                departments={departments}
                title="Academic Programs"
                subtitle="Choose from our diverse range of UG and PG programs"
            />

            {/* Facilities */}
            <FacilitiesGallery
                facilities={facilities}
                title="Campus Facilities"
                subtitle="Modern amenities for a complete learning experience"
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
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[150px]" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
                </div>

                <div className="container relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                            <span className="text-white/90 text-sm font-medium">Start Your Journey</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-white mb-6">
                            Begin Your <span className="text-gradient">Academic Journey</span>
                        </h2>
                        <p className="!text-white/70 text-lg mb-10 max-w-xl mx-auto">
                            Join our vibrant community and unlock your potential with quality education.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="https://admissions.jct.ac.in/" className="btn btn-primary btn-lg animate-pulse-glow">
                                Apply Now
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link href="/contact" className="btn btn-ghost btn-lg">
                                Get More Info
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// SVG Icons
// Icons are now imported from '../../components/Icons'
