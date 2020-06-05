import React from 'react';

const Card = (props) => {
	const { title, text } = props;

	return (
		<div className={'card'}>
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
		</div>
	);
};

export default Card;
