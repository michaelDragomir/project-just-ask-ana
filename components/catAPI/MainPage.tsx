'use client';

import { useState, useEffect, Suspense } from 'react';
import ImageCarousel from './ImageCarousel';
import Desscripton from './Description';

const MainPage = () => {
	const [breeds, setBreeds] = useState<any>([]);
	const [breedImages, setBreedImages] = useState<any>([]);
	const [selectedBreed, setSelectedBreed] = useState<any>(0);

	useEffect(() => {
		const getAllBreeds = async () => {
			const response = await fetch('https://api.thecatapi.com/v1/breeds', {
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
			setBreeds(data);

			return data;
		};

		getAllBreeds();
	}, []);

	const getSpecificBreeds = async (selectedbreed: any, limit: number) => {
		const response = await fetch(
			`https://api.thecatapi.com/v1/images/search?breed_ids=${selectedbreed}&limit=${limit}`,
			{
				headers: {
					'x-api-key':
						'live_d7Zz8FWOCt9MQqOtmoBNTMS1R31Q2Yn6RAVcjf2z2guhPU2pQ14Z0jcfum5Evw7I',
				},
				cache: 'no-store',
			},
		);

		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}

		const data = await response.json();

		setBreedImages(data);

		return data;
	};

	const specificBreedImages = (e: any) => {
		const selectedBreed = e.target.value;
		getSpecificBreeds(selectedBreed, 3);

		setSelectedBreed(selectedBreed);
	};

	console.log('BREED DATA - ', breedImages);

	return (
		<>
			<div className='mx-auto w-3/4 max-h-full pb-4 text-xl text-center'>
				<label>Breeds:</label>
				<select value={selectedBreed} onChange={specificBreedImages}>
					{breeds.map((item: any) => (
						<option key={item.id} value={item.id}>
							{item.name}
						</option>
					))}
				</select>
			</div>
			<Suspense fallback={<p>Loading Breeds...</p>}>
				<ImageCarousel data={breedImages} />
			</Suspense>
		</>
	);
};

export default MainPage;
