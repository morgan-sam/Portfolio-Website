import React, { useState } from 'react';

const Hamburger = (props) => {
	const [ open, setOpen ] = useState(false);

	const buttons = [ 'home', 'about', 'projects', 'contact' ];

	return (
		<div className={'hamburger'}>
			<div className={'hamburgerButton'} onClick={() => setOpen(!open)}>
				<div className={`hamburgerLine ${open ? 'openHamburgerLine' : null}`} />
				<div className={`hamburgerLine ${open ? 'openHamburgerLine' : null}`} />
				<div className={`hamburgerLine ${open ? 'openHamburgerLine' : null}`} />
			</div>
			{open && <div className={'hamburgerDropdown'}>{buttons.map((el) => <div>{el}</div>)}</div>}
		</div>
	);
};

export default Hamburger;
