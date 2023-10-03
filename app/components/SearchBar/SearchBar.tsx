"use client";
import React, { useState } from 'react';

import './SearchBar.css';
import SearchIcon from '../../assets/icon-search.svg';

export default function SearchBar({handleSearch}) {
    const [inputActive, setInputActive] = useState(false);
    const [value, setValue] = useState('');
    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setValue(e?.target?.value);
            handleSearch(e?.target?.value);
        }
    };
	return (
		<div data-inputactive={inputActive} className="searchBar-wrapper h-fit flex gap-3">
            <div className="search-icon" >
                <img className="flex" src={SearchIcon.src} alt="Search Icon" />
            </div>
            <div className="search-input flex lg:w-1/2 w-full">
                <input onKeyDown={handleKeyDown} onFocus={() => {setInputActive(true)}} onBlur={() => {setInputActive(false)}} className="searchBar w-full" type="text" placeholder="Search for movies or TV series" />
            </div>
		</div>
	)
}