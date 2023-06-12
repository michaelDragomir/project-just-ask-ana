import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Test = () => {
	return (
		<div className='w-2/4 mx-auto'>
			<Carousel
				showArrows={true}
				showThumbs={false}
				infiniteLoop={true}
				showStatus={false}
				className='border-4 border-white rounded-lg'
			>
				<div>
					<img src='https://cdn2.thecatapi.com/images/265.jpg' />
				</div>
				<div>
					<img src='https://cdn2.thecatapi.com/images/4o9.jpg' />
				</div>
				<div>
					<img src='https://cdn2.thecatapi.com/images/9qm.png' />
				</div>
			</Carousel>
		</div>
	);
};

export default Test;
