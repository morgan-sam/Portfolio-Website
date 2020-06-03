import React from 'react';
import NavButton from './NavButton';

const TopNavBar = (props) => {
	const buttons = [ 'home', 'about', 'projects', 'contact' ];

	const navBarStyle = {
		position: 'fixed',
		top: '1rem',
		right: '1rem',
		zIndex: '10'
	};

	return <div style={navBarStyle}>{buttons.map((el) => <NavButton text={el} color={props.color} />)}</div>;
};

export default TopNavBar;
