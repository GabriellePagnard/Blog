import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Article } from '../types/Article';

const CreateArticle: React.FC = () => {
    const navigate = useNavigate();
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    const handleSubmit = () => {
        const newArticle: Article = {
            id: Date.now().toString(),
            title,
            content,
            date: new Date().toISOString(),
            comments: [],
        };

        const savedArticles = localStorage.getItem('articles');
        const articles = savedArticles ? JSON.parse(savedArticles) : [];
        articles.push(newArticle);
        localStorage.setItem('articles', JSON.stringify(articles));
        navigate('/');
    };

    return (
        <div>
            <h1>Create New Article</h1>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={e => setContent(e.target.value)}
            ></textarea>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default CreateArticle;