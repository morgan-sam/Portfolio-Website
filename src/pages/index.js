import React, { useState, useEffect } from 'react';
import TopNavBar from '../components/TopNavBar';
import FirstSection from '../components/FirstSection';
import SecondSection from '../components/SecondSection';
import ThirdSection from '../components/ThirdSection';
import FourthSection from '../components/FourthSection';
import { homeStyle } from '../styles/homePage';

export default function Home() {
	const [ scrollPosition, setSrollPosition ] = useState(0);
	const [ currentSection, setCurrentSection ] = useState(0);

	useEffect(() => {
		window.addEventListener('scroll', () => setSrollPosition(window.pageYOffset));
		return () => window.removeEventListener('scroll', () => setSrollPosition(window.pageYOffset));
	}, []);

	useEffect(
		() => {
			if (scrollPosition < 940) setCurrentSection(0);
			else if (scrollPosition < 1910) setCurrentSection(1);
			else if (scrollPosition < 2890) setCurrentSection(2);
			else setCurrentSection(3);
		},
		[ scrollPosition ]
	);

	return (
		<div style={homeStyle}>
			<TopNavBar currentSection={currentSection} />
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
		</div>
	);
}
