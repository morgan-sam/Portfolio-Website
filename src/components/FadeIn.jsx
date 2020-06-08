import React, { useState, useEffect, useRef } from 'react';

const FadeIn = (props) => {
	const [ visible, setVisible ] = useState(false);
	const ref = useRef();

	useEffect(
		() => {
			const observer = new IntersectionObserver(
				(entries) => entries.forEach((entry) => setVisible(entry.isIntersecting)),
				{ rootMargin: '0px 0px -200px 0px' }
			);
			observer.observe(ref.current);
			return () => observer.unobserve(ref.current);
		},
		[ ref.current ]
	);

	return (
		<div className={`${props.className} fade-in ${visible ? 'visible' : ''}`} ref={ref}>
			{props.children}
		</div>
	);
};

export default FadeIn;
