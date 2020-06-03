import React, { useState, useEffect } from 'react';
import TopNavBar from '../components/TopNavBar';
import Card from '../components/Card';
import { topSectionStyle, middleSectionStyle, homeStyle, backgroundStyle, titleStyle } from '../styles/homePage';

export default function Home() {
	const [ scrollPosition, setSrollPosition ] = useState(0);
	const [ navColor, setNavColor ] = useState(0);

	const cardGapPercentage = 25;

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
				<div style={{ position: 'absolute', height: '50%', width: '5px', backgroundColor: '#444' }} />
				<div
					style={{ position: 'relative', display: 'block', margin: '0 auto', width: '50rem', height: '75%' }}
				>
					<Card
						style={{
							width: '17rem',
							height: '17rem',
							position: ' absolute',
							top: '0',
							left: `${50 + cardGapPercentage}%`,
							transform: 'translateX(-50%)'
						}}
						title={'Bio'}
						text={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper neque quis libero vehicula molestie. Nulla facilisi. Nunc sollicitudin mauris ac lorem vestibulum sagittis.'
						}
					/>
					<Card
						style={{
							width: '17rem',
							height: '17rem',
							position: ' absolute',
							top: '50%',
							left: `${50 - cardGapPercentage}%`,
							transform: 'translate(-50%,-50%)'
						}}
						title={'Skills'}
						text={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper neque quis libero vehicula molestie. Nulla facilisi. Nunc sollicitudin mauris ac lorem vestibulum sagittis.'
						}
					/>
					<Card
						style={{
							width: '17rem',
							height: '17rem',
							position: ' absolute',
							bottom: '0',
							left: `${50 + cardGapPercentage}%`,
							transform: 'translateX(-50%)'
						}}
						title={'Projects'}
						text={
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper neque quis libero vehicula molestie. Nulla facilisi. Nunc sollicitudin mauris ac lorem vestibulum sagittis.'
						}
					/>
				</div>
			</div>
		</div>
	);
}
