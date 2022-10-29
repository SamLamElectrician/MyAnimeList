import React from 'react';

const AnimeCard = ({ anime }) => {
	return (
		<article className='animeCard'>
			<a href={anime.url} target='__blank' rel='noreferrer'>
				<figure>
					<img src={anime.images.jpg.large_image_url} alt='anime image' />
				</figure>
				<div className='info'>
					<h3>
						{anime.title} ||<br></br> {anime.title_japanese}
					</h3>
					<p>{anime.synopsis}</p>
				</div>
			</a>
			<button buttonId={anime.mal_id}>Add To List</button>
		</article>
	);
};

export default AnimeCard;
