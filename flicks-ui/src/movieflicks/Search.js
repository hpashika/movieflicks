import React, { useState, useEffect } from 'react';
import Titles from './Titles';
import app_host_port from './Api'
function Search() {
  const [searchTitle, setSearchTitle] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleSearchTitle = (e) => {
    const value = e.target.value;
    setSearchTitle(value);
  };

  const handleSearch = async () => {
    let flicksUrl = app_host_port() + '/api/search?movie=' + searchTitle;
    const response = await fetch(flicksUrl, { mode: 'cors' });
    const result = await response.json();
    console.log(result);
    setSearchResults(result);
  };

  return (
    <div>
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Search"
          value={searchTitle}
          onChange={handleSearchTitle}
        />
        <div class="input-group-btn">
          <button class="btn btn-default" onClick={handleSearch}>
            <i class="glyphicon glyphicon-search"></i>
          </button>
        </div>
      </div>
      <br />
      <Titles flicks={searchResults} />
    </div>
  );
}

export default Search;
