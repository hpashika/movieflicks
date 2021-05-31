import React, { useState, useEffect } from 'react';

function NavBar(params) {
  const { setMenu } = params;
  const [active, setActive] = useState('Top');
  const menuItems = ['Top', 'Drama', 'Crime', 'Thriller', 'Comedy', 'Search'];
  return (
    <div>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <ul class="nav navbar-nav">
            {menuItems.map((item, index) => {
              let classValue = 'inactive';
              if (item === active) {
                classValue = 'active';
              }

              return (
                <li class={classValue} key={index}>
                  <a
                    href="#"
                    onClick={(event) => {
                      setActive(item);
                      setMenu(item.toLowerCase());
                      console.log(active);
                    }}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
