import React, {useState} from 'react';


const HeaderComponent = ({ onAddToy }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [likes, setLikes] = useState(0);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const newToy = {
        name: name,
        image: image,
        likes: likes,
      };
      onAddToy(newToy);
      // Clear the form fields after submission
      setName('');
      setImage('');
      setLikes(0);
      setIsFormOpen(false);
    };
  
    return (
      <div className="header">
        <h1 className="toy-story-theme">Toy Story Forum</h1>
        {isFormOpen ? (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Image URL:
              <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
            </label>
            <button type="submit">Add Toy</button>
            <button onClick={() => setIsFormOpen(false)}>Cancel</button>
          </form>
        ) : (
          <button onClick={() => setIsFormOpen(true)}>Add Toy</button>
        )}
      </div>
    );
  };

export default HeaderComponent;
