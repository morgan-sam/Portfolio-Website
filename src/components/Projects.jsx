import React, { useState, useEffect } from 'react';
import FadeIn from './FadeIn';
import ProjectCard from './ProjectCard';
import traintracks from '../img/traintracks.jpeg';
import platform from '../img/platform.jpeg';
import pomodoro from '../img/pomodoro.jpeg';

const Projects = React.forwardRef((props, ref) => {
	const [ focused, setFocused ] = useState(null);
	useEffect(() => setFocused(null), [ props.scrollPosition ]);
	const cardCommonProps = {
		focused,
		setFocused,
		mobileView: window.matchMedia('(max-width: 600px)').matches
	};

	return (
		<div className={'section projectSection'} ref={ref}>
			<FadeIn>
				<div className={'projectTitle'}>Projects</div>
			</FadeIn>
			<div className={'projectContainer'}>
				<ProjectCard
					fadeDelay={0}
					className={'platformImg'}
					title={'Project Management Platform'}
					img={platform}
					source={'https://github.com/morgan-sam/Project-Management-Platform'}
					{...cardCommonProps}
				/>
				<ProjectCard
					fadeDelay={200}
					className={'traintracksImg'}
					title={'Train Tracks Game'}
					img={traintracks}
					live={'https://morgan-sam.github.io/Train-Tracks-React/'}
					source={'https://github.com/morgan-sam/Train-Tracks-React'}
					{...cardCommonProps}
				/>
				<ProjectCard
					fadeDelay={400}
					className={'pomodoroImg'}
					title={'Pomodoro Tracker'}
					img={pomodoro}
					source={'https://github.com/morgan-sam/Pomodoro-Tracker'}
					{...cardCommonProps}
				/>
			</div>
		</div>
	);
});

export default Projects;
