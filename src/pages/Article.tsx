import React from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <h1>Article {id}</h1>
      <p>Contenu de l'article.</p>
    </div>
  );
};

export default Article;
