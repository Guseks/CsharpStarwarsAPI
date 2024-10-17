# StarWars API

Application for managing a collection of star wars characters. App interacts with external API to gather information about characters specified by the user.

## Installation and Setup
Information regarding installation and launching application.

### Requirements
- Access to a terminal
- Node Package Manager installed
- .NET SDK or Visual Studio
- Required libraries will be installed

### Installations and start app
To install dependencies navigate to the root of the frontend folder and run the following command:
```bash
# Install frontend dependencies
npm install

```
After installation is complete. Start the frontend by running the following command in the root of the frontend folder:

```bash
# Start the frontend
npm start
```

Navigate to the backend folder and run the following command (in vscode using the .NET CLI):
```bash
# Start the backend
dotnet run
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



## Technologies Used

### Languages
- JavaScript
- C#

### Libraries and Frameworks
- React
- .NET 8
- Axios for making API requests
- Bootstrap for styling

