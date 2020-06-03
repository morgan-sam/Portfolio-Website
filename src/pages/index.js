import React, { useState, useEffect } from 'react';
import TopNavBar from '../components/TopNavBar';
import { topSectionStyle, middleSectionStyle, homeStyle, backgroundStyle, titleStyle } from '../styles/homePage';

export default function Home() {
	const [ scrollPosition, setSrollPosition ] = useState(0);
	const [ navColor, setNavColor ] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', () => setSrollPosition(window.pageYOffset));
		return () => window.removeEventListener('scroll', () => setSrollPosition(window.pageYOffset));
	}, []);

	useEffect(
		() => {
			const browserZoomLevel = Math.round(window.devicePixelRatio * 100);
			if (scrollPosition > (window.outerHeight - 145) / (browserZoomLevel / 100)) setNavColor('black');
			else setNavColor('white');
		},
		[ scrollPosition ]
	);

	return (
		<div style={homeStyle}>
			<TopNavBar color={navColor} />
			<div style={topSectionStyle}>
				<h1 style={titleStyle}>
					Sam Morgan<br />UK/USA Based Web Developer
				</h1>
				<div style={backgroundStyle} />
			</div>
			<div style={middleSectionStyle}>
				<div style={{ color: 'red' }}>2nd Section</div>
			</div>
		</div>
	);
}
