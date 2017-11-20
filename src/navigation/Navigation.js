import React from 'react';

import './navigation.scss'

const items = ['Home', 'Gallery', 'Contacts'];

export const Navigation = () => {
    const text = 'Home';
    return ( 
        <nav className = "main-nav">
          <ul> {items.map((item, i) => ( 
                <li key = { i } > 
                  <a href = { `/${item.toLowerCase()}` } > 
                    { item } 
                  </a> 
                </li >
            ))
        } 
        </ul> 
        </nav>
    );
}