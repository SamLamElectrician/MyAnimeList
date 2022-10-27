import React from 'react';
//components
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Main from './component/Main';
import { useState, useEffect } from 'react';

function App() {
	// sets anime list
	const [animeList, setAnimeList] = useState([]);
	//sets top animes
	const [topAnime, setTopAnime] = useState([]);
	//sets search function
	const [search, setSearch] = useState('');
	const [random, setRandom] = useState([]);

	//async/await function to display to top 5 animes by popularity
	const GetTopAnime = async () => {
		const response = await fetch(
			'https://api.jikan.moe/v4/top/anime?filter=bypopularity&page=1'
		);
		//returns json data
		const topAnime = await response.json();
		//slices the data so it only shows the top 5
		setTopAnime(topAnime.data.slice(0, 5));
	};
	//use effect to activate topanime only once
	useEffect(() => {
		GetTopAnime();
	}, []);

	//handles the Search function
	const HandleSearch = (e) => {
		//prevents default of form
		e.preventDefault();
		//searches anime title
		SearchAnime(search);
	};

	//add error handling
	const SearchAnime = async (query) => {
		const response = await fetch(
			`https://api.jikan.moe/v4/anime?q=${query}&limit=20&order_by=title&sort=acs`
		);
		const animeQuery = await response.json();
		setAnimeList(animeQuery.data);
	};

	const SearchRandom = async () => {
		do {
			const response = await fetch('https://api.jikan.moe/v4/random/anime');
			const animeQuery = await response.json();
			// setRandom(animeQuery);
			setRandom({ ...random, animeQuery });
			console.log(random);
		} while (random.length < 5);
	};
	useEffect(() => {
		SearchRandom();
	}, []);

	return (
		<>
			<Header />
			<div className='content'>
				<Sidebar topAnime={topAnime} />
				<Main
					HandleSearch={HandleSearch}
					search={search}
					setSearch={setSearch}
					animeList={animeList}
				/>
			</div>
		</>
	);
}

export default App;
