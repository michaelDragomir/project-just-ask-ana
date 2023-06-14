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

	console.log('!!!!SearchParamsArr', SearchParamsArr);

	return (
		<>
			<div>
				{catData.map((catItem: any) => {
					return (
						<>
							<div className='mx-auto w-3/4 text-center' key={catItem.name}>
								<Image
									src={catItem.url}
									width={100}
									height={100}
									alt={catItem.url}
									className='mx-auto'
								/>
								{SearchParamsArr.map((item: any) => (
									<>
										<h1 key={item.name}>Name: {item.name}</h1>
										<h1 key={item.origin}>Origin: {item.origin}</h1>
										<h1 key={item.id}>Temperament: {item.temperament}</h1>
									</>
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
