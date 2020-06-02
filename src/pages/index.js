import React from 'react';
import TopNavBar from '../components/TopNavBar';

export default function Home() {
	const homeStyle = {
		position: 'absolute',
		top: '0',
		left: '0',
		height: '100vh',
		width: '100vw',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column'
	};

	const backgroundStyle = {
		position: 'absolute',
		top: '0',
		left: '0',
		height: '100vh',
		width: '100vw',
		backgroundImage: `url(
      "https://images.unsplash.com/photo-1590664095641-7fa05f689813?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    )`,
		zIndex: '-10',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',

		backgroundImage: `linear-gradient(to top,  #fff, rgba(45, 13, 82, 0.5),  #000 90%), url(
      "https://images.unsplash.com/photo-1590664095641-7fa05f689813?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
    )`,
		backgroundColor: 'rgba(45, 13, 82, 0.7)',
		backgroundBlendMode: 'screen',
		filter: 'brightness(0.8) saturate(1.2)'
	};
	const titleStyle = {
		position: 'absolute',
		top: '48%',
		color: 'white',
		fontSize: '2.2rem'
	};

	return (
		<div style={homeStyle}>
			<h1 style={titleStyle}>
				Sam Morgan<br />UK/USA Based Web Developer
			</h1>
			<TopNavBar />
			<div style={backgroundStyle} />
		</div>
	);
}
