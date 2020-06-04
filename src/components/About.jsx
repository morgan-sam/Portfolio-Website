import React from 'react';
import Card from './Card';
import SkillLevel from './SkillLevel';

const skillLevels = [
	{ skill: 'Programming', level: 10 },
	{ skill: 'Front End', level: 10 },
	{ skill: 'Back End', level: 8 },
	{ skill: 'Design', level: 8 },
	{ skill: 'Photoshop', level: 8 }
];

const About = React.forwardRef((props, ref) => {
	return (
		<div className={'section aboutSection'} ref={ref}>
			<div className={'line'} />
			<div className={'cardContainer'}>
				<Card
					title={'Bio'}
					text={[
						'I am a front end developer who loves programming and solving problems.',
						'I like to build software from scratch using minimal libraries.'
					]}
				/>
				<Card
					title={'Skills'}
					text={
						<ul style={{ width: '100%', position: 'relative' }}>
							{skillLevels.map((el) => <SkillLevel {...el} />)}
						</ul>
					}
				/>
				<Card
					title={'Tech'}
					text={[
						'Using:',
						'HTML, CSS, JavaScript, React, PostgreSQL, Node, Webpack, Jest, Linux',
						'Also used:',
						'Python, MongoDB, Bash'
					]}
				/>
			</div>
		</div>
	);
});

export default About;
