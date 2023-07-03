import React, { useState } from 'react';

const ToyCard = ({ toy, onLikeClick, onDeleteClick }) => {
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  const handleDeleteClick = () => {
    setIsConfirmingDelete(true);
  };

  const handleConfirmDelete = () => {
    onDeleteClick(toy.id);
    setIsConfirmingDelete(false);
  };

  const handleCancelDelete = () => {
    setIsConfirmingDelete(false);
  };

  return (
    <li key={toy.id}>
      <img src={toy.image} alt={toy.name} />
      <h3>{toy.name}</h3>
      <p>
        Likes: {toy.likes} <button onClick={() => onLikeClick(toy.id)}>{toy.isLiked ? 'Unlike' : 'Like'}</button>
        {!isConfirmingDelete ? (
          <button onClick={handleDeleteClick}>Delete</button>
        ) : (
          <>
            <button onClick={handleConfirmDelete}>Yes</button>
            <button onClick={handleCancelDelete}>No</button>
          </>
        )}
      </p>
    </li>
  );
};

export default ToyCard;
