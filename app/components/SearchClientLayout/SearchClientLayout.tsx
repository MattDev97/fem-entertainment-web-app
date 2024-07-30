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

interface MovieData {
	title: string;
	thumbnail: {
			trending: {
			small: string;
			large: string;
		};
			regular: {
			small: string;
			medium: string;
			large: string;
		};
	};
	year: number;
	category: string;
	rating: number;
	isBookmarked: boolean;
	isTrending: boolean;
}

export function SearchClientLayout({ children }: { children: any }) {
	const moviesData: MovieData[] = DataJSON as unknown as MovieData[];

	const [searchValue, setSearchValue] = useState('');
	const [searchData, setSearchData] = useState<MovieData[]>([]);
	const [ourData, setOurData] = useState<MovieData[]>([]);
	const [searchPlaceholder, setSearchPlaceholder] = useState('Search for movies or TV series');

	const usePathUrl = usePathname();
    
    useEffect(() => {
        switch (usePathUrl) {
            case '/':
                setOurData(moviesData);
                setSearchPlaceholder('Search for movies or TV series');
                break;
            case '/Movies':
                setOurData(moviesData.filter((item) => item.category == 'Movie'));
                setSearchPlaceholder('Search for movies');
                break;
            case '/TVSeries':
                setOurData(moviesData.filter((item) => item.category == 'TV Series'));
                setSearchPlaceholder('Search for TV series');
                break;
            case '/Bookmarked':
                setOurData(moviesData.filter((item) => item.isBookmarked));
                setSearchPlaceholder('Search for Bookmarked Media');
                break;
        }
    }, []);

    const getData = () => {
        return ourData;
    }

	const handleSearchBar = (value: string) => {
		console.log(value);
		setSearchValue(value);

		const filteredData = moviesData.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()));
		setSearchData([...filteredData]);
	}

    const searchResults = () => {
		return (
			<div>
				<div className="text-lg mb-3 text-white">Found {searchData.length} {searchData.length == 1 ? 'result' : 'results'} for &apos;{searchValue}&apos;</div>
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
                {/* <DataContext.Provider value={{data: moviesData as MovieData[] }}>
                    {searchValue == '' ? children : searchResults()}
                </DataContext.Provider> */}
                
            </div>
        </div>
	)
}
