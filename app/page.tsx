import { DUMMYDATA } from '@/dummyData';

import Image from 'next/image';
import CardItem from '@/components/CardItem';
import Cards from '@/components/Cards';

import styles from '@/styles/page.module.scss';

// 'grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8'

const HomePage = () => {
	return (
		<>
			<div className='bg-white'>
				<div className='mx-auto sm:px-6 sm:py-8 lg:max-w-5xl flex flex-wrap justify-center items-center'>
					<div className='grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3'>
						{DUMMYDATA.map((item) => {
							return (
								<div key={item.title}>
									<div className='w-64 hover:opacity-75 transition delay-100 drop-shadow-md border-2 border-gray-300 aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 transition delay-100'>
										<Cards>
											<CardItem title={item.title}></CardItem>
										</Cards>
										<Image
											src={item.image}
											alt='api images'
											width={300}
											height={300}
										/>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
