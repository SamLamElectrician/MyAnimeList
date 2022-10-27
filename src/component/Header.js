import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className='headerNav'>
			<h1 className='leftHeader'>Sam's Anime List</h1>
			<ul className='rightNav'>
				<li>Home</li>
				<li>About</li>
			</ul>
		</nav>
	);
};

export default Header;
