import React from 'react';
import NavButton from './NavButton';

const TopNavBar = (props) => {
	const buttons = [ 'home', 'about', 'projects', 'contact' ];

	const getCurrentBtnClass = (section) => {
		if (section === 0) return 'splashBtn';
		else if (section === 1) return 'aboutBtn';
		else if (section === 2) return 'projectsBtn';
		else if (section === 3) return 'contactBtn';
	};

	return (
		<div className={'navbar'}>
			{buttons.map((el, i) => (
				<NavButton
					key={i}
					text={el}
					className={getCurrentBtnClass(props.currentSection)}
					handleClick={props.handleClicks[i]}
				/>
			))}
		</div>
	);
};

export default TopNavBar;
