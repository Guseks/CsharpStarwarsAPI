import React from 'react'
import "./characterList.css"
import { useEffect } from 'react';
import Container from '../Container/Container';

const CharacterList = ({characters, onDelete, loading }) => {

  useEffect(() => {
    
    const listContainer = document.querySelector('.list-container');
    listContainer.addEventListener('scroll', handleScroll);

    
    return () => {
      listContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  const handleScroll = () => {
    const listItems = document.querySelectorAll('.list-group-item');
    const listContainer = document.querySelector('.list-container');
    const listRect = listContainer.getBoundingClientRect();
    listItems.forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      if (itemRect.top > listRect.bottom || itemRect.bottom < listRect.top) {
        item.classList.add('hidden');
      } else {
        item.classList.remove('hidden');
      }
    });
  };


  return (
    <Container type="list">
      <div className='list-header'>
        <h4 className='list-headline'>List of characters in collection</h4>
        {loading && <div className='spinner-border spinner-border-sm' role="status"></div>}
      </div>
      <div className='list-container'>
        <ul className='list-group'>
          {characters.map((character, index) => {
            return (
            <li className="list-group-item list-group-item-light" key={index}>
              {character.name}
              <button type="button" className="btn btn-outline-danger" onClick={()=> onDelete(character.name)}>Delete</button>
            </li>
            )
          })}
        </ul>
      </div>
    </Container>
  )
}

export default CharacterList