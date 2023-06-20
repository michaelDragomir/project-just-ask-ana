import { FRONT_PAGE_DATA } from '@/data/dummyData';

import Image from 'next/image';
import CardItem from '@/components/CardItem';
import Cards from '@/components/Cards';
import Link from 'next/link';

const HomePage = () => {
	return (
		<div className='bg-slate-400 h-screen'>
			<header className='mx-auto w-3/4 h-auto pt-4 text-2xl text-center text-slate-700'>
				<div className='leading-10 text-'>
					<h2>
						A comprehensive Next.js project that explores practical data
						patterns across the full stack. <br /> Each API card is its own
						experience showcasing patterns in real world applications.
					</h2>
					<p>Next.js - TypeScript - Mongo - GraphQL - TailwindCSS</p>
				</div>
			</header>
			<div className='mx-auto sm:px-6 sm:py-8 lg:max-w-5xl flex flex-wrap justify-center items-center'>
				<div className='grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3'>
					{FRONT_PAGE_DATA.map((item: any) => {
						return (
							<>
								<div key={item.title}>
									<div className='w-64 shadow-lg shadow-slate-500 border-gray-300 aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200'>
										<Cards>
											<CardItem title={item.title} />
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
	);
};

export default HomePage;
