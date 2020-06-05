import React, { useState } from 'react';
import Hamburger from './Hamburger';
import NavButton from './NavButton';

const Navigation = (props) => {
	const [ hamburgerOpen, setHamburgerOpen ] = useState(false);
	const buttons = [ 'home', 'about', 'projects', 'contact' ];

	const getCurrentBtnClass = (section) => {
		if (section === 0) return 'splashBtn';
		else if (section === 1) return 'aboutBtn';
		else if (section === 2) return 'projectsBtn';
		else if (section === 3) return 'contactBtn';
	};

	return (
		<div className={'navigation'}>
			<Hamburger hamburgerOpen={hamburgerOpen} onChange={() => setHamburgerOpen(!hamburgerOpen)} />
			{hamburgerOpen && (
				<div className={'navBtnContainer'}>
					{buttons.map((el, i) => (
						<NavButton
							key={i}
							text={el}
							className={getCurrentBtnClass(props.currentSection)}
							handleClick={props.handleClicks[i]}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Navigation;
