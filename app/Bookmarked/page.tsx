'use client';

import { useDataContext } from "../components/SearchClientLayout/SearchClientLayout";
import RegularGallery from "../components/RegularGallery/RegularGallery";
import React from 'react';

export default function Bookmarked() {
    const { data } = useDataContext();
	return (
        <div>
            <div>
                <div className="text-lg mb-3 text-white">Bookmarked Movies</div>
            </div>
            <div className="mb-8">
                <RegularGallery data={data.filter((item) => item.isBookmarked && item.category == 'Movie')} />
            </div>
            <div>
                <div className="text-lg mb-3 text-white">Bookmarked TV Series</div>
            </div>
            <div className="mb-8">
                <RegularGallery data={data.filter((item) => item.isBookmarked && item.category == 'TV Series')} />
            </div>
        </div>
		
	)
}