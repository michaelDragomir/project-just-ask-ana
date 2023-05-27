import { DUMMYDATA } from '@/dummyData';

import Image from 'next/image';
import CardItem from '@/components/CardItem';
import Cards from '@/components/Cards';

const HomePage = () => {
	return (
		<>
			<div className='bg-grey'>
				<div className='mx-auto sm:px-6 sm:py-8 lg:max-w-5xl flex flex-wrap justify-center items-center'>
					<div className='grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3'>
						{DUMMYDATA.map((item) => {
							return (
								<>
									<div key={item.title}>
										<div className='w-64 shadow-lg shadow-slate-500 border-gray-300 aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200'>
											<Cards>
												<CardItem title={item.title}></CardItem>
											</Cards>
											<Image
												className='h-64 w-full object-cover object-center transition delay-100'
												src={item.image}
												alt='api images'
												width={0}
												height={0}
											/>
											<div className='relative opacity-0 group hover:opacity-100 transition delay-100 duration-300'>
												<div className='text-[44px] font-sans text-rose-800 text-2xl justify-center flex items-end h-64 w-64 bg-blue absolute bottom-0'>
													<div className='h-full w-full hover:animate-slideUp text-center'>
														{item.overlay}
													</div>
												</div>
											</div>
										</div>
									</div>
								</>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
