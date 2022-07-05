import React, { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import './styles.scss';

const SearchBox = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit() {
    navigate({
      pathname: 'search?page=1',
      search: createSearchParams({
        q: search,
      }).toString(),
    });
  }

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="q"
          placeholder=" search for something"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBox;
