import React from 'react';

const imageURL =
	'https://images.unsplash.com/photo-1448838520990-b0f959a7da46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80';

const fourthSectionStyle = {
	position: 'relative',
	display: 'block',
	height: '100vh',
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	backgroundColor: '#efeeff'
};

const FourthSection = () => {
	return (
		<div style={fourthSectionStyle}>
			<img src={imageURL} style={{ height: '35rem' }} />
		</div>
	);
};

export default FourthSection;
