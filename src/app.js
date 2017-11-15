import React from 'react';
import ReactDom from 'react-dom';

import { Navigation } from './Navigation';

const time = React.createElement('time', null, ` Time is ${new Date().toLocaleTimeString()}`);
const Component = ( <
    div >
    <
    h1 > Hello, react < /h1> <
    Navigation / >
    <
    /div>
);

/*React.createEle ment('h1', null, 'Hello? react easycode!', time);*/
ReactDom.render(Component, document.getElementById('app'));