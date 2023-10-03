import './SearchBar.css';
import SearchIcon from '../../assets/icon-search.svg';

export default function SearchBar() {
	return (
		<div className="searchBar-wrapper h-fit flex gap-3">
            <div className="m-auto">
                <img className="flex" src={SearchIcon.src} alt="Search Icon" />
            </div>
            <div className="flex">
                <input className="searchBar w-full" type="text" placeholder="Search for movies or TV series" />
            </div>
		</div>
	)
}