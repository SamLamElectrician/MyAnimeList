import React from 'react';
import { useUserAuth } from '../context/UserAuthContext';

const AnimeCard = ({ anime }) => {
	const { user } = useUserAuth();
	console.log({ user });
	//takes data from Main api call to return a card

	return (
		<article className='animeCard'>
			<a href={anime.url} target='_blank' rel='noreferrer'>
				<figure>
					<img src={anime.images.jpg.large_image_url} alt='anime' />
				</figure>
				<div className='info'>
					<h3>
						{anime.title} ||<br></br> {anime.title_japanese}
					</h3>
					<p>{anime.synopsis}</p>
				</div>
			</a>
			<button>Add to list</button>
			{/* <Button anime={anime}> Add to List</Button> */}
		</article>
	);
};

export default AnimeCard;
