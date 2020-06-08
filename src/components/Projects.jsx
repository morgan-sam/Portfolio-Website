import React, { useState, useEffect } from 'react';
import traintracks from '../img/traintracks.jpeg';
import platform from '../img/platform.jpeg';

const Projects = React.forwardRef((props, ref) => {
	const [ focused, setFocused ] = useState(null);
	useEffect(() => setFocused(null), [ props.scrollPosition ]);
	console.log(focused);

	return (
		<div className={'section projectSection'} ref={ref}>
			<div className={'projectTitle'}>Projects</div>
			<div className={'projectContainer'}>
				<div className={`projectSubContainer`}>
					<div className={'projectSubHeading'}>Train Tracks Game</div>
					<div className={'projectImgWrap'}>
						<img
							className={`projectImg traintracksImg ${focused === traintracks ? 'focused' : null}`}
							src={traintracks}
							alt="traintracks"
							onClick={() => {
								if (focused === traintracks) setFocused(null);
								else setFocused(traintracks);
							}}
						/>
					</div>
					<div className={'linkTextStyle'}>
						<a href="https://morgan-sam.github.io/Train-Tracks-React/">Live</a> /{' '}
						<a href="https://github.com/morgan-sam/Train-Tracks-React">Source Code</a>
					</div>
				</div>
				<div className={`projectSubContainer`}>
					<div className={'projectSubHeading'}>Project Management Platform</div>
					<div className={'projectImgWrap'}>
						<img
							className={`projectImg platformImg ${focused === platform ? 'focused' : null}`}
							src={platform}
							alt="platform"
							onClick={() => {
								if (focused === platform) setFocused(null);
								else setFocused(platform);
							}}
						/>
					</div>
					<div className={'linkTextStyle'}>
						<a href="https://github.com/morgan-sam/Project-Management-Platform">Source Code</a>
					</div>
				</div>
			</div>
		</div>
	);
});

export default Projects;
