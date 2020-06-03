export const topSectionStyle = {
	display: 'block',
	height: '100vh',
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column'
};

export const middleSectionStyle = {
	display: 'block',
	height: '100vh',
	width: '100%',
	backgroundColor: '#eee',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column'
};

const backgroundURL =
	'https://images.unsplash.com/photo-1590664095641-7fa05f689813?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80';

export const homeStyle = {
	height: '200vh',
	width: '100%'
};

export const backgroundStyle = {
	position: 'absolute',
	top: '0',
	left: '0',
	height: '100vh',
	width: '100%',
	zIndex: '-10',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	backgroundImage: `linear-gradient(to top,  #fff, rgba(45, 13, 82, 0.5),  #000 90%), url(${backgroundURL})`,
	backgroundColor: 'rgba(45, 13, 82, 0.7)',
	backgroundBlendMode: 'screen',
	filter: 'brightness(0.8) saturate(1.2)'
};

export const titleStyle = {
	color: 'white',
	fontSize: '2.2rem'
};