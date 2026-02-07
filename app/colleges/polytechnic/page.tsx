import React from 'react';
import Link from 'next/link';
import CollegeHero from '../../components/college/CollegeHero';
import DepartmentGrid from '../../components/college/DepartmentGrid';
import FacilitiesGallery from '../../components/college/FacilitiesGallery';
import PlacementStats from '../../components/college/PlacementStats';

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
    },
    {
        name: 'Mechanical Engineering',
        code: 'DME',
        description: 'Hands-on training in manufacturing, design, and automotive systems.',
        href: '/colleges/polytechnic/dme',
        icon: <GearIcon />,
    },
    {
        name: 'Electrical & Electronics',
        code: 'DEEE',
        description: 'Practical skills in electrical systems, wiring, and electronics.',
        href: '/colleges/polytechnic/deee',
        icon: <BoltIcon />,
    },
    {
        name: 'Civil Engineering',
        code: 'DCivil',
        description: 'Training in construction, surveying, and structural basics.',
        href: '/colleges/polytechnic/dcivil',
        icon: <BuildingIcon />,
    },
    {
        name: 'Electronics & Communication',
        code: 'DECE',
        description: 'Foundation in communication systems and electronic devices.',
        href: '/colleges/polytechnic/dece',
        icon: <SignalIcon />,
    },
    {
        name: 'Automobile Engineering',
        code: 'DAE',
        description: 'Specialization in vehicle systems, maintenance, and repair.',
        href: '/colleges/polytechnic/dae',
        icon: <CarIcon />,
    },
];

const facilities = [
    {
        name: 'Mechanical Workshop',
        description: 'Industry-grade machinery for hands-on training in manufacturing.',
        icon: <WrenchIcon />,
    },
    {
        name: 'Computer Lab',
        description: 'Modern computing facilities with CAD/CAM software.',
        icon: <ComputerIcon />,
    },
    {
        name: 'Electrical Lab',
        description: 'Well-equipped lab for practical electrical experiments.',
        icon: <BoltIcon />,
    },
    {
        name: 'Automobile Workshop',
        description: 'Real vehicle components for practical learning.',
        icon: <CarIcon />,
    },
    {
        name: 'Surveying Lab',
        description: 'Modern surveying equipment for civil engineering students.',
        icon: <RulerIcon />,
    },
];

const placementStats = {
    placementRate: '98%',
    averagePackage: '2.5 LPA',
    highestPackage: '5 LPA',
    companiesVisited: '35+',
};

const recruiters = [
    { name: 'L&T' },
    { name: 'Ashok Leyland' },
    { name: 'TVS' },
    { name: 'TAFE' },
    { name: 'Roots Industries' },
    { name: 'ELGI Equipments' },
];

export default function PolytechnicCollegePage() {
    return (
        <>
            {/* Hero Section */}
            <CollegeHero
                name="JCT Polytechnic College"
                shortName="Polytechnic"
                tagline="Skill-Based Technical Education"
                description="Industry-ready diploma programs with emphasis on practical training, workshop experience, and strong industry partnerships for immediate employment."
                stats={[
                    { value: '1200+', label: 'Students' },
                    { value: '6', label: 'Programs' },
                    { value: '98%', label: 'Placement' },
                    { value: '35+', label: 'Companies' },
                ]}
            />

            {/* About Section */}
            <section className="section bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="section-eyebrow">
                                <span>About the College</span>
                            </div>
                            <h2 className="section-title mb-6">
                                Practical <span className="text-gradient">Technical Training</span>
                            </h2>
                            <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                                JCT Polytechnic College offers diploma programs approved by AICTE
                                and affiliated to DOTE. Our focus is on developing skilled
                                technicians who are industry-ready from day one.
                            </p>
                            <p className="text-neutral-600 leading-relaxed mb-6">
                                With extensive workshop training, industry internships, and
                                hands-on project work, our students gain practical experience
                                that employers value.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-accent rounded-full" />
                                    <span className="text-sm font-medium">AICTE Approved</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-accent rounded-full" />
                                    <span className="text-sm font-medium">DOTE Affiliated</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-accent rounded-full" />
                                    <span className="text-sm font-medium">Industry Training</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-tertiary to-tertiary-light shadow-xl">
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
            <section className="section bg-white">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4">
                            Start Your Technical Career
                        </h2>
                        <p className="text-neutral-600 mb-8">
                            Get industry-ready skills and kickstart your career.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="/apply" className="btn btn-primary">
                                Apply Now
                            </Link>
                            <Link href="/contact" className="btn btn-outline">
                                Contact Admissions
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

function GearIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
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

function BuildingIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
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

function CarIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
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

function RulerIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
        </svg>
    );
}
