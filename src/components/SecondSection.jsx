import React from 'react';
import Card from '../components/Card';

const skillLevels = [
	{ skill: 'Programming', level: 10 },
	{ skill: 'Front End', level: 10 },
	{ skill: 'Back End', level: 8 },
	{ skill: 'Design', level: 8 },
	{ skill: 'Photoshop', level: 8 }
];

const SecondSection = React.forwardRef((props, ref) => {
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
							{skillLevels.map((el) => (
								<li style={{ marginBottom: '0.7rem' }}>
									{`${el.skill}:`}
									<div
										style={{
											display: 'inline-block',
											position: 'absolute',
											right: '0'
										}}
									>
										<div
											style={{
												display: 'inline-block',
												color: '#000'
											}}
										>
											{[ ...Array(el.level).keys() ].map((p) => '|')}
										</div>
										<div
											style={{
												display: 'inline-block',
												color: '#ccc'
											}}
										>
											{' '}
											{[ ...Array(10 - el.level).keys() ].map((p) => '|')}
										</div>
									</div>
								</li>
							))}
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

export default SecondSection;
