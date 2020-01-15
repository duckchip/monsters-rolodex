import React from 'react';
import './search-box.styles.css';

//functional components don't have a construct method, neither does it have lifecycle methods
//if you don't need those functions, go for functional components since they're easier to test
export const SearchBox = ({ placeholder, handleChange}) => (
    <input className="search" type='search' placeholder={placeholder} 
    onChange={handleChange} />
);