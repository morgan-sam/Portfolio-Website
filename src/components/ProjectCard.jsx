import React from 'react';
import FadeIn from './FadeIn';

const ProjectCard = (props) => {
	const { fadeDelay, className, title, img, live, source, focused, setFocused, mobileView } = props;

	return (
		<FadeIn className={`projectSubContainer ${focused === img ? 'focused' : null}`} delay={fadeDelay}>
			<div className={'projectSubHeading'}>{title}</div>
			<div
				className={`projectImg ${className}`}
				onClick={() => {
					if (focused !== img && !mobileView) setFocused(img);
					else setFocused(null);
				}}
				style={{
					backgroundImage: `url(${img})`
				}}
			/>
			<div className={'linkTextStyle'}>
				{live && <a href={live}>Live</a>}
				{live && source && ' / '}
				{source && <a href={source}>Source Code</a>}
			</div>
		</FadeIn>
	);
};

export default ProjectCard;
