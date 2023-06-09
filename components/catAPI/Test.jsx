import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Test = () => {
	return (
		<Carousel
			showArrows={true}
			showThumbs={false}
			infiniteLoop={true}
			showStatus={false}
			// dynamicHeight={true}
			// onChange={onChange}
			// onClickItem={onClickItem}
			// onClickThumb={onClickThumb}
		>
			<div>
				<img src='https://cdn2.thecatapi.com/images/265.jpg' />
				{/* <p className='legend'>Legend 1</p> */}
			</div>
			<div>
				<img src='https://cdn2.thecatapi.com/images/4o9.jpg' />
				{/* <p className='legend'>Legend 2</p> */}
			</div>
			<div>
				<img src='https://cdn2.thecatapi.com/images/9qm.png' />
				{/* <p className='legend'>Legend 3</p> */}
			</div>
		</Carousel>
	);
};

export default Test;
