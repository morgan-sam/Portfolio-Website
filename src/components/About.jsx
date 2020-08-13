import React, { useState, useEffect } from 'react';
import AboutCard from './AboutCard';
import Contribution from './Contribution';

const About = React.forwardRef((props, ref) => {
	const [ osc, setOsc ] = useState([
		{ name: 'Material-UI', url: 'https://api.github.com/repos/mui-org/material-ui', stars: null },
		{ name: 'Gatsby', url: 'https://api.github.com/repos/gatsbyjs/gatsby', stars: null }
	]);

	const getStarNum = async (url) => {
		let response = await fetch(url, {
			headers: {
				Accept: 'application/vnd.github.preview'
			}
		});
		const json = await response.json();
		return json.stargazers_count;
	};

	const getAllStars = async () => Promise.all(osc.map(async (el) => ({ ...el, stars: await getStarNum(el.url) })));

	useEffect(() => {
		const init = async () => {
			const all = await getAllStars();
			setOsc(all);
		};
		init();
	}, []);

	return (
		<div className={'section aboutSection'} ref={ref}>
			<div className={'line'} />
			<div className={'cardContainer'}>
				<AboutCard
					title={'Bio'}
					text={[
						'I am a front end developer who loves programming and solving problems.',
						'I like to build software from scratch using minimal libraries.'
					]}
				/>
				<AboutCard
					title={'Open Source Contributions'}
					text={
						<ul style={{ width: '100%', position: 'relative' }}>
							{osc.map((el, i) => <Contribution key={i} {...el} />)}
						</ul>
					}
				/>
				<AboutCard
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
