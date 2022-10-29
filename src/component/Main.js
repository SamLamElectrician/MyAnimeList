import React from 'react';
import AnimeCard from './AnimeCard';

const Main = (props) => {
	return (
		<main>
			<div className='searchContainer'>
				<form onSubmit={props.HandleSearch} className='searchForm'>
					<label htmlFor='Search Anime'></label>
					<input
						type='search'
						placeholder='Search Anime and Mangas'
						value={props.search}
						onChange={(e) => props.setSearch(e.target.value)}
					/>
				</form>
			</div>
			{props.search ? (
				<div>
					<h3>Search Results</h3>
					<div className='animeList'>
						{props.animeList.map((anime) => (
							<AnimeCard anime={anime} key={anime.mal_id} />
						))}
					</div>
				</div>
			) : (
				<div>
					<h3>Animes You Should Check Out</h3>
					<div className='animeList'>
						{props.random.map((anime) => (
							<AnimeCard anime={anime} key={anime.mal_id} />
						))}
					</div>
				</div>
			)}
			{/* <div className='animeList'>
				{props.animeList.map((anime) => (
					<AnimeCard anime={anime} key={anime.mal_id} />
				))}
			</div> */}
		</main>
	);
};

export default Main;
