import React from 'react';
import { topSectionStyle, backgroundStyle, titleStyle } from '../styles/homePage';

const FirstSection = () => {
	return (
		<div style={topSectionStyle}>
			<div style={titleStyle}>
				Sam Morgan<br />UK/USA Front End Developer
			</div>
			<div style={backgroundStyle} />
		</div>
	);
};

export default FirstSection;
