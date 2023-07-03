import React, { useState, useEffect } from 'react';

const MainComponent = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    // Fetch data from the API URL
    fetch('https://saulceja08-flatiron-phase-2-json-server.onrender.com/toys')
      .then((response) => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the response as JSON
        return response.json();
      })
      .then((data) => {
        // Update the state with the fetched data
        setToys(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Toys</h1>
      <ul>
        {toys.map((toy) => (
          <li key={toy.id}>
            <img src={toy.image} alt={toy.name} />
            <h3>{toy.name}</h3>
            <p>Likes: {toy.likes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainComponent;