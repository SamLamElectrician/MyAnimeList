import React from 'react';
import { useUserAuth } from '../context/UserAuthContext';
import { getDatabase, push, ref, remove, set } from 'firebase/database';
import firebaseConfig from '../firebase';
import { useState } from 'react';

const AnimeCard = ({ anime }) => {
	let { user } = useUserAuth();
	const [likeStatus, setLikeStatus] = useState(true);

	//takes data from Main api call to return a card
	const db = getDatabase(firebaseConfig);

	const pushFirebase = () => {
		push(ref(db, `user/${user.uid}`), {
			link: anime.url,
			japtitle: anime.title_japanese,
			engTitle: anime.title,
			img: anime.images.jpg.large_image_url,
			plot: anime.synopsis,
		});
		setLikeStatus(false);
	};

	const removeFirebase = () => {
		ref(db, `user/${anime.title}`).remove({
			link: anime.url,
			japtitle: anime.title_japanese,
			engTitle: anime.title,
			img: anime.images.jpg.large_image_url,
			plot: anime.synopsis,
		});
		setLikeStatus(true);
	};

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
			{likeStatus ? (
				<button onClick={() => pushFirebase()}>Add to list</button>
			) : (
				<button onClick={() => removeFirebase()}>Remove from List</button>
			)}
			{/* <Button anime={anime}> Add to List</Button> */}
			{user ? user.email : 'user it not here'}
		</article>
	);
};

export default AnimeCard;
