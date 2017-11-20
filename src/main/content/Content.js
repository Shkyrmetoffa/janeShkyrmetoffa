import React from 'react';

import { Numbers } from './numbers';
import './content.scss'

export const Content = () => {
    const text = 'Content';
    return ( 
        <div className="content-block">
        <h2>{text}</h2>
          <Numbers 
            from='2' 
            to='6' 
            odd=''
          />
        </div>
    );
}