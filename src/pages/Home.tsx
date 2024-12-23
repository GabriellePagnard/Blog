import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  { id: 1, title: 'Premier article', summary: 'Résumé du premier article' },
  { id: 2, title: 'Second article', summary: 'Résumé du second article' },
];

const Home = () => (
  <div>
    <h1>Accueil</h1>
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.summary}</p>
          <Link to={`/article/${article.id}`}>Lire la suite</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Home;
