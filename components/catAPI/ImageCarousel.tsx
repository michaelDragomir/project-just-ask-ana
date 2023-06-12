import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const ImageCarousel = ({ images }: any) => {
	return (
		<div className='w-1/3 mx-auto'>
			<Carousel
				showArrows={true}
				showThumbs={false}
				infiniteLoop={true}
				showStatus={false}
				className='border-4 border-white rounded-lg'
			>
				{images.map((image: any) => (
					<Image
						key={image.id}
						alt={image.id}
						src={image.url}
						width={450}
						height={200}
					/>
				))}
			</Carousel>
		</div>
	);
};

export default ImageCarousel;
