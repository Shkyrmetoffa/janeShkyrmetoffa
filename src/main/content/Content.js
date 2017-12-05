import React from 'react';

import { Greeting } from './greeting';
import { Numbers } from './numbers';
import './content.scss'

export const Content = () => {
    const text = 'Content';
    return ( 
        <div className="content-block">
        <h2>{text}</h2>
        <Greeting name="Vasya" />
          <Numbers 
            from='2' 
            to='6' 
            odd=''
          />
        </div>
    );
}