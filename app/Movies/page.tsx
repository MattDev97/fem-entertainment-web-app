'use client';

import { useDataContext } from "../components/SearchClientLayout/SearchClientLayout";
import RegularGallery from "../components/RegularGallery/RegularGallery";
import React from 'react';

export default function Movies() {
    const { data } = useDataContext();
	return (
        <div>
            <div>
                <div className="text-lg mb-3 text-white">Movies</div>
            </div>
            <div>
                <RegularGallery data={data} />
            </div>
        </div>
		
	)
}