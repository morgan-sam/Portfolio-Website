import React, { useState, useEffect } from 'react';
import TopNavBar from '../components/TopNavBar';
import Card from '../components/Card';
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
				<div style={titleStyle}>
					Sam Morgan<br />UK/USA Based Web Developer
				</div>
				<div style={backgroundStyle} />
			</div>
			<div style={middleSectionStyle}>
				<Card
					style={{
						width: '17rem',
						left: '10%'
					}}
					title={'Bio'}
					text={
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper neque quis libero vehicula molestie. Nulla facilisi. Nunc sollicitudin mauris ac lorem vestibulum sagittis.'
					}
				/>
				<Card
					style={{ width: '17rem', left: '-10%' }}
					title={'Skills'}
					text={
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper neque quis libero vehicula molestie. Nulla facilisi. Nunc sollicitudin mauris ac lorem vestibulum sagittis.'
					}
				/>
				<Card
					style={{ width: '17rem', left: '10%' }}
					title={'Projects'}
					text={
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper neque quis libero vehicula molestie. Nulla facilisi. Nunc sollicitudin mauris ac lorem vestibulum sagittis.'
					}
				/>
			</div>
		</div>
	);
}
