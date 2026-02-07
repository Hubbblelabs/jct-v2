import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 decoration-grid" />
            <div className="absolute top-20 right-[20%] w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 left-[10%] w-[300px] h-[300px] bg-secondary/15 rounded-full blur-[80px]" />

            <div className="container relative z-10 py-20">
                <div className="max-w-2xl mx-auto text-center">
                    {/* 404 Number */}
                    <div className="relative mb-8">
                        <h1 className="text-[150px] md:text-[200px] lg:text-[250px] font-black text-transparent bg-clip-text bg-gradient-to-br from-accent via-accent-light to-accent leading-none select-none">
                            404
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center animate-pulse">
                                <SearchIcon />
                            </div>
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                        Page Not Found
                    </h2>

                    {/* Description */}
                    <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
                        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="btn btn-primary"
                        >
                            <HomeIcon />
                            Back to Home
                        </Link>
                        <Link
                            href="/contact"
                            className="btn btn-ghost"
                        >
                            <MailIcon />
                            Contact Support
                        </Link>
                    </div>

                    {/* Quick Links */}
                    <div className="mt-16 pt-8 border-t border-white/10">
                        <p className="text-white/50 text-sm mb-4">Or try these popular pages:</p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <Link href="/colleges" className="text-white/70 hover:text-accent transition-colors text-sm px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10">
                                Our Colleges
                            </Link>
                            <Link href="/admissions" className="text-white/70 hover:text-accent transition-colors text-sm px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10">
                                Admissions
                            </Link>
                            <Link href="/placements" className="text-white/70 hover:text-accent transition-colors text-sm px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10">
                                Placements
                            </Link>
                            <Link href="/about" className="text-white/70 hover:text-accent transition-colors text-sm px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10">
                                About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

function SearchIcon() {
    return (
        <svg className="w-12 h-12 md:w-16 md:h-16 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
    );
}

function HomeIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
    );
}

function MailIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
    );
}
