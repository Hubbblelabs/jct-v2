'use client';
import RecruitersCarousel from '../components/RecruitersCarousel';
import { recruiters } from '../data/recruiters';

export default function RecruitersSection() {
    return (
        <section className="py-20 bg-primary overflow-hidden">
            <div className="container mb-12">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Our Top Recruiters</h2>
                    <p className="text-gradient text-lg opacity-80 pb-12">Leading companies that hire our students</p>
                </div>
            </div>
            <div className="w-full">
                <RecruitersCarousel recruiters={recruiters} />
            </div>
        </section>
    );
}
