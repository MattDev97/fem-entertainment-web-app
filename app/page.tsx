'use client';

import SideNav from "./components/SideNav/SideNav";
import RegularGallery from "./components/RegularGallery/RegularGallery";
import Tile from "./components/Tile/Tile";

import { useDataContext } from "./components/SearchClientLayout/SearchClientLayout";
import React from 'react';

export default function Home() {
	
	const { data } = useDataContext();
	const trendingData = data.filter((item) => item.isTrending);
	const nonTrendingData = data.filter((item) => !item.isTrending);

	return (
		<div className="flex flex-col text-white">
			<div className="text-lg mb-3">Trending</div>
			<div className="trending-gallery flex mb-8 overflow-hidden">
				<div className="trending-carousel flex gap-5 w-fit">
					{
						trendingData.map((item, index) => {
							return (
								<Tile
									key={item.title + index}
									title={item.title}
									year={item.year}
									category={item.category}
									rating={item.rating}
									thumbnail={item.thumbnail?.trending || { large: '' }}
									isBookmarked={item.isBookmarked}
									isTrending={item.isTrending}
								/>
							)
						})
					}
				</div>
			</div>
			<div className="text-lg mb-3">Recommended for you</div>
			<RegularGallery data={nonTrendingData} />
		</div>
	)
}
