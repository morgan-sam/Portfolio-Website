import React from 'react';

const ProjectCard = (props) => {
	const { className, title, img, live, source, focused, setFocused, mobileView } = props;

	return (
		<div className={`projectSubContainer ${focused === img ? 'focused' : null}`}>
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
		</div>
	);
};

export default ProjectCard;
