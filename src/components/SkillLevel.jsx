import React from 'react';

const SkillLevel = (props) => {
	const { skill, level } = props;

	return (
		<li style={{ marginBottom: '0.7rem' }}>
			{`${skill}:`}
			<div
				style={{
					display: 'inline-block',
					position: 'absolute',
					right: '0'
				}}
			>
				<div
					style={{
						display: 'inline-block',
						color: '#000'
					}}
				>
					{[ ...Array(level).keys() ].map((p) => '|')}
				</div>
				<div
					style={{
						display: 'inline-block',
						color: '#ccc'
					}}
				>
					{' '}
					{[ ...Array(10 - level).keys() ].map((p) => '|')}
				</div>
			</div>
		</li>
	);
};

export default SkillLevel;
