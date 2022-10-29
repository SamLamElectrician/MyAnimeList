import React from 'react';

function Sidebar({ topAnime }) {
	return (
		<aside>
			<nav>
				<h2>Top Anime</h2>
				{topAnime.map((anime) => (
					<a
						href={anime.url}
						target='_blank'
						rel='noreferrer'
						key={anime.mal_id}
					>
						{anime.title}
					</a>
				))}
			</nav>
		</aside>
	);
}

export default Sidebar;
