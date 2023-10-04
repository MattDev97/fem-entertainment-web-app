'use client';

import { useDataContext } from "../components/SearchClientLayout/SearchClientLayout";
import RegularGallery from "../components/RegularGallery/RegularGallery";
import React from 'react';

export default function TVSeries() {
    const { data } = useDataContext();
	return (
        <div>
            <div>
                <div className="text-lg mb-3 text-white">TV Series</div>
            </div>
            <div>
                <RegularGallery data={data} />
            </div>
        </div>
		
	)
}