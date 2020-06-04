import React, { useState, useEffect } from 'react';
import TopNavBar from '../components/TopNavBar';
import Hamburger from '../components/Hamburger';
import Splash from '../components/Splash';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
	const [ scrollPosition, setScrollPosition ] = useState(0);
	const [ currentSection, setCurrentSection ] = useState(0);

	const firstRef = React.createRef();
	const secondRef = React.createRef();
	const thirdRef = React.createRef();
	const fourthRef = React.createRef();

	const handleClicks = [ firstRef, secondRef, thirdRef, fourthRef ].map((el) => () =>
		el.current.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	);

	useEffect(() => {
		window.addEventListener('scroll', () => setScrollPosition(window.pageYOffset));
		return () => window.removeEventListener('scroll', () => setScrollPosition(window.pageYOffset));
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
		<div>
			<TopNavBar currentSection={currentSection} handleClicks={handleClicks} />
			<Hamburger />
			<Splash ref={firstRef} />
			<About ref={secondRef} />
			<Projects ref={thirdRef} />
			<Contact ref={fourthRef} />
		</div>
	);
}
