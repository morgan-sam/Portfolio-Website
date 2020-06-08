import React from 'react';
import FadeIn from './FadeIn';

const Splash = React.forwardRef((props, ref) => {
	return (
		<div className={'section'} ref={ref}>
			<FadeIn>
				<div className={'splashTitle'}>
					Sam Morgan<br />UK/USA Front End Developer
				</div>
			</FadeIn>
			<div className={'splashBackground'} />
		</div>
	);
});

export default Splash;
