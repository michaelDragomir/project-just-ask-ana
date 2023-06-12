'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Test from './Test';

const MainPage = () => {
	const [breeds, setBreeds] = useState<any>([]);
	const [breedImages, setBreedImages] = useState<any>([]);
	const [selectedbreed, setselectedbreed] = useState<any>(0);

	console.log('--breeds---', breeds);

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

	return (
		<>
			<div className='mx-auto w-3/4 max-h-full pb-4 text-xl text-center '>
				<label>Breeds:</label>
				<select value='cat' key='cat'>
					{breeds.map((item: any) => (
						<option key={item.name} value={item}>
							{item.name}
						</option>
					))}
				</select>
			</div>
			<Test />
		</>
	);
};

export default MainPage;
