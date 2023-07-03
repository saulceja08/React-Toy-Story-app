import React, { useState, useEffect } from 'react';


const MainComponent = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch('https://saulceja08-flatiron-phase-2-json-server.onrender.com/toys')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Add the isLiked property to each toy, initialized to false
        const toysWithLikeStatus = data.map((toy) => ({ ...toy, isLiked: false }));
        setToys(toysWithLikeStatus);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

  const handleLikeClick = (id) => {
    setToys((prevToys) =>
      prevToys.map((toy) =>
        toy.id === id
          ? { ...toy, likes: toy.isLiked ? toy.likes - 1 : toy.likes + 1, isLiked: !toy.isLiked }
          : toy
      )
    );
  };

  return (
    <div>
      <h1>Toys</h1>
      <ul>
        {toys.map((toy) => (
          <li key={toy.id}>
            <img src={toy.image} alt={toy.name} />
            <h3>{toy.name}</h3>
            <p>
              Likes: {toy.likes}{' '}
              <button onClick={() => handleLikeClick(toy.id)}>{toy.isLiked ? 'Unlike' : 'Like'}</button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainComponent;
