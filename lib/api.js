import mockData from '../data/mockData.json';

export const getAllArticles = async () => {
    // Simulate API delay
    // await new Promise((resolve) => setTimeout(resolve, 500));
    return mockData;
};

export const getArticleById = async (id) => {
    // await new Promise((resolve) => setTimeout(resolve, 500));
    return mockData.find((article) => article.id === id);
};
