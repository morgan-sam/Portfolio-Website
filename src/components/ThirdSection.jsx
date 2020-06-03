import React from 'react';

const thirdSectionStyle = {
	position: 'relative',
	display: 'block',
	height: '100vh',
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column'
};

const titleStyle = {
	fontSize: '2rem',
	textDecorationLine: 'underline',
	top: '10%',
	position: 'absolute'
};

const ThirdSection = () => {
	return (
		<div style={thirdSectionStyle}>
			<div style={titleStyle}>Projects</div>
		</div>
	);
};

export default ThirdSection;
