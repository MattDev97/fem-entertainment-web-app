import './RegularGallery.css';

import Tile from "../Tile/Tile";

export default function RegularGallery({data}) {
	return (
		<div className="regular-gallery grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mb-5">
				{
					data.map((item, index) => {
						return (
							<Tile
								
								title={item.title}
								year={item.year}
								category={item.category}
								rating={item.rating}
								thumbnail={item.thumbnail.regular}
								isBookmarked={item.isBookmarked}
								isTrending={false}
							/>
							
						)
					})
				}
			</div>
	)
}