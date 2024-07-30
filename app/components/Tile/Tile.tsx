import './Tile.css';
import BookmarkFilled from '../../assets/icon-bookmark-full.svg';
import Bookmark from '../../assets/icon-bookmark-empty.svg';
import PlayButton from '../../assets/icon-play.svg';

export default function Tile({
		title,
		year,
		thumbnail,
		category,
		rating,
		isBookmarked,
		isTrending
	}: {
		title: string,
		year: number,
		thumbnail: { large: string },
		category: string,
		rating: string,
		isBookmarked: boolean,
		isTrending: boolean
	}) {
    const playButton = () => {
        return (
            <div className="hover-overlay absolute top-0 left-0 w-full h-full">
                <div className="absolute bg-secondary h-full hover-overlay-backdrop left-0 opacity-40 top-0 w-full"></div>
                <div className="absolute gap-3 bg-opacity-30 bg-white flex py-2 pl-2 pr-4 play-button rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <img className="play-icon" src={PlayButton.src} alt="Play" />
                    <span className="text-white font-light">Play</span>
                </div>
            </div>
        )
    }
    const trendingTile = () => {
        return (
            <div data-trending="true" className="tile-wrapper thumbnail relative text-white rounded-md">
                {playButton()}
                <img className="h-full absolute movie-poster" src={thumbnail?.large} alt="Movie Poster" />
                <div className="gradient h-full w-full absolute top-0 left-0"></div>
                <div className="bookmark-wrapper m-3 p-2 rounded-full absolute top-0 right-0">
                    <img className="bookmark flex" src={isBookmarked ? BookmarkFilled.src : Bookmark.src} alt="Bookmark" />
                </div>
                <div className="tile-content absolute bottom-0 mb-4 ml-4">
                    <div className="flex gap-2 text-xs">
                        <div>
                            <span>{year}</span>
                        </div>
                        <div>
                            <span>{category}</span>
                        </div>
                        <div>
                            <span>{rating}</span>
                        </div>
                    </div>
                    <div className="tile-title">
                        <span>{title}</span>
                    </div>
                </div>
            </div>
        )
    }

    const regularTile = () => {
        return (
            <div data-trending="false" className="tile-wrapper relative text-white rounded-md flex-col w-full">
                <div className="mb-2 thumbnail overflow-hidden rounded-md relative w-full">
                    {playButton()}
                    <img className="absolute movie-poster" src={thumbnail?.large} alt="Movie Poster" />
                    <div className="bookmark-wrapper m-3 p-2 rounded-full absolute top-0 right-0">
                        <img className="bookmark flex" src={isBookmarked ? BookmarkFilled.src : Bookmark.src} alt="Bookmark" />
                    </div>
                </div>
                
                <div className="tile-content">
                    <div className="flex gap-2 text-xs">
                        <div>
                            <span>{year}</span>
                        </div>
                        <div>
                            <span>{category}</span>
                        </div>
                        <div>
                            <span>{rating}</span>
                        </div>
                    </div>
                    <div className="tile-title text-md">
                        <span>{title}</span>
                    </div>
                </div>
            </div>
        )
    }

    return isTrending ? trendingTile() : regularTile();
}