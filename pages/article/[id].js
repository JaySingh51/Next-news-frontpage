import Layout from '../../components/Layout';
import { getAllArticles, getArticleById } from '../../lib/api';
import Image from 'next/image';
import Link from 'next/link';

export default function Article({ article }) {
    if (!article) {
        return (
            <Layout>
                <div className="text-center py-20">
                    <h1 className="text-2xl font-bold text-gray-700">Article not found</h1>
                    <Link href="/" className="text-red-600 hover:underline mt-4 inline-block">
                        Go back home
                    </Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout title={`${article.title} - LiveHindustan Clone`}>
            <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="relative h-64 md:h-96 w-full">
                    <Image
                        src={article.imageUrl}
                        alt={article.title}
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8">
                        <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                            {article.category}
                        </span>
                        <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight shadow-black drop-shadow-md">
                            {article.title}
                        </h1>
                    </div>
                </div>

                <div className="p-6 md:p-10">
                    <div className="flex items-center text-gray-500 text-sm mb-8 border-b border-gray-100 pb-4">
                        <span className="mr-4">By <span className="font-semibold text-gray-900">Editorial Team</span></span>
                        <span>•</span>
                        <span className="ml-4">
                            {new Date(article.publishedAt).toLocaleDateString(undefined, {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}
                        </span>
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
                        <p className="text-xl font-medium text-gray-600 mb-6 italic border-l-4 border-red-500 pl-4">
                            {article.description}
                        </p>
                        {article.content.split('\n').map((paragraph, index) => (
                            <p key={index} className="mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-100">
                        <h3 className="text-lg font-bold mb-4">Share this article</h3>
                        <div className="flex space-x-4">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">Facebook</button>
                            <button className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition-colors">Twitter</button>
                            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">WhatsApp</button>
                        </div>
                    </div>
                </div>
            </article>

            <div className="max-w-4xl mx-auto mt-8">
                <Link href="/" className="text-red-600 font-medium hover:underline flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
                </Link>
            </div>
        </Layout>
    );
}

export async function getStaticPaths() {
    const articles = await getAllArticles();
    const paths = articles.map((article) => ({
        params: { id: article.id },
    }));

    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
    const article = await getArticleById(params.id);

    if (!article) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            article,
        },
        revalidate: 60,
    };
}
