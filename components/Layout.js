import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children, title = "LiveHindustan Clone" }) {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            <Head>
                <title>{title}</title>
                <meta name="description" content="Latest news and updates" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="flex-grow container mx-auto px-4 py-6">
                {children}
            </main>
            <Footer />
        </div>
    );
}
