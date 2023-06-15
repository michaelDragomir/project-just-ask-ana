import Image from 'next/image';
import { FaCat } from 'react-icons/fa';

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
	const test = SearchParamsArr[0].adaptability;

	console.log('!!!!SearchParamsArr', test);
	console.log('!!!!SearchParamsArr', Array(test).fill(<FaCat />));
	console.log('TYPE=', typeof parseInt(SearchParamsArr[0].adaptability));

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
										<div className='flex items-center flex-col'>
											<li key={item.id} className='flex'>
												Adaptability:
												<span className='flex items-center space-x-2.5 text-sky-600 ml-2'>
													{Array(
														parseInt(SearchParamsArr[0].adaptability),
													).fill(<FaCat />)}
												</span>
											</li>
											<li key={item.id} className='flex'>
												Affection Level:
												<span className='flex items-center space-x-2.5 text-sky-600 ml-2'>
													{Array(
														parseInt(SearchParamsArr[0].affection_level),
													).fill(<FaCat />)}
												</span>
											</li>
											<li key={item.id} className='flex'>
												Child Friendly:
												<span className='flex items-center space-x-2.5 text-sky-600 ml-2'>
													{Array(
														parseInt(SearchParamsArr[0].child_friendly),
													).fill(<FaCat />)}
												</span>
											</li>
											<li key={item.id} className='flex'>
												Dog Friendly:
												<span className='flex items-center space-x-2.5 text-sky-600 ml-2'>
													{Array(
														parseInt(SearchParamsArr[0].dog_friendly),
													).fill(<FaCat />)}
												</span>
											</li>
											<li key={item.id} className='flex'>
												Energy Level:
												<span className='flex items-center space-x-2.5 text-sky-600 ml-2'>
													{Array(
														parseInt(SearchParamsArr[0].energy_level),
													).fill(<FaCat />)}
												</span>
											</li>
											<li key={item.id} className='flex'>
												Intelligence:
												<span className='flex items-center space-x-2.5 text-sky-600 ml-2'>
													{Array(
														parseInt(SearchParamsArr[0].intelligence),
													).fill(<FaCat />)}
												</span>
											</li>
											<li key={item.id} className='flex'>
												Health Issues:
												<span className='flex items-center space-x-2.5 text-sky-600 ml-2'>
													{Array(
														parseInt(SearchParamsArr[0].health_issues),
													).fill(<FaCat />)}
												</span>
											</li>
											<li key={item.id} className='flex'>
												Loves a Lap:
												<span className='flex items-center space-x-2.5 text-sky-600 ml-2'>
													{Array(parseInt(SearchParamsArr[0].lap)).fill(
														<FaCat />,
													)}
												</span>
											</li>
										</div>
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
