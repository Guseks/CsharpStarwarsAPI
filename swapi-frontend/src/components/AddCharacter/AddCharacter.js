import React, { useState } from 'react'
import "./addCharacter.css"
import Container from '../Container/Container'

const AddCharacter = ({characters, addCharacterAndCallAPI}) => {

  const [newCharacterName, setNewCharacterName] = useState("");

  const [nameError, setNameError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if(newCharacterName.trim() === ""){
      setNameError("Please provide name of character to add.");
    }
    if(characters.some((character)=> character.name === newCharacterName)) {
      setNameError("A character with this name already exists in collection.");
    }
    else {
      setNameError(null);
      
      addCharacterAndCallAPI(newCharacterName);
      setNewCharacterName("");

    }
    
  };

  return (
    <Container type="operation add-character">
      <h4 className='character-headline'>Add Character</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input id="name" type="text" className="form-control" value={newCharacterName} onChange={(event)=> setNewCharacterName(event.target.value) } />
          <div className='mb-3 name-error'>
            {nameError && <div className='text-danger'>{nameError}</div>}   
          </div>
          
          <button className="btn btn-secondary" type="submit" >Add character</button>
        </div>
      </form>
    </Container>
  )
}

export default AddCharacter