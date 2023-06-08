import MainPage from '@/components/catAPI/MainPage';

const fetchCatsData = async () => {
	const response = await fetch('https://api.thecatapi.com/v1/images/search', {
		headers: {
			'x-api-key':
				'live_d7Zz8FWOCt9MQqOtmoBNTMS1R31Q2Yn6RAVcjf2z2guhPU2pQ14Z0jcfum5Evw7I',
		},
		cache: 'no-store',
	});

	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}

	const data = await response.json();

	return data;
};

const RandomUserHomePage = async () => {
	const catData = await fetchCatsData();

	console.log('!!!', catData);
	return (
		<>
			<div className='text-center'>
				<MainPage />
			</div>
		</>
	);
};

export default RandomUserHomePage;
