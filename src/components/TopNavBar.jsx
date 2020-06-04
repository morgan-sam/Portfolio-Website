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

	const getCurrentBtnStyle = (section) => {
		if (section === 0)
			return {
				default: {
					text: 'white',
					border: 'white',
					background: 'transparent'
				},
				hover: {
					text: 'black',
					border: 'white',
					background: 'white'
				}
			};
		else if (section === 1)
			return {
				default: {
					text: 'black',
					border: 'black',
					background: 'transparent'
				},
				hover: {
					text: 'black',
					border: 'black',
					background: 'white'
				}
			};
		else if (section === 2)
			return {
				default: {
					text: 'black',
					border: 'black',
					background: '#fff'
				},
				hover: {
					text: 'black',
					border: 'black',
					background: '#eee'
				}
			};
		else if (section === 3)
			return {
				default: {
					text: '#2b0e0e',
					border: '#2b0e0e',
					background: '#f6eded'
				},
				hover: {
					text: 'black',
					border: 'white',
					background: 'white'
				}
			};
	};

	return (
		<div style={navBarStyle}>
			{buttons.map((el, i) => (
				<NavButton
					text={el}
					colors={getCurrentBtnStyle(props.currentSection)}
					handleClick={props.handleClicks[i]}
				/>
			))}
		</div>
	);
};

export default TopNavBar;
