import React from 'react';

import './main.scss';
import { Asign } from './asign';
import { Content } from './content';

export const Main = () => {
        const text = 'Main';
        return ( 
            <main className = "main" > 
            <h1>{ text } </h1>
            <div className = "content">
            <Asign />
            <Content />
            </div>
            </main>
            );
        }
        