import React, { useState, useEffect } from 'react';
import ToyCard from './ToyCard';

const MainComponent = () => {
  const [toys, setToys] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="ToyStoryBackground">
      <div className="search-container">
        <input type="text" placeholder="Search by name..." value={searchTerm} onChange={handleSearch} />
      </div>
      <h1>Toys</h1>
      <ul>
        {filteredToys.map((toy) => (
          <ToyCard key={toy.id} toy={toy} onLikeClick={handleLikeClick} />
        ))}
      </ul>
    </div>
  );
};

export default MainComponent;
