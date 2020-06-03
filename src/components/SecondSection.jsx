import React from 'react';
import Card from '../components/Card';
import { secondSectionStyle } from '../styles/homePage';

const cardGapPercentage = 25;

const cardStyle = {
	width: '17rem',
	height: '17rem',
	position: ' absolute'
};

const lineStyle = { position: 'absolute', height: '50%', width: '5px', backgroundColor: '#444' };

const cardContainerStyle = { position: 'relative', display: 'block', margin: '0 auto', width: '50rem', height: '75%' };

const SecondSection = () => {
	return (
		<div style={secondSectionStyle}>
			<div style={lineStyle} />
			<div style={cardContainerStyle}>
				<Card
					style={{
						...cardStyle,
						top: '0',
						left: `${50 + cardGapPercentage}%`,
						transform: 'translateX(-50%)'
					}}
					title={'Bio'}
					text={[
						'I am a front end developer who loves programming and solving problems.',
						'I like to build software from scratch using minimal libraries.'
					]}
				/>
				<Card
					style={{
						...cardStyle,
						top: '50%',
						left: `${50 - cardGapPercentage}%`,
						transform: 'translate(-50%,-50%)'
					}}
					title={'Skills'}
					text={
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper neque quis libero vehicula molestie. Nulla facilisi. Nunc sollicitudin mauris ac lorem vestibulum sagittis.'
					}
				/>
				<Card
					style={{
						...cardStyle,
						bottom: '0',
						left: `${50 + cardGapPercentage}%`,
						transform: 'translateX(-50%)'
					}}
					title={'Tech'}
					text={[
						'Using:',
						'HTML, CSS, JavaScript, React, PostgreSQL, Webpack, Jest, Linux',
						'Also used:',
						'Python, MongoDB, Bash'
					]}
				/>
			</div>
		</div>
	);
};

export default SecondSection;
