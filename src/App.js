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
		try {
			const response = await fetch(
				'https://api.jikan.moe/v4/top/anime?filter=bypopularit&page=1'
			);
			//returns json data
			const topAnime = await response.json();
			//slices the data so it only shows the top 5
			setTopAnime(topAnime.data.slice(0, 5));
		} catch (error) {
			alert(error);
		}
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
		if (search) {
			SearchAnime(search);
		} else {
			alert('Please enter an anime to search');
		}
	};

	const SearchAnime = async (query) => {
		//error handling for api call
		try {
			//api call for a query
			const response = await fetch(
				`https://api.jikan.moe/v4/anime?q=${query}&limit=20&order_by=title&sort=acs`
			);
			const animeQuery = await response.json();
			setAnimeList(animeQuery.data);
		} catch (error) {
			alert(error);
		}
	};

	const SearchRandom = async () => {
		//sets an empty array to append to
		const animeArray = [];
		//since api only returns
		while (animeArray.length < 21) {
			const response = await fetch('https://api.jikan.moe/v4/random/anime');
			const animeQuery = await response.json();
			animeArray.push(animeQuery.data);
		}
		setRandom(animeArray);
	};
	useEffect(() => {
		SearchRandom();
	}, []);

	console.log(random);

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
					random={random}
				/>
			</div>
		</>
	);
}

export default App;
