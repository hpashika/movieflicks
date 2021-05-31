import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Titles from './Titles';
import Search from './Search';
import app_host_port from './Api';

function Flicks() {
  const [flicks, setFlicks] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [genre, setGenre] = useState('');
  const [searchFlick, setSearchFlick] = useState('');
  const [menu, setMenu] = useState('top');
  const getFlicks = async () => {
    let flicksUrl = app_host_port() + '/api/browse';
    if (menu !== 'top' && menu !== 'search') {
      flicksUrl = app_host_port() + '/api/genre?type=' + menu;
    }
    const response = await fetch(flicksUrl, { mode: 'cors' });
    const result = await response.json();
    console.log(result);
    if (result.length > 0) {
      setLoaded(true);
      setError(false);

      setFlicks(result);
    } else {
      setLoaded(false);
      setError(true);
    }
    console.log('got the flicks');
    console.log(flicks);
  };

  useEffect(() => {
    getFlicks();
  }, [menu]);

  if (error === true) {
    return <div>Error retrieving data...try refreshing the page</div>;
  }

  if (loaded === false) {
    return <div>Loading Data .......</div>;
  }

  if (menu === 'search') {
    return (
      <div>
        <NavBar setMenu={setMenu} />
        <Search flicks={flicks} />
      </div>
    );
  } else {
    return (
      <div>
        <NavBar setMenu={setMenu} />
        <Titles flicks={flicks} />
      </div>
    );
  }
}

export default Flicks;
