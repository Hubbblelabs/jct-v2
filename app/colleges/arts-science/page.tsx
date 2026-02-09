import React from 'react';
import Link from 'next/link';
import CollegeHero from '../../components/college/CollegeHero';
import DepartmentGrid from '../../components/college/DepartmentGrid';
import FacilitiesGallery from '../../components/college/FacilitiesGallery';
import PlacementStats from '../../components/college/PlacementStats';

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
    { name: 'TCS' },
    { name: 'Infosys' },
    { name: 'CTS' },
    { name: 'Wipro' },
    { name: 'HDFC Bank' },
    { name: 'ICICI Bank' },
];

export default function ArtsScienceCollegePage() {
    return (
        <>
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
                                Excellence in <span className="text-gradient">Liberal Education</span>
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
                            <Link href="/apply" className="btn btn-primary btn-lg animate-pulse-glow">
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

function DesktopIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
    );
}

function ChartIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
    );
}

function BriefcaseIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
    );
}

function CalculatorIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
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

function TheaterIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
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

function CoffeeIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
        </svg>
    );
}
