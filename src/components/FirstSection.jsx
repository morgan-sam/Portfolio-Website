import React from 'react';
import { firstSectionStyle, backgroundStyle, titleStyle } from '../styles/homePage';

const FirstSection = () => {
	return (
		<div style={firstSectionStyle}>
			<div style={titleStyle}>
				Sam Morgan<br />UK/USA Front End Developer
			</div>
			<div style={backgroundStyle} />
		</div>
	);
};

export default FirstSection;
