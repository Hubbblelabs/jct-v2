'use client';
import RecruitersCarousel from '../components/RecruitersCarousel';
import { SiTcs, SiInfosys, SiWipro, SiHcl, SiCisco, SiDell, SiHp, SiAccenture, SiSap } from 'react-icons/si';

const recruiters = [
    { name: 'TCS', icon: <SiTcs className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: 'Infosys', icon: <SiInfosys className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: 'Wipro', icon: <SiWipro className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: 'HCL', icon: <SiHcl className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: 'Cisco', icon: <SiCisco className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: 'Dell', icon: <SiDell className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: 'HP', icon: <SiHp className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: 'Accenture', icon: <SiAccenture className="w-8 h-8 md:w-10 md:h-10" /> },
    { name: 'SAP', icon: <SiSap className="w-8 h-8 md:w-10 md:h-10" /> },
];

export default function RecruitersSection() {
    return (
        <section className="py-12 bg-primary overflow-hidden">
            <div className="container mb-8">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gradient mb-2">Our Top Recruiters</h2>
                    <p className="text-gradient">Leading companies that hire our students</p>
                </div>
            </div>
            <div className="w-full">
                <RecruitersCarousel recruiters={recruiters} />
            </div>
        </section>
    );
}
