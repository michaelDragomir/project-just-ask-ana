import { DUMMYDATA } from '@/dummyData';

import Image from 'next/image';
import CardItem from '@/components/CardItem';
import Cards from '@/components/Cards';
import Link from 'next/link';

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
											<Link href={item.url}>
												<Image
													className='h-64 w-full object-cover object-center hover:opacity-50 transition delay-100'
													src={item.image}
													alt='api images'
													width={0}
													height={0}
												/>
											</Link>
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
