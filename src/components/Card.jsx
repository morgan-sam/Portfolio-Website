import React from 'react';

const Card = (props) => {
	const cardStyle = {
		position: 'relative',
		height: '26%',
		width: '14%',
		border: '5px solid #444',
		borderRadius: '10%',
		boxShadow: '6px 10px #888'
	};

	const titleStyle = {
		position: 'absolute',
		top: '10%',
		left: '50%',
		transform: 'translateX(-50%)',
		fontSize: '2rem',
		textDecorationLine: 'underline'
	};

	return (
		<div style={cardStyle}>
			<div style={titleStyle}>Hello</div>
		</div>
	);
};

export default Card;
