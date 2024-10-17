import React from 'react'
import { useState } from 'react';
import "./swapCharacters.css"
import Container from '../Container/Container'



const SwapCharacters = ({characters, handleSwapCharacters}) => {

  const [selectedCharacter1, setSelectedCharacter1] = useState("");
  const [selectedCharacter2, setSelectedCharacter2] = useState("");
  const [swapError, setSwapError] = useState(null);

  const checkSelections = () => {
    if(selectedCharacter1 && selectedCharacter2) {
      if(selectedCharacter1 === selectedCharacter2){
        setSwapError("Need to select two different characters");
        return;
      }
      else {
        handleSwapCharacters(selectedCharacter1, selectedCharacter2);
        setSelectedCharacter1("");
        setSelectedCharacter2("");
      }

      
    }
    else {
      setSwapError("Need to select characters to swap");
    }
  }

  return (    
    <Container type="operation swap-characters">
      <h4 className='swap-headline'>Swap Characters</h4>
      <select className='form-select mb-2' onChange={(event)=> setSelectedCharacter1(event.target.value)}>
        <option></option>
        {characters.map((character) => {
          return (
            <option key={character.name}>{character.name}</option>
          )
          
        })}
      </select>
      <select className='form-select mb-3' onChange={(event)=> setSelectedCharacter2(event.target.value)}>
        <option></option>
        {characters.map((character) => {
          return (
            <option key={character.name}>{character.name}</option>
          )
          
        })}
      </select>
      <div className='mb-2 swap-error'>
        {swapError && <div className='text-danger'>{swapError}</div>}  
      </div>
      
      <button className="btn btn-secondary swap-button" onClick={checkSelections}>Swap Characters</button>
    </Container>
  )
}

export default SwapCharacters