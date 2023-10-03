export default function Tile({
    title,
    year,
    thumbnail,
    category,
    rating,
    isBookmarked,
    isTrending
  }) {
	return (
		<div className="w-52">
            <div className="tile-wrapper">
                <div className="tile-image">
                    <img className="w-full h-full" src={thumbnail?.regular?.large} alt="Movie Poster" />
                </div>
                <div className="tile-content">
                    <div className="tile-title">
                        <div className="tile-title-text">
                            <p className="text-white text-lg font-semibold">{title}</p>
                        </div>
                        <div className="tile-title-year">
                            <p className="text-white text-sm font-semibold">{year}</p>
                        </div>
                    </div>
                    <div className="tile-category">
                        <p className="text-white text-sm font-semibold">{category}</p>
                    </div>
                    <div className="tile-rating">
                        <p className="text-white text-sm font-semibold">{rating}</p>
                    </div>
                    <div className="tile-bookmark">
                        <p className="text-white text-sm font-semibold">{isBookmarked}</p>
                    </div>
                    <div className="tile-trending">
                        <p className="text-white text-sm font-semibold">{isTrending}</p>
                    </div>
                </div>
            </div>
		</div>
	)
}