import React from 'react';

function Sidebar({ topAnime }) {
	return (
		<aside>
			<nav>
				<h2>Top Anime</h2>
				{topAnime.map((anime) => (
					<a href={anime.url} target='__blank' key={anime.mal_id}>
						{anime.title}
					</a>
				))}
			</nav>
		</aside>
	);
}

export default Sidebar;
