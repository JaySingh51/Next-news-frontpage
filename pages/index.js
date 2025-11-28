import Layout from '../components/Layout';
import NewsCard from '../components/NewsCard';
import { getAllArticles } from '../lib/api';

export default function Home({ articles }) {
    const featuredArticle = articles[0];
    const otherArticles = articles.slice(1);

    return (
        <Layout title="LiveHindustan Clone - Latest News">
            {/* Featured Section */}
            {featuredArticle && (
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 border-l-4 border-red-600 pl-3 text-gray-800">
                        Top Story
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                        <div className="relative h-64 lg:h-auto w-full">
                            <img
                                src={featuredArticle.imageUrl}
                                alt={featuredArticle.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded">
                                {featuredArticle.category}
                            </div>
                        </div>
                        <div className="p-6 lg:p-8 flex flex-col justify-center">
                            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight hover:text-red-600 transition-colors cursor-pointer">
                                <a href={`/article/${featuredArticle.id}`}>{featuredArticle.title}</a>
                            </h1>
                            <p className="text-gray-600 text-lg mb-6 line-clamp-3">
                                {featuredArticle.description}
                            </p>
                            <div className="text-sm text-gray-500">
                                {new Date(featuredArticle.publishedAt).toLocaleDateString(undefined, {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Latest News Grid */}
            <section>
                <h2 className="text-2xl font-bold mb-6 border-l-4 border-red-600 pl-3 text-gray-800">
                    Latest News
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {otherArticles.map((article) => (
                        <NewsCard key={article.id} article={article} />
                    ))}
                </div>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    const articles = await getAllArticles();
    return {
        props: {
            articles,
        },
        revalidate: 60, // ISR: Revalidate every 60 seconds
    };
}
