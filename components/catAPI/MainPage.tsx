'use client';

import { useState, useEffect, Suspense } from 'react';
import ImageCarousel from './ImageCarousel';

const MainPage = () => {
	const [breeds, setBreeds] = useState<any>([]);
	const [breedImages, setBreedImages] = useState<any>([]);
	const [selectedBreed, setSelectedBreed] = useState<any>('');

	useEffect(() => {
		const getAllBreeds = async () => {
			const response = await fetch('/api/cat-api');

			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}

			const data = await response.json();
			setBreeds(data);

			return data;
		};

		getAllBreeds();
		getSpecificBreeds('abys', 3);
	}, []);

	const getSpecificBreeds = async (selectedBreed: any, limit: number) => {
		const response = await fetch(
			`/api/cat-api/breed_ids=${selectedBreed}/limit=${limit}`,
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
