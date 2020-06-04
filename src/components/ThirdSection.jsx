import React from 'react';
import traintracks from '../img/traintracks.jpeg';
import platform from '../img/platform.jpeg';

import {
	thirdSectionStyle,
	titleStyle,
	subHeadingStyle,
	imgStyles,
	projectsContainerStyle,
	subContainerStyle,
	linkTextStyle
} from '../styles/thirdSection';

const ThirdSection = React.forwardRef((props, ref) => {
	return (
		<div style={thirdSectionStyle} ref={ref}>
			<div style={titleStyle}>Projects</div>
			<div style={projectsContainerStyle}>
				<div style={subContainerStyle}>
					<div style={subHeadingStyle}>Train Tracks Game</div>
					<img
						style={{ ...imgStyles, objectFit: 'cover', width: '25rem' }}
						src={traintracks}
						alt="traintracks"
					/>
					<div style={linkTextStyle}>
						<a href="https://morgan-sam.github.io/Train-Tracks-React/">Live</a> /{' '}
						<a href="https://github.com/morgan-sam/Train-Tracks-React">Source Code</a>
					</div>
				</div>
				<div style={subContainerStyle}>
					<div style={subHeadingStyle}>Project Management Platform</div>
					<img style={imgStyles} src={platform} alt="platform" />
					<div style={linkTextStyle}>
						<a href="https://github.com/morgan-sam/Project-Management-Platform">Source Code</a>
					</div>
				</div>
			</div>
		</div>
	);
});

export default ThirdSection;
