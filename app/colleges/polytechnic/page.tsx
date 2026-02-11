import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import CollegeHero from '../../components/college/CollegeHero';
import {
    ComputerIcon, GearIcon, BoltIcon, BuildingIcon, SignalIcon, CarIcon,
    WrenchIcon, RulerIcon
} from '../../components/Icons';

// Lazy load heavy components
const DepartmentGrid = dynamic(() => import('../../components/college/DepartmentGrid'), { ssr: true });
const FacilitiesGallery = dynamic(() => import('../../components/college/FacilitiesGallery'), { ssr: true });
const PlacementStats = dynamic(() => import('../../components/college/PlacementStats'), { ssr: true });

export const metadata = {
    title: 'JCT Polytechnic College | JCT Institutions',
    description: 'Industry-ready diploma programs with hands-on training and strong industry partnerships.',
};

const departments = [
    {
        name: 'Computer Engineering',
        code: 'DCE',
        description: 'Diploma in computer hardware, software, and networking fundamentals.',
        href: '/colleges/polytechnic/dce',
        icon: <ComputerIcon />,
        image: '/images/dept-cse.jpg',
    },
    {
        name: 'Mechanical Engineering',
        code: 'DME',
        description: 'Hands-on training in manufacturing, design, and automotive systems.',
        href: '/colleges/polytechnic/dme',
        icon: <GearIcon />,
        image: '/images/dept-mech.jpg',
    },
    {
        name: 'Electrical & Electronics',
        code: 'DEEE',
        description: 'Practical skills in electrical systems, wiring, and electronics.',
        href: '/colleges/polytechnic/deee',
        icon: <BoltIcon />,
        image: '/images/dept-eee.jpg',
    },
    {
        name: 'Civil Engineering',
        code: 'DCivil',
        description: 'Training in construction, surveying, and structural basics.',
        href: '/colleges/polytechnic/dcivil',
        icon: <BuildingIcon />,
        image: '/images/dept-civil.jpg',
    },
    {
        name: 'Electronics & Communication',
        code: 'DECE',
        description: 'Foundation in communication systems and electronic devices.',
        href: '/colleges/polytechnic/dece',
        icon: <SignalIcon />,
        image: '/images/dept-ece.jpg',
    },
    {
        name: 'Automobile Engineering',
        code: 'DAE',
        description: 'Specialization in vehicle systems, maintenance, and repair.',
        href: '/colleges/polytechnic/dae',
        icon: <CarIcon />,
        image: '/images/dept-auto.jpg',
    },
];

const facilities = [
    {
        name: 'Mechanical Workshop',
        description: 'Industry-grade machinery for hands-on training in manufacturing.',
        icon: <WrenchIcon />,
        image: '/images/facility-workshop.jpg',
    },
    {
        name: 'Computer Lab',
        description: 'Modern computing facilities with CAD/CAM software.',
        icon: <ComputerIcon />,
        image: '/images/facility-computer-lab.jpg',
    },
    {
        name: 'Electrical Lab',
        description: 'Well-equipped lab for practical electrical experiments.',
        icon: <BoltIcon />,
        image: '/images/facility-electronics-lab.jpg',
    },
    {
        name: 'Automobile Workshop',
        description: 'Real vehicle components for practical learning.',
        icon: <CarIcon />,
        image: '/images/dept-auto.jpg',
    },
    {
        name: 'Surveying Lab',
        description: 'Modern surveying equipment for civil engineering students.',
        icon: <RulerIcon />,
        image: '/images/facility-survey.jpg',
    },
];

const placementStats = {
    placementRate: '98%',
    averagePackage: '2.5 LPA',
    highestPackage: '5 LPA',
    companiesVisited: '35+',
};

const recruiters = [
    { name: 'TCS', logo: 'https://cdn.simpleicons.org/tcs/white' },
  { name: 'Infosys', logo: 'https://cdn.simpleicons.org/infosys/white' },
  { name: 'Wipro', logo: 'https://cdn.simpleicons.org/wipro/white' },
    { name: 'Cisco', logo: 'https://cdn.simpleicons.org/cisco/white' },
    { name: 'Dell', logo: 'https://cdn.simpleicons.org/dell/white' },
    { name: 'HP', logo: 'https://cdn.simpleicons.org/hp/white' },
    // { name: 'Microsoft', logo: 'https://cdn.simpleicons.org/microsoft/white' }
];

export default function PolytechnicCollegePage() {
    return (
        <div data-theme="polytechnic" className="w-full">
            {/* Hero Section */}
            <CollegeHero
                name="JCT Polytechnic College"
                shortName="Polytechnic"
                tagline="Skill-Based Technical Education"
                description="Industry-ready diploma programs with emphasis on practical training, workshop experience, and strong industry partnerships for immediate employment."
                image="/images/polytechnic-hero.jpg"
                stats={[
                    { value: '1200+', label: 'Students' },
                    { value: '6', label: 'Programs' },
                    { value: '98%', label: 'Placement' },
                    { value: '35+', label: 'Companies' },
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
                                Practical <span className="text-gradient">Technical Training</span>
                            </h2>
                            <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                                JCT Polytechnic College offers diploma programs approved by AICTE
                                and affiliated to DOTE. Our focus is on developing skilled
                                technicians who are industry-ready from day one.
                            </p>
                            <p className="text-neutral-600 leading-relaxed mb-8">
                                With extensive workshop training, industry internships, and
                                hands-on project work, our students gain practical experience
                                that employers value.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2">
                                    <span className="w-2 h-2 bg-accent rounded-full" />
                                    <span className="text-sm font-medium text-primary">AICTE Approved</span>
                                </div>
                                <div className="flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2">
                                    <span className="w-2 h-2 bg-accent rounded-full" />
                                    <span className="text-sm font-medium text-primary">DOTE Affiliated</span>
                                </div>
                                <div className="flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2">
                                    <span className="w-2 h-2 bg-accent rounded-full" />
                                    <span className="text-sm font-medium text-primary">Industry Training</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-tertiary to-tertiary-light shadow-2xl">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: "url('/images/polytechnic-campus.jpg')" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Departments */}
            <DepartmentGrid
                departments={departments}
                title="Diploma Programs"
                subtitle="3-year diploma courses with industry-focused curriculum"
            />

            {/* Facilities */}
            <FacilitiesGallery
                facilities={facilities}
                title="Workshop & Labs"
                subtitle="Hands-on training facilities with industry-standard equipment"
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
                            <span className="text-white/90 text-sm font-medium">Start Your Career</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-white mb-6">
                            Start Your <span className="text-gradient">Technical Career</span>
                        </h2>
                        <p className="!text-white/70 text-lg mb-10 max-w-xl mx-auto">
                            Get industry-ready skills and kickstart your career with hands-on training.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="https://admissions.jct.ac.in/" className="btn btn-primary btn-lg animate-pulse-glow">
                                Apply Now
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                            <Link href="/contact" className="btn btn-ghost btn-lg">
                                Contact Admissions
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
