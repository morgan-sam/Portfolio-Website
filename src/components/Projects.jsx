import React from 'react';
import traintracks from '../img/traintracks.jpeg';
import platform from '../img/platform.jpeg';

const Projects = React.forwardRef((props, ref) => {
	return (
		<div className={'section projectSection'} ref={ref}>
			<div className={'projectTitle'}>Projects</div>
			<div className={'projectContainer'}>
				<div className={'projectSubContainer'}>
					<div className={'projectSubHeading'}>Train Tracks Game</div>
					<img className={'projectImg traintracksImg'} src={traintracks} alt="traintracks" />
					<div className={'linkTextStyle'}>
						<a href="https://morgan-sam.github.io/Train-Tracks-React/">Live</a> /{' '}
						<a href="https://github.com/morgan-sam/Train-Tracks-React">Source Code</a>
					</div>
				</div>
				<div className={'projectSubContainer'}>
					<div className={'projectSubHeading'}>Project Management Platform</div>
					<img className={'projectImg platformImg'} src={platform} alt="platform" />
					<div className={'linkTextStyle'}>
						<a href="https://github.com/morgan-sam/Project-Management-Platform">Source Code</a>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Projects;
