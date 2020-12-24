import React from 'react';
import SearchIcon from '../Assets/Search_Icon.png';

const Header = ({ handleSearch = () => null }) => {
  return (
    <header className='app__header'>
      <div className='search__container'>
        <div className='search__image__container'>
          <img src={SearchIcon} alt='search' className='search__image' />
        </div>
        <input
          type='text'
          className='search__input'
          placeholder='Search for photo'
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Header;
