import React, { useState } from 'react';

const Hamburger = (props) => {
	const [ open, setOpen ] = useState(false);

	return (
		<div className={'hamburger'} onClick={() => setOpen(!open)}>
			<div className={`hamburgerLine ${open ? 'openHamburgerLine' : null}`} />
			<div className={`hamburgerLine ${open ? 'openHamburgerLine' : null}`} />
			<div className={`hamburgerLine ${open ? 'openHamburgerLine' : null}`} />
		</div>
	);
};

export default Hamburger;
