'use client';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ImageCarousel = ({ data }: any) => {
	const [favorites, setFavorites] = useState<any>([]);

	const descriptionMap = data.map((item: any) => item.breeds[0].description);
	const description = descriptionMap[0];

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
				<p>
					<span className='pr-3'>DESCRIPTION:</span>
					{description}
				</p>
			</div>
			<span className='pr-3 font-semibold'>
				FAVORITES: {favorites.length}{' '}
				{!favorites.length ? null : '(Click on image to remove)'}
			</span>
			<div className='flex flex-wrap h-28 border-2 border-white rounded-lg mb-4'>
				{favorites.map((image: any) => (
					<Image
						key={image.id}
						src={image.url}
						alt={image.url}
						width={96}
						height={72}
						className='border-2 border-white rounded-lg m-1'
						onClick={() => removeFavoriteHandler(image)}
					/>
				))}
			</div>
			<Carousel
				showArrows={true}
				showThumbs={false}
				infiniteLoop={true}
				showStatus={false}
				className='border-4 border-white rounded-lg'
			>
				{data.map((cat: any) => (
					<>
						<button
							key={cat.url}
							type='button'
							onClick={() => addToFavoritesHandler(cat)}
							className='border-2 border-white rounded-lg p-1 bg-white m-2'
						>
							Add to Favorites
						</button>
						<Link
							href={{
								pathname: `/the-cat/breed_ids=${cat.breeds[0].id}`,
								query: {
									...cat.breeds[0],
								},
							}}
						>
							<button>
								<Image
									key={cat.id}
									alt={cat.id}
									src={cat.url}
									width={450}
									height={200}
								/>
							</button>
						</Link>
					</>
				))}
			</Carousel>
		</div>
	);
};

export default ImageCarousel;
