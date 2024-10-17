# StarWars API

Application for managing a collection of star wars characters. App interacts with external API to gather information about characters specified by the user.

## Installation and Setup
Information regarding installation and launching application.

### Requirements
- Access to a terminal
- Node.js and Node Package Manager installed
- Required libraries will be installed

### Installations and start app
To install the required dependencies for each section of the app start by navigating to the root folder of the app in your terminal.  
Run the following command in your terminal.

```bash
# Install project dependencies
npm install

```
After installation is complete. Start the application by running the following command in the root folder of the project in your terminal.

```bash
# Start the application. Launches both the frontend and the backend.
npm start
```

## Backend - API Endpoints

### Get All Characters

- **Endpoint:** `/characters/`
- **Method:** GET
- **Description:** Retrieves all characters from the collection. 
-  **Response:**
   -  Returns a JSON array of characters in collection if the collection is not empty. Also sends status code of 200. 
   -  Returns status 200, with a message "No characters in collection" if the collection is empty.


### Add Character
- **Endpoint:** `/characters/add`
- **Method:** PUT
- **Description:** Adds a character to the collection.
- **Request Body:** JSON with character's name.
- **Response:**
  - 201 Created: Returns a message and the added character's details if successful.
  - 400 Bad Request: Returns an error message if there are issues, including a message if multiple characters are found.

### Delete Character

- **Endpoint:** `/characters/delete/:name`
- **Method:** DELETE
- **Description:** Deletes a character from the collection by name.
- **Response:**
  - 200 OK: Returns a message if the character was successfully removed.
  - 400 Bad Request: Returns an error message if there are issues.


### Swap Characters

- **Endpoint:** `/characters/swap`
- **Method:** POST
- **Description:** Swaps the positions of characters in the collection.
- **Request Body:** JSON array with name of characters to swap.
- **Response:**
  - 200 OK: Returns a message if the characters were swapped successfully.
  - 400 Bad Request: Returns an error message if there are issues.


## Frontend

<img src="images/frontend-overview.png" alt="Frontend Screenshot" width="550" height="400">

The frontend consists of four components:
- A list of current characters in collection
- A input field to add new characters with a specified name together with a button
- A component used for swapping position of two characters in collection
- A component responsible for communicating status messages to the user

### Usage
- The user can attempt to add a character by providing a name of the character they wish to add. If a character with that  
  name exists in the star wars universe it is added to the collection. A status message is displayed to inticate success. 

- By clicking the delete button next to a character in the list the user can remove a character from the collection

- The user can also swap position of two characters by selecting two unique characters from the dropdown lists and clicking the button


## Project Structure
The project is located in two different folders: backend and swapi-frontend. These folders contain the code used to operate the respective parts of the application. 

### Backend
The structure in the backend is as follows:

```

backend/
node_modules
src/
  api.js
  app.js
  appController.js
  routes.js
.gitignore
index.js
package-lock.json
package.json
README.md

```

- `api.js` handles interactions with external API containing data on star wars characters.
- `app.js` sets up the Express application
- `appController.js` is responsible for the actual operations in the backend. The logic and performing the actual operations by calling other help functions.
- `routes.js` configures my API routes
- `index.js` serves as the entry point for the backend. 

### Frontend

The file structure in the frontend of the application is as follows:

```

swapi-frontend/
  node_modules
  public/
    ...
  src/
    components/
     AddCharacter/
     CharacterList/
     Container/
     DeleteCharacter/
     Heading/
     MessageComponent/
     SwapCharacters/
    services/
      characterService.js
    App.css
    App.js
    index.css
    index.js
  .gitignore
  package.json

```

- `public` folder contains code related to a production build. This applicaton is running in development mode so the files in this folder are not used.  
  Placeholder for when the app is build for production.

- `src` folder contains all the source code for the frontend.
- `index.js` is the entrypoint to the application. In this file the react application is started and the App component is mounted. 
- `Components` folder contains all the different components used to build the frontend.  
  Each components has a folder used to store the source code and the css code for that particular component.
- `App.js` is the file that assembles the frontend. Here each component is mounted and the structure of the page is created.  
 This file or module is considered the main component in the frontend and holds it all together.

## Technologies Used

### Languages
- JavaScript

### Libraries and Frameworks
- React
- Express
- Axios for making API requests
- Bootstrap for styling

