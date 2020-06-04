import React from 'react';

const FirstSection = React.forwardRef((props, ref) => {
	return (
		<div className={'section'} ref={ref}>
			<div className={'splashTitle'}>
				Sam Morgan<br />UK/USA Front End Developer
			</div>
			<div className={'splashBackground'} />
		</div>
	);
});

export default FirstSection;
