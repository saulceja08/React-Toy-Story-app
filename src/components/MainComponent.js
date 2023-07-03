import React, { useState, useEffect } from 'react';
import ToyCard from './ToyCard';
import HeaderComponent from './HeaderComponent';

const MainComponent = () => {
  const [toys, setToys] = useState([]); // Add this line for 'setToys'
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

  const handleAddToy = (newToy) => {
    // Perform the POST request to add the new toy to the server
    fetch('https://saulceja08-flatiron-phase-2-json-server.onrender.com/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newToy),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the new toy that includes the assigned id from the server
        setToys((prevToys) => [...prevToys, { ...newToy, id: data.id, isLiked: false }]);
      })
      .catch((error) => {
        console.error('Error adding toy:', error);
      });
  };

  const handleDeleteToy = (id) => {
    // Perform the DELETE request to remove the toy from the server
    fetch(`https://saulceja08-flatiron-phase-2-json-server.onrender.com/toys/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Update the state to remove the deleted toy
        setToys((prevToys) => prevToys.filter((toy) => toy.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting toy:', error);
      });
  };

  return (
    <div className="ToyStoryBackground">
      <HeaderComponent onAddToy={handleAddToy} />
      <div className="search-container">
        <input type="text" placeholder="Search by name..." value={searchTerm} onChange={handleSearch} />
      </div>
      <h1>Toys</h1>
      <ul>
        {filteredToys.map((toy) => (
          <ToyCard
            key={toy.id}
            toy={toy}
            onLikeClick={handleLikeClick}
            onDeleteClick={handleDeleteToy}
          />
        ))}
      </ul>
    </div>
  );
};

export default MainComponent;
