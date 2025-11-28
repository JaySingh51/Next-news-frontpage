import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-red-600 tracking-tight">
                    LiveHindustan Clone
                </Link>
                <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
                    <Link href="#" className="hover:text-red-600 transition-colors">Nation</Link>
                    <Link href="#" className="hover:text-red-600 transition-colors">World</Link>
                    <Link href="#" className="hover:text-red-600 transition-colors">Sports</Link>
                    <Link href="#" className="hover:text-red-600 transition-colors">Entertainment</Link>
                </nav>
                <button className="md:hidden text-gray-700 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
