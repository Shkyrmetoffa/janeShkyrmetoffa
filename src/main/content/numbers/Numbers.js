import React from 'react';

import './numbers.scss'

export const Numbers = (props) => {
    let arr = [];
    for (let i = +props.from; i <= props.to; i++) {
        arr.push(i);
    }
    
    if (props.odd !== undefined) {
        arr = arr.filter(num => num % 2);
    }
    if (props.even !== undefined) {
        arr = arr.filter(num => {
            if(num % 2 == 0) return num;
        });
    }
    return ( 
        <div className = "num-list">
            <ul>
                { 
                    arr.map((num, index) => 
                       <li key={ index }>{ num }</li>
                    )
                }
            </ul>
        </div>
    );
}