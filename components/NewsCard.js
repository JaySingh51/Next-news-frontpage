import Link from 'next/link';
import Image from 'next/image';

export default function NewsCard({ article }) {
    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100 flex flex-col h-full group">
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={article.imageUrl}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {article.category}
                </div>
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                    <Link href={`/article/${article.id}`}>
                        {article.title}
                    </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {article.description}
                </p>
                <div className="text-xs text-gray-400 mt-auto">
                    {new Date(article.publishedAt).toLocaleDateString(undefined, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </div>
            </div>
        </div>
    );
}
