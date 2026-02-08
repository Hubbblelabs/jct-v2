import React from 'react';
import Link from 'next/link';
import CollegeCard from '../components/CollegeCard';


const colleges = [
    {
        name: 'JCT College of Engineering & Technology',
        shortName: 'Engineering',
        description: 'Autonomous institution offering B.E./B.Tech programs with NBA accreditation. State-of-the-art labs, experienced faculty, and excellent placement records.',
        href: '/colleges/engineering',
        icon: <EngineeringIcon />,
        tag: 'Autonomous',
        stats: { students: '2500+', programs: '8', placement: '100%' },
    },
    {
        name: 'JCT College of Arts & Science',
        shortName: 'Arts & Science',
        description: 'Comprehensive UG & PG programs in Arts, Science, and Commerce. Focus on holistic development with modern teaching methodologies.',
        href: '/colleges/arts-science',
        icon: <BookIcon />,
        stats: { students: '1800+', programs: '12', placement: '95%' },
    },
    {
        name: 'JCT Polytechnic College',
        shortName: 'Polytechnic',
        description: 'Industry-ready diploma programs with hands-on training. Strong industry partnerships and workshop-based learning approach.',
        href: '/colleges/polytechnic',
        icon: <GearIcon />,
        stats: { students: '1200+', programs: '6', placement: '98%' },
    },
];

const keyPoints = [
    'NAAC "A" Grade Accreditation',
    'NBA Accredited Programs',
    'Industry Partnership Programs',
    'Modern Research Facilities',
];

export default function AboutSection() {
    return (
        <section className="section bg-white" id="about">
            <div className="container">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                    <div className="section-eyebrow justify-center">
                        <span>About Us</span>
                    </div>
                    <h2 className="section-title">
                        Building Tomorrow&apos;s <span className="text-gradient">Leaders</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        JCT Institutions is a premier educational trust dedicated to providing
                        world-class technical and professional education in Coimbatore, Tamil Nadu.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 md:mb-20">
                    {/* Left Content */}
                    <div className="order-2 lg:order-1">
                        <p className="text-neutral-600 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                            Since 2008, our commitment to academic excellence, industry-relevant curriculum,
                            and holistic development has made us a trusted name in higher education.
                            With state-of-the-art infrastructure and experienced faculty, we prepare
                            our students not just for careers, but for life.
                        </p>

                        <p className="text-neutral-600 leading-relaxed mb-6 md:mb-8">
                            Our three flagship institutions offer diverse programs in engineering,
                            arts, science, and polytechnic education, all focused on creating
                            industry-ready professionals.
                        </p>

                        {/* Key Points */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                            {keyPoints.map((point) => (
                                <div key={point} className="flex items-center gap-3 group">
                                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                                        <CheckIcon />
                                    </div>
                                    <span className="text-neutral-700 font-medium text-sm md:text-base">{point}</span>
                                </div>
                            ))}
                        </div>

                        <Link href="/about" className="btn btn-primary">
                            Learn More About Us
                            <ArrowIcon />
                        </Link>
                    </div>

                    {/* Right - Image Bento Grid */}
                    <div className="relative order-1 lg:order-2">
                        <div className="grid grid-cols-12 gap-3 md:gap-4">
                            {/* Large Image */}
                            <div className="col-span-7 row-span-2">
                                <div className="aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden shadow-xl relative group">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: "url('/images/about-campus.jpg')" }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
                                </div>
                            </div>

                            {/* Stats Card */}
                            <div className="col-span-5">
                                <div className="aspect-square rounded-xl md:rounded-2xl bg-gradient-to-br from-accent to-accent-light p-4 md:p-6 flex flex-col items-center justify-center text-center shadow-lg">
                                    <div className="text-3xl md:text-5xl font-bold text-primary-dark mb-1">15+</div>
                                    <div className="text-xs md:text-sm text-primary-dark/80 font-medium">Years of<br />Excellence</div>
                                </div>
                            </div>

                            {/* Small Image */}
                            <div className="col-span-5">
                                <div className="aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-lg relative group">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: "url('/images/about-students.jpg')" }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-4 md:-bottom-6 -left-2 md:-left-6 bg-white rounded-lg md:rounded-xl shadow-xl p-3 md:p-4 animate-float">
                            <div className="flex items-center gap-2 md:gap-3">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-tertiary/10 flex items-center justify-center">
                                    <GraduationIcon />
                                </div>
                                <div>
                                    <div className="text-xl md:text-2xl font-bold text-primary">7000+</div>
                                    <div className="text-[10px] md:text-xs text-neutral-500">Successful Graduates</div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -z-10 -bottom-8 -right-8 w-32 md:w-48 h-32 md:h-48 bg-secondary/5 rounded-full blur-2xl" />
                    </div>
                </div>

                {/* Colleges Section */}
                <div className="pt-8 md:pt-12 border-t border-neutral-100">
                    <div className="text-center mb-8 md:mb-12">
                        <h3 className="text-xl md:text-2xl font-bold mb-2">Our Institutions</h3>
                        <p className="text-neutral-500 text-sm md:text-base">Explore our three flagship colleges</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {colleges.map((college) => (
                            <CollegeCard key={college.name} {...college} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function CheckIcon() {
    return (
        <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-primary-dark" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
    );
}

function ArrowIcon() {
    return (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
    );
}

function GraduationIcon() {
    return (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
    );
}

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
