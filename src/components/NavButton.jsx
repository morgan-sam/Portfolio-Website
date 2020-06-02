import React, { useState } from 'react';

const NavButton = (props) => {
	const [ hover, setHover ] = useState(false);

	const navButtonStyle = {
		position: 'relative',
		margin: '0.4rem 0.6rem',
		padding: '0.6rem 1.4rem',
		color: hover ? 'black' : 'white',
		border: '1px solid white',
		background: 'none',
		overflow: 'hidden',
		transition: '0.35s color ease-in-out',
		cursor: 'pointer'
	};

	const backgroundStyle = {
		position: 'absolute',
		top: '0',
		left: '0',
		width: '200%',
		height: '250%',
		backgroundColor: 'white',
		zIndex: '-1',
		transform: hover ? 'rotate(30deg) translate(-20%, 0%)' : 'rotate(30deg) translate(-50%, 150%)',
		transition: '0.35s transform ease-in-out'
	};

	return (
		<button
			onMouseOver={() => setHover(true)}
			onFocus={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			onBlur={() => setHover(false)}
			style={navButtonStyle}
		>
			{props.text}
			<div style={backgroundStyle} />
		</button>
	);
};

export default NavButton;
