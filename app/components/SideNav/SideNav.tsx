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
				<div className="m-auto flex">
					<img className="m-auto menu-item" src={Home.src} alt="Home" />
				</div>
				<div className="m-auto flex">
					<img className="m-auto menu-item" src={Movie.src} alt="Movies" />
				</div>
				<div className="m-auto flex">
					<img className="m-auto menu-item" src={TVSeries.src} alt="TV Series" />
				</div>
				<div className="m-auto flex">
					<img className="m-auto menu-item" src={Bookmark.src} alt="Bookmark" />
				</div>
			</div>
			<div className="flex">
				<img className="m-auto rounded-full w-6" src={Avatar.src} alt="Mattflix Logo" />
			</div>
		</div>
	)
}