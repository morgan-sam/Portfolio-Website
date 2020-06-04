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
						<ul style={{ width: '100%', position: 'relative' }}>
							<li style={{ marginBottom: '0.7rem' }}>
								Programming:<span style={{ position: 'absolute', right: '0' }}>||||||||||</span>
							</li>
							<li style={{ marginBottom: '0.7rem' }}>
								Front End:<span style={{ position: 'absolute', right: '0' }}>||||||||||</span>
							</li>
							<li style={{ marginBottom: '0.7rem' }}>
								Back End:<span style={{ position: 'absolute', right: '0' }}>||||||||||</span>
							</li>
							<li style={{ marginBottom: '0.7rem' }}>
								Design:<span style={{ position: 'absolute', right: '0' }}>||||||||||</span>
							</li>
							<li style={{ marginBottom: '0.7rem' }}>
								Photoshop:<span style={{ position: 'absolute', right: '0' }}>||||||||||</span>
							</li>
						</ul>
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
