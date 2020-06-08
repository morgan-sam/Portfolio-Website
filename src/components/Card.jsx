import React from 'react';
import FadeIn from './FadeIn';

const Card = (props) => {
	const { title, text } = props;

	return (
		<FadeIn className={'card'} delay={0}>
			<div className={'cardTitle'}>{title}</div>
			<div className={'cardText'}>
				{Array.isArray(text) ? (
					text.map((el, i) => (
						<p key={i} style={{ marginBottom: '10px' }}>
							{el}
						</p>
					))
				) : (
					text
				)}
				<div className={'cardFadeOverlay'} />
			</div>
		</FadeIn>
	);
};

export default Card;
