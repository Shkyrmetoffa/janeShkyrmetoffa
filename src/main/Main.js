import React from 'react';

import './main.scss';
import { Aside } from './aside';
import { Content } from './content';

export const Main = () => {
        const text = 'Main';
        return ( 
            <main className = "main" > 
            <h1>{ text } </h1>
            <div className = "content">
            <Aside />
            <Content />
            </div>
            </main>
            );
        }
        