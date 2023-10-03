import './SideNav.css';

import Logo from '../../assets/logo.svg';
import Bookmark from '../../assets/icon-nav-bookmark.svg';
import Home from '../../assets/icon-nav-home.svg';
import Movie from '../../assets/icon-nav-movies.svg';
import TVSeries from '../../assets/icon-nav-tv-series.svg';

import Avatar from '../../assets/image-avatar.png';

export default function SideNav() {
	return (
		<div className="sideNav-wrapper flex-col w-fit bg-secondary rounded-2xl p-5">
			<div className="mb-10 m-auto flex">
				<img className="m-auto " src={Logo.src} alt="Mattflix Logo" />
			</div>
			<div className="mb-6 m-auto flex">
				<img className="m-auto menu-item" src={Home.src} alt="Home" />
			</div>
			<div className="mb-6 m-auto flex">
				<img className="m-auto menu-item" src={Movie.src} alt="Movies" />
			</div>
			<div className="mb-6 m-auto flex">
				<img className="m-auto menu-item" src={TVSeries.src} alt="TV Series" />
			</div>
			<div className="mb-52 m-auto flex">
				<img className="m-auto menu-item" src={Bookmark.src} alt="Bookmark" />
			</div>
			<div className="m-auto flex">
				<img className="m-auto rounded-full w-6" src={Avatar.src} alt="Mattflix Logo" />
			</div>
		</div>
	)
}