import React from 'react';
import NavButton from './NavButton';

const TopNavBar = (props) => {
	const buttons = [ 'home', 'about', 'blog', 'contact' ];

	const navBarStyle = {
		position: 'fixed',
		top: '1rem',
		right: '1rem'
	};

	return <div style={navBarStyle}>{buttons.map((el) => <NavButton text={el} />)}</div>;
};

export default TopNavBar;
