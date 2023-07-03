import React from 'react';

const ToyCard = ({ toy, onLikeClick }) => {
  return (
    <li key={toy.id}>
      <img src={toy.image} alt={toy.name} />
      <h3>{toy.name}</h3>
      <p>
        Likes: {toy.likes} <button onClick={() => onLikeClick(toy.id)}>{toy.isLiked ? 'Unlike' : 'Like'}</button>
      </p>
    </li>
  );
};

export default ToyCard;