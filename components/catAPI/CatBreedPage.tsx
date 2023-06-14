import Image from 'next/image';

const getSpecificBreeds = async (selectedbreed: any) => {
	console.log(
		'!!!',
		`https://api.thecatapi.com/v1/images/search?${selectedbreed}`, // update this
	);
	const response = await fetch(
		`https://api.thecatapi.com/v1/images/search?${selectedbreed}`,
	);

	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}

	const data = await response.json();

	return data;
};

const CatBreedPage = async ({ breed_ids }: { breed_ids: any }) => {
	const urlDecode = decodeURIComponent(breed_ids.replace(/\+/g, ' '));

	const test = await getSpecificBreeds(urlDecode);

	console.log('CATBREEDPAGE DATA', test);
	test.map((item: any) => console.log('ITEM', item));

	return (
		<>
			<div>
				{test.map((item: any) => (
					<Image src={item.url} width={100} height={100} alt={item.url} />
				))}
			</div>
		</>
	);
};

export default CatBreedPage;
