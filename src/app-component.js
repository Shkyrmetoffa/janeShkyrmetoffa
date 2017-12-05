import React from 'react';
import ReactDom from 'react-dom';

import { Header } from './header';
import { Main } from './main';
import { Footer } from './footer';
import { Error } from './Error';

import './app.scss';

export const App = ( 
    <div className="wrapper">
        <Header />
            <Main />
              <Error text = "some text" color = "red" /><Error />
        <Footer />
    </div>
);
