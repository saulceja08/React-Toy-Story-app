# ToyStory App

This is a ToyStory-themed web application built using React. It allows users to view, add, and delete toy characters. The frontend is hosted on Netlify, and the backend is hosted on a remote server. Additionally, you can run the application on your local machine for development purposes.

## Live Demo

You can access the live demo of the frontend here: [ToyStory App Frontend](https://flatiron-phase-2-project-front-end.netlify.app/)

## Backend API

The backend API provides data for the toy characters. It is hosted on a remote server and can be accessed using the following endpoint:

[Toy API](https://saulceja08-flatiron-phase-2-json-server.onrender.com/toys)

## Local Development

To run the ToyStory App on your local machine, follow these steps:

1. Clone the repository: 
    front-end: <https://github.com/saulceja08/flatiron-phase-2-project>
   ```bash
   git clone <repository-url>

Replace <repository-url> with the URL of the repository.

Navigate to the project directory:


cd <project-directory>
Replace <project-directory> with the name of the project directory.

Install the dependencies:

npm install
Start the frontend development server:


npm start
The frontend will be available at http://localhost:3003/characters.

(Optional) If you need to set up and run the backend locally, make sure you have Node.js and npm installed. Then, follow these steps:

Clone the backend repository:


git clone <https://github.com/saulceja08/flatiron-phase-2-json-server>
Navigate to the backend project directory:


cd <project-directory>
Replace <project-directory> with the name of the project directory.

Install the backend dependencies:

npm install
Start the backend server:

npm start
The backend will be available at http://localhost:3000/.


## How the App Works
The ToyStory App consists of two main components: MainComponent and HeaderComponent.

## MainComponent
The MainComponent displays a list of toy characters. It fetches the toy data from the remote backend API and renders the toy cards with their names, images, and like status. You can also search for a specific toy by name and like or unlike a toy. To add a new toy, you can use the HeaderComponent form.

## HeaderComponent
The HeaderComponent displays the application's header, including the "Toy Story Forum" title. It provides a button to open a form for adding a new toy character to the list.

## ToyCard Component
The ToyCard component is used to render individual toy cards in the MainComponent. It shows the toy's image, name, likes count, and buttons to like or unlike a toy. Additionally, it provides a delete functionality to remove a toy from the list.

## Development Notes
The frontend is hosted on Netlify, and the backend is hosted on a remote server. Make sure your local environment has internet access to fetch data from the backend.
When running the frontend locally, the backend API is accessed from the remote server.
You can also set up the backend locally using the provided API endpoints. Make sure to update the frontend code accordingly if you choose to do so.
Feel free to explore the code in the App.js, MainComponent.js, ToyCard.js, and HeaderComponent.js files to understand the implementation details.


## Credits
- The Toy Story characters and images used in this project are the property of Pixar Animation Studios and are used for educational purposes only.

## License
This project is licensed under the [MIT License](LICENSE).

## Contact
For any inquiries or questions, please contact us at [saulceja08@gmail.com].
