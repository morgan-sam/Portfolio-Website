import React from 'react';

const Contact = React.forwardRef((props, ref) => {
	return (
		<div className={'section contactSection'} ref={ref}>
			<div className={'contactImage'} />
			<div className={'contactContainer'}>
				<div className={'contactText'}>Contact</div>
				<div className={'contactText'}>hello@smorgan.dev</div>
				<div className={'contactText'}>
					<a href="https://github.com/morgan-sam">https://github.com/morgan-sam</a>
				</div>
				<div className={'contactText'}>
					{/* <a href="smorgan.dev/cv">Curriculum Vitae</a> */}
					<div>THANK YOU</div>
				</div>
				<div className={'contactText'}>© 2020</div>
			</div>
		</div>
	);
});

export default Contact;
