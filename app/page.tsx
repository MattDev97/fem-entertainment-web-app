import SideNav from "./components/SideNav/SideNav";
import Tile from "./components/Tile/Tile";

import DataJSON from '../data.json';

export default function Home() {
	return (
		<div className="">
			{
				DataJSON.map((item, index) => {
					return (
						<Tile
							title={item.title}
							year={item.year}
							category={item.category}
							rating={item.rating}
							thumbnail={item.thumbnail}
							isBookmarked={item.isBookmarked}
							isTrending={item.isTrending}
						/>
					)
				})
			}
		</div>
	)
}
