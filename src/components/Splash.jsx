import React from 'react';
import FadeIn from './FadeIn';

const Splash = React.forwardRef((props, ref) => {
	return (
		<div className={'section'} ref={ref}>
			<FadeIn>
				<div className={'splashTitle'}>
					<span>Sam Morgan</span>
					<span>UK/USA</span>
					<span>Front End</span>
					<span>Developer</span>
				</div>
			</FadeIn>
			<div className={'splashBackground'} />
		</div>
	);
});

export default Splash;
