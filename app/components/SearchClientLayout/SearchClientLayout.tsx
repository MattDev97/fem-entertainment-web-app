"use client";
import React, { useContext, createContext, useState, useEffect } from 'react';

import {usePathname} from 'next/navigation';
import SearchBar from "../SearchBar/SearchBar";
import RegularGallery from '../RegularGallery/RegularGallery';

import DataJSON from '../../../data.json';

export const DataContext = createContext({
    data: [...DataJSON]
});
export const useDataContext = () => useContext(DataContext);

export function SearchClientLayout({ children }) {

    const [searchValue, setSearchValue] = useState('');
	const [searchData, setSearchData] = useState([]);
    const [ourData, setOurData] = useState(DataJSON);
    const [searchPlaceholder, setSearchPlaceholder] = useState('Search for movies or TV series');
    
    const usePathUrl = usePathname();
    
    useEffect(() => {
        switch (usePathUrl) {
            case '/':
                setOurData(DataJSON);
                setSearchPlaceholder('Search for movies or TV series');
                break;
            case '/Movies':
                setOurData(DataJSON.filter((item) => item.category == 'Movie'));
                setSearchPlaceholder('Search for movies');
                break;
            case '/TVSeries':
                setOurData(DataJSON.filter((item) => item.category == 'TV Series'));
                setSearchPlaceholder('Search for TV series');
                break;
            case '/Bookmarked':
                setOurData(DataJSON.filter((item) => item.isBookmarked));
                setSearchPlaceholder('Search for Bookmarked Media');
                break;
        }
    }, []);

    const getData = () => {
        return ourData;
    }

    const handleSearchBar = (value) => {
        console.log(value);
        setSearchValue(value);

        const filteredData = DataJSON.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
		setSearchData([...filteredData]);
    }

    const searchResults = () => {
		return (
			<div>
				<div className="text-lg mb-3 text-white">Found {searchData.length} {searchData.length == 1 ? 'result' : 'results'} for '{searchValue}'</div>
				<RegularGallery data={searchData} />
			</div>
		)
	}
    
	return (
		<div className="flex-col w-full">
            <div className="h-fit py-4">
                <SearchBar handleSearch={handleSearchBar} searchPlaceholder={searchPlaceholder}/>
            </div>
            <div>
                <DataContext.Provider value={{data: getData()}}>
                    {searchValue == '' ? children : searchResults()}
                </DataContext.Provider>
                
            </div>
        </div>
	)
}
