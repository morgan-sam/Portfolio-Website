import React from 'react';
import Card from '../components/Card';
import {
	secondSectionStyle,
	cardGapPercentage,
	cardStyle,
	lineStyle,
	cardContainerStyle
} from '../styles/secondSection';

const SecondSection = React.forwardRef((props, ref) => {
	return (
		<div style={secondSectionStyle} ref={ref}>
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
});

export default SecondSection;
