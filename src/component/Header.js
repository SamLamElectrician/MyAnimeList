import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className='headerNav'>
			<h1 className='leftHeader'>Sam's Anime List</h1>
			<ul className='rightNav'>
				<li>
					<Link to='/home'>Home</Link>
				</li>
				<li>
					<Link to='/'>About</Link>
				</li>
				{/* <li>
					<button>Sign In</button>
				</li> */}
			</ul>
		</nav>
	);
};

export default Header;
