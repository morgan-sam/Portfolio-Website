import React from 'react';
import traintracks from '../img/traintracks.jpeg';
import platform from '../img/platform.jpeg';

const thirdSectionStyle = {
	position: 'relative',
	display: 'block',
	height: '100vh',
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	backgroundColor: '#fff'
};

const titleStyle = {
	fontSize: '2rem',
	textDecorationLine: 'underline',
	top: '12%',
	position: 'absolute'
};

const subHeadingStyle = {
	textAlign: 'center',
	fontSize: '2rem',
	textDecorationLine: 'underline',
	margin: '3rem'
};

const imgStyles = {
	height: '25rem',
	border: '1px solid #444'
};

const imgContainerStyle = {
	display: 'flex'
};

const subContainerStyle = {
	display: 'flex',
	flexDirection: 'column',
	margin: '1rem'
};

const ThirdSection = () => {
	return (
		<div style={thirdSectionStyle}>
			<div style={titleStyle}>Projects</div>
			<div style={imgContainerStyle}>
				<div style={subContainerStyle}>
					<div style={subHeadingStyle}>Train Tracks Game</div>
					<img style={imgStyles} src={traintracks} alt="traintracks" />
				</div>
				<div style={subContainerStyle}>
					<div style={subHeadingStyle}>Project Management Platform</div>
					<img style={imgStyles} src={platform} alt="platform" />
				</div>
			</div>
		</div>
	);
};

export default ThirdSection;
