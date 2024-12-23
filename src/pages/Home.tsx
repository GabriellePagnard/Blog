import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types/Article';

const Home: React.FC = () => {
    const [articles, setArticles] = React.useState<Article[]>([]);

    React.useEffect(() => {
        const savedArticles = localStorage.getItem('articles');
        if (savedArticles) {
            setArticles(JSON.parse(savedArticles));
        }
    }, []);

    return (
        <div>
            <h1>My Blog</h1>
            <Link to="/create">Create New Article</Link>
            <ul>
                {articles.map(article => (
                    <li key={article.id}>
                        <Link to={`/article/${article.id}`}>
                            <h2>{article.title}</h2>
                            <p>{article.date}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;