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

const contactContainerStyle = {
	position: 'absolute',
	height: '20rem',
	width: '20rem',
	backgroundColor: '#efeeff',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	borderRadius: '100%'
};

const contactTextStyle = {
	fontSize: '1.3rem',
	margin: '0.35rem',
	textAlign: 'center',
	color: '#444'
};

const FourthSection = () => {
	return (
		<div style={fourthSectionStyle}>
			<img src={imageURL} style={{ height: '40rem' }} />
			<div style={contactContainerStyle}>
				<div style={contactTextStyle}>Contact</div>
				<div style={contactTextStyle}>hello@smorgan.dev</div>
				<div style={contactTextStyle}>
					<a href="https://github.com/morgan-sam">https://github.com/morgan-sam</a>
				</div>
				<div style={contactTextStyle}>Curriculum Vitae</div>
				<div style={contactTextStyle}>© 2020</div>
			</div>
		</div>
	);
};

export default FourthSection;
