import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const ImageCarousel = ({ data }: any) => {
	const descriptionMap = data.map((item: any) => item.breeds[0].description);
	const description = descriptionMap[0];

	const originMap = data.map((item: any) => item.breeds[0].origin);
	const origin = originMap[0];

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
			<Carousel
				showArrows={true}
				showThumbs={false}
				infiniteLoop={true}
				showStatus={false}
				className='border-4 border-white rounded-lg'
			>
				{data.map((image: any) => (
					<>
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
