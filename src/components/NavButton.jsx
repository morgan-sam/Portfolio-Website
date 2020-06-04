import React, { useState } from 'react';

const NavButton = (props) => {
	const { colors } = props;

	const [ hover, setHover ] = useState(false);

	const navButtonStyle = {
		position: 'relative',
		margin: '0.4rem 0.6rem',
		padding: '0.6rem 1.4rem',
		color: hover ? colors.hover.text : colors.default.text,
		border: `1px solid ${hover ? colors.hover.border : colors.default.border}`,
		backgroundColor: colors.default.background,
		overflow: 'hidden',
		transition: '0.35s color ease-in-out, 0.35s border ease-in-out, 0.35s background ease-in-out',
		cursor: 'pointer',
		zIndex: '1'
	};

	const btnTextStyle = {
		zIndex: '2'
	};

	const backgroundStyle = {
		position: 'absolute',
		top: '0',
		left: '0',
		width: '200%',
		height: '250%',
		backgroundColor: colors.hover.background,
		zIndex: '-1',
		transform: hover ? 'rotate(30deg) translate(-20%, 0%)' : 'rotate(30deg) translate(-50%, 150%)',
		transition: '0.35s transform ease-in-out'
	};

	return (
		<button
			onClick={() => props.handleClick()}
			onMouseOver={() => setHover(true)}
			onFocus={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			onBlur={() => setHover(false)}
			style={navButtonStyle}
		>
			<div style={btnTextStyle}>{props.text}</div>
			<div style={backgroundStyle} />
		</button>
	);
};

export default NavButton;
