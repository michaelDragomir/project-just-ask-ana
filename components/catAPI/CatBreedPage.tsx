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

	return (
		<>
			<div>
				{catData.map((catItem: any) => {
					return (
						<>
							<div className='mx-auto' key={catItem.name}>
								<Image
									src={catItem.url}
									width={300}
									height={200}
									alt={catItem.url}
									className='mx-auto border-4 border-slate-200 rounded-lg'
								/>
								{SearchParamsArr.map((item: any) => (
									<>
										<div className='mx-auto border-2 border-sky-500 rounded-lg w-fit p-2 mt-8 bg-sky-100'>
											<ul>
												<li className='pb-2' key={item.name}>
													<span className='underline underline-offset-2 pr-3'>
														Name:
													</span>
													{item.name}
												</li>
												<li className='pb-2' key={item.origin}>
													<span className='underline underline-offset-2 pr-3'>
														Origin:
													</span>
													{item.origin}
												</li>
												<li className='pb-2' key={item.id}>
													<span className='underline underline-offset-2 pr-3'>
														Temperament:
													</span>
													{item.temperament}
												</li>
											</ul>
										</div>
										<div className='flex mx-auto items-center flex-col border-2 border-sky-500 rounded-lg w-fit p-4 mt-8 bg-sky-100'>
											<ul>
												<li key={item.id} className='flex pb-4'>
													Adaptability:
													<span className='flex items-center space-x-2.5 text-sky-600 ml-2'>
														{Array(
															parseInt(SearchParamsArr[0].adaptability),
														).fill(<FaCat />)}
													</span>
												</li>
												<li key={item.id} className='flex pb-4'>
													Affection Level:
													<span className='flex items-center space-x-2.5 text-sky-600 ml-2'>
														{Array(
															parseInt(SearchParamsArr[0].affection_level),
														).fill(<FaCat />)}
													</span>
												</li>
												<li key={item.id} className='flex pb-4'>
													Child Friendly:
													<span className='flex items-center space-x-2.5 text-sky-600 ml-2'>
														{Array(
															parseInt(SearchParamsArr[0].child_friendly),
														).fill(<FaCat />)}
													</span>
												</li>
												<li key={item.id} className='flex pb-4'>
													Dog Friendly:
													<span className='flex items-center space-x-2.5 text-sky-600 ml-2'>
														{Array(
															parseInt(SearchParamsArr[0].dog_friendly),
														).fill(<FaCat />)}
													</span>
												</li>
												<li key={item.id} className='flex pb-4'>
													Energy Level:
													<span className='flex items-center space-x-2.5 text-sky-600 ml-2'>
														{Array(
															parseInt(SearchParamsArr[0].energy_level),
														).fill(<FaCat />)}
													</span>
												</li>
												<li key={item.id} className='flex pb-4'>
													Intelligence:
													<span className='flex items-center space-x-2.5 text-sky-600 ml-2'>
														{Array(
															parseInt(SearchParamsArr[0].intelligence),
														).fill(<FaCat />)}
													</span>
												</li>
												<li key={item.id} className='flex pb-4'>
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
											</ul>
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
