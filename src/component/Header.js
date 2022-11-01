import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

const Header = () => {
	return (
		<nav className='headerNav'>
			<div className='leftHeader'>
				<img src={Logo} alt="Sam's Anime List Logo" />
			</div>
			<ul className='rightNav'>
				<li>
					<Link to='/home'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
				{/* <li>
					<button>Sign In</button>
				</li> */}
			</ul>
		</nav>
	);
};

export default Header;
