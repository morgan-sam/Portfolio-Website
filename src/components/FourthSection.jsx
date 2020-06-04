import React from 'react';

const imageURL =
	'https://images.unsplash.com/photo-1448838520990-b0f959a7da46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80';

const FourthSection = React.forwardRef((props, ref) => {
	return (
		<div className={'section contactSection'} ref={ref}>
			<img src={imageURL} style={{ height: '40rem' }} />
			<div className={'contactContainer'}>
				<div className={'contactText'}>Contact</div>
				<div className={'contactText'}>hello@smorgan.dev</div>
				<div className={'contactText'}>
					<a href="https://github.com/morgan-sam">https://github.com/morgan-sam</a>
				</div>
				<div className={'contactText'}>
					<a href="smorgan.dev/cv">Curriculum Vitae</a>
				</div>
				<div className={'contactText'}>© 2020</div>
			</div>
		</div>
	);
});

export default FourthSection;
