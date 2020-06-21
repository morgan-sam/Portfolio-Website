import React from 'react';
import Hamburger from './Hamburger';
import NavButton from './NavButton';

const Navigation = (props) => {
	const { hamburgerOpen, setHamburgerOpen } = props;
	const buttons = [ 'home', 'about', 'projects', 'contact' ];

	const getCurrentBtnClass = (section) => {
		if (section === 0) return 'splashBtn';
		else if (section === 1) return 'aboutBtn';
		else if (section === 2) return 'projectsBtn';
		else if (section === 3) return 'contactBtn';
	};

	return (
		<div className={`navigation ${hamburgerOpen ? 'open' : null}`}>
			<Hamburger hamburgerOpen={hamburgerOpen} onChange={() => setHamburgerOpen(!hamburgerOpen)} />

			<div className={`navBtnContainer ${hamburgerOpen ? 'open' : null}`}>
				{buttons.map((el, i) => (
					<NavButton
						key={i}
						text={el}
						className={getCurrentBtnClass(props.currentSection)}
						handleClick={() => {
							props.handleClicks[i]();
							setHamburgerOpen(false);
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default Navigation;
