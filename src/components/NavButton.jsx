import React, { useState } from 'react';

const NavButton = (props) => {
	const [ hover, setHover ] = useState(false);

	return (
		<button
			className={`navBtn ${props.className} ${hover ? 'hover' : null}`}
			onClick={() => props.handleClick()}
			onMouseOver={() => setHover(true)}
			onFocus={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			onBlur={() => setHover(false)}
		>
			<div className={'navBtnText'}>{props.text}</div>
			<div className={`${props.className} btnBackground ${hover ? 'hover' : null}`} />
		</button>
	);
};

export default NavButton;
