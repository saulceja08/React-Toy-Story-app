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
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              {/* ... (existing form elements) */}
              <div className="button-container">
                <button type="submit">Add Toy</button>
                <button onClick={() => setIsFormOpen(false)}>Cancel</button>
              </div>
            </form>
          </div>
        ) : (
          <button onClick={() => setIsFormOpen(true)}>Add Toy</button>
        )}
      </div>
    );
  };

export default HeaderComponent;
