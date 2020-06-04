import React from 'react';

import { imageURL, fourthSectionStyle, contactContainerStyle, contactTextStyle } from '../styles/fourthSection';

const FourthSection = React.forwardRef((props, ref) => {
	return (
		<div style={fourthSectionStyle} ref={ref}>
			<img src={imageURL} style={{ height: '40rem' }} />
			<div style={contactContainerStyle}>
				<div style={contactTextStyle}>Contact</div>
				<div style={contactTextStyle}>hello@smorgan.dev</div>
				<div style={contactTextStyle}>
					<a href="https://github.com/morgan-sam">https://github.com/morgan-sam</a>
				</div>
				<div style={contactTextStyle}>
					<a href="smorgan.dev/cv">Curriculum Vitae</a>
				</div>
				<div style={contactTextStyle}>© 2020</div>
			</div>
		</div>
	);
});

export default FourthSection;
