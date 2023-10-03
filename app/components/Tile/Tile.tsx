import './Tile.css';
import BookmarkFilled from '../../assets/icon-bookmark-full.svg';
import Bookmark from '../../assets/icon-bookmark-empty.svg';

export default function Tile({
    title,
    year,
    thumbnail,
    category,
    rating,
    isBookmarked,
    isTrending
  }) {
    const trendingTile = () => {
        return (
            <div data-trending="true" className="tile-wrapper relative text-white rounded-md">
                <img className="h-full absolute" src={thumbnail?.large} alt="Movie Poster" />
                <div className="gradient h-full w-full absolute top-0 left-0"></div>
                <div className="bookmark-wrapper m-4 p-2 rounded-full absolute top-0 right-0">
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
                    <img className="absolute movie-poster" src={thumbnail?.large} alt="Movie Poster" />
                    <div className="bookmark-wrapper m-4 p-2 rounded-full absolute top-0 right-0">
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