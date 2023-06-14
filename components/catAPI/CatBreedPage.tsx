import Image from 'next/image';

const getSpecificBreeds = async (selectedbreed: any) => {
	const response = await fetch(
		`https://api.thecatapi.com/v1/images/search?${selectedbreed}`,
	);

	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}

	const data = await response.json();

	return data;
};

const CatBreedPage = async ({ context }: any) => {
	const urlDecode = decodeURIComponent(
		context.params.breed_ids.replace(/\+/g, ' '),
	);

	const catData = await getSpecificBreeds(urlDecode);

	const { searchParams } = context;
	const SearchParamsArr = [searchParams];

	// const test = Object.values(searchParams);
	console.log('!!!!SearchParamsArr', SearchParamsArr);
	console.log('!!!!catData', catData);
	// console.log('!!!!TEST', test);

	return (
		<>
			<div>
				{catData.map((catItem: any, idx: any) => {
					return (
						<>
							<Image
								src={catItem.url}
								width={100}
								height={100}
								alt={catItem.url}
							/>
							<div key={idx}>
								{SearchParamsArr.map((item: any) => (
									<div key={idx}>{item.name}</div>
								))}
							</div>
						</>
					);
				})}
			</div>
		</>
	);
};

export default CatBreedPage;
