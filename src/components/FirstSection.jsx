import React from 'react';
import { firstSectionStyle, backgroundStyle, titleStyle } from '../styles/firstSection';

const FirstSection = React.forwardRef((props, ref) => {
	return (
		<div className={'section'} style={firstSectionStyle} ref={ref}>
			<div style={titleStyle}>
				Sam Morgan<br />UK/USA Front End Developer
			</div>
			<div style={backgroundStyle} />
		</div>
	);
});

export default FirstSection;
