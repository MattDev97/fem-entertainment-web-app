"use client";
import React, { useContext, createContext, useState } from 'react';

import {useRouter} from 'next/navigation';
import SearchBar from "../SearchBar/SearchBar";
import RegularGallery from '../RegularGallery/RegularGallery';

import DataJSON from '../../../data.json';

const DataContext = createContext(DataJSON);

export function SearchClientLayout({ children }) {

    const [searchValue, setSearchValue] = useState('');
	const [searchData, setSearchData] = useState([]);
    const [data, setData] = useState(DataJSON);

    let router = useRouter();
    // switch (router.usePathname) {
    //     case '/':
    //         setData(dataJSON);
    //         break;
    //     case '/Movies':
    //         setData(dataJSON.filter((item) => item.type == 'Movie'));
    //     case '/TVSeries':
    //         setData(dataJSON.filter((item) => item.type == 'TV Series'));
    //     case '/Bookmarked':
    //         setData(dataJSON.filter((item) => item.isBookmarked));
    // }

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
                <SearchBar handleSearch={handleSearchBar} />
            </div>
            <div>
                <DataContext.Provider value={{data}}>
                    {searchValue == '' ? children : searchResults()}
                </DataContext.Provider>
                
            </div>
        </div>
	)
}

export const useDataContext = () => { useContext(DataContext) }