import React from 'react';
import './styles.scss';

const SearchBox = () => {
  return (
    <div className="SearchBox">
      <form action="/search">
        <input type="search" name="q" placeholder=" search for something" />
      </form>
    </div>
  );
};

export default SearchBox;
