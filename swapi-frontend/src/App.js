import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import Heading from './components/Heading/Heading';
import Container from './components/Container/Container';
import CharacterList from './components/CharacterList/CharacterList';
import AddCharacter from './components/AddCharacter/AddCharacter';
import SwapCharacters from './components/SwapCharacters/SwapCharacters';
import MessageComponent from './components/MessageComponent/MessageComponent';
import { addCharacterAndCallAPI, deleteCharacterAndCallAPI, swapCharactersAndCallAPI } from './services/characterService';



function App() {

  const [characters, setCharacters] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [charactersSwapped, setCharactersSwapped] = useState(null);


  const stateVariables = {charactersSwapped, setCharactersSwapped, characters, setCharacters, setLoading, setSuccessMessage, setErrorMessage};

  useEffect(()=>{
    axios.get("https://localhost:4000/swapi/characters/")
      .then((res) => {
        if(res.data.message !== "No characters in collection"){
          setCharacters([...res.data])
        }
      })
      .catch((err) => console.log(err));
  }, [charactersSwapped]);

  const handleAddCharacter = (newCharacterName) => {
    addCharacterAndCallAPI(newCharacterName, stateVariables);
  }

  const handleDelete = (characterName) => {
    deleteCharacterAndCallAPI(characterName, stateVariables);    
  }

  const handleSwapCharacters = (firstCharacterName, secondCharacterName) => {
    swapCharactersAndCallAPI(firstCharacterName, secondCharacterName, stateVariables);
  }
  

  return (
    <div className="App">
      <Heading headline={"Starwars API"}/>
      <Container type="content">
        
        <CharacterList characters={characters} onDelete={handleDelete} loading={loading}/>
        <Container type="operations">
          <AddCharacter characters={characters} addCharacterAndCallAPI={handleAddCharacter}/>            
          <SwapCharacters  characters={characters} handleSwapCharacters={handleSwapCharacters}/>  
        </Container>
      </Container>
      <Container type="messages">
         <MessageComponent successMessage={successMessage} errorMessage={errorMessage}/>
      </Container>
      
    </div>
  );
}

export default App;
