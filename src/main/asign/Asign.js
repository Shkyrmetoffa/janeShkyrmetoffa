import React from 'react';

import './asign.scss'
import { Navigation } from '../../navigation/index';

export const Asign = () => {
    const text = 'Asign';
    return ( 
        <div className="asign-block">
        <h2>{text}</h2>
        <Navigation />
        </div>
    );
}