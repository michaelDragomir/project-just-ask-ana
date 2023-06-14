'use client';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
import Image from 'next/image';

const ImageCarousel = ({ data }: any) => {
	const [favorites, setFavorites] = useState<any>([]);

	const descriptionMap = data.map((item: any) => item.breeds[0].description);
	const description = descriptionMap[0];

	const originMap = data.map((item: any) => item.breeds[0].origin);
	const origin = originMap[0];

	const addToFavoritesHandler = (favedImage: any) => {
		const updatedFavs = [...favorites];

		if (updatedFavs.includes(favedImage)) {
			alert('Already liked.');
			return;
		}

		if (updatedFavs.length >= 12) {
			alert('12 favorites MAX.');
			return;
		}

		setFavorites([favedImage, ...favorites]);
	};

	const removeFavoriteHandler = (favedImage: any) => {
		const deletedImages = favorites.filter(
			(image: any) => image.id !== favedImage.id,
		);

		setFavorites([...deletedImages]);
	};

	return (
		<div className='w-1/3 mx-auto'>
			<div className='w-fill pb-5 text-xl'>
				<p className='pb-3'>
					<span className='pr-3'>ORIGIN:</span>
					{origin}
				</p>
				<p>
					<span className='pr-3'>DESCRIPTION:</span>
					{description}
				</p>
			</div>
			<span className='pr-3 font-semibold'>
				FAVORITES: {favorites.length} (Click on image to remove)
			</span>
			<div className='flex flex-wrap h-fit border-4 border-white rounded-lg mb-4'>
				{favorites.map((image: any) => (
					<button
						key={image.id}
						type='button'
						onClick={() => removeFavoriteHandler(image)}
					>
						<Image
							key={image.id}
							src={image.url}
							alt={image.id}
							width={96}
							height={72}
							className='border-2 border-white rounded-lg m-1'
						/>
					</button>
				))}
			</div>
			<Carousel
				showArrows={true}
				showThumbs={false}
				infiniteLoop={true}
				showStatus={false}
				className='border-4 border-white rounded-lg'
			>
				{data.map((image: any) => (
					<>
						<button
							key={image.url}
							type='button'
							onClick={() => addToFavoritesHandler(image)}
							className='border-2 border-white rounded-lg p-1 bg-white m-2'
						>
							Me Likey
						</button>
						<Image
							key={image.id}
							alt={image.id}
							src={image.url}
							width={450}
							height={200}
						/>
					</>
				))}
			</Carousel>
		</div>
	);
};

export default ImageCarousel;
