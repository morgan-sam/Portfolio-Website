import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import traintracks from '../img/traintracks.jpeg';
import platform from '../img/platform.jpeg';

const Projects = React.forwardRef((props, ref) => {
	const [ focused, setFocused ] = useState(null);
	useEffect(() => setFocused(null), [ props.scrollPosition ]);
	const mobileView = window.matchMedia('(max-width: 600px)').matches;

	return (
		<div className={'section projectSection'} ref={ref}>
			<div className={'projectTitle'}>Projects</div>
			<div className={'projectContainer'}>
				<ProjectCard
					className={'traintracksImg'}
					title={'Train Tracks Game'}
					img={traintracks}
					live={'https://morgan-sam.github.io/Train-Tracks-React/'}
					source={'https://github.com/morgan-sam/Train-Tracks-React'}
					focused={focused}
					setFocused={setFocused}
					mobileView={mobileView}
				/>
				<ProjectCard
					className={'platformImg'}
					title={'Project Management Platform'}
					img={platform}
					source={'https://github.com/morgan-sam/Project-Management-Platform'}
					focused={focused}
					setFocused={setFocused}
					mobileView={mobileView}
				/>
			</div>
		</div>
	);
});

export default Projects;
