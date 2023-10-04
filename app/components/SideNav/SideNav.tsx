import './SideNav.css';

import Logo from '../../assets/logo.svg';
import Bookmark from '../../assets/icon-nav-bookmark.svg';
import Home from '../../assets/icon-nav-home.svg';
import Movie from '../../assets/icon-nav-movies.svg';
import TVSeries from '../../assets/icon-nav-tv-series.svg';

import Avatar from '../../assets/image-avatar.png';

export default function SideNav() {
	return (
		<div className="justify-between sideNav-wrapper flex lg:flex-col lg:w-fit w-full bg-secondary rounded-2xl p-5">
			<div className="lg:mb-10 flex">
				<img className="m-auto" src={Logo.src} alt="Mattflix Logo" />
			</div>
			<div className="flex lg:flex-col gap-6 lg:mb-52">
				<a href="/" className="m-auto flex menu-item">
					<img className="m-auto" src={Home.src} alt="Home" />
				</a>
				<a href="/Movies" className="m-auto flex menu-item">
					<img className="m-auto" src={Movie.src} alt="Movies" />
				</a>
				<a href="/TVSeries" className="m-auto flex menu-item">
					<img className="m-auto" src={TVSeries.src} alt="TV Series" />
				</a>
				<a href="/Bookmarked" className="m-auto flex menu-item">
					<img className="m-auto" src={Bookmark.src} alt="Bookmark" />
				</a>
			</div>
			<div className="flex">
				<img className="m-auto rounded-full w-6" src={Avatar.src} alt="Mattflix Logo" />
			</div>
		</div>
	)
}