import React from 'react';

const Card = (props) => {
	const cardStyle = {
		position: 'relative',
		height: '26%',
		width: '14%',
		border: '5px solid #444',
		borderRadius: '10%',
		boxShadow: '6px 10px #888',
		backgroundColor: '#fff',
		overflow: 'hidden'
	};

	const titleStyle = {
		margin: '1rem auto',
		display: 'block',
		textAlign: 'center',
		fontSize: '2rem',
		textDecorationLine: 'underline'
	};

	const textStyle = {
		display: 'block',
		margin: '1.5rem auto',
		width: '80%',
		fontSize: '1.2rem',
		boxSizing: 'border-box',
		overflow: 'hidden'
	};

	const fadeOverlayStyle = {
		position: 'absolute',
		top: '0',
		left: '0',
		height: '100%',
		width: '100%',
		borderRadius: '10%',
		background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 1) 100%)'
	};

	return (
		<div style={cardStyle}>
			<div style={titleStyle}>Hello</div>
			<div style={textStyle}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum aperiam facere suscipit eveniet nisi
				blanditiis consectetur!
				<div style={fadeOverlayStyle} />
			</div>
		</div>
	);
};

export default Card;
