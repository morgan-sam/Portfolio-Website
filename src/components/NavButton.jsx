import React, { useState } from 'react';

const NavButton = (props) => {
	return (
		<button className={`navBtn ${props.className}`} onClick={() => props.handleClick()}>
			<div className={'navBtnText'}>{props.text}</div>
			<div className={`${props.className} btnBackground`} />
		</button>
	);
};

export default NavButton;
