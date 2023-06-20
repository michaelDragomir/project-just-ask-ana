import { COUNTRY_CODES } from '@/data/dummyData';

import Image from 'next/image';
import CardItem from '@/components/CardItem';
import Cards from '@/components/Cards';
import Link from 'next/link';

const getLatestNews = async (country_code: any) => {
	const response = await fetch(
		`https://newsapi.org/v2/top-headlines?country=${country_code}`,
		{
			headers: {
				'x-api-key': '373a44e44cde4b79bca78c553bcead34',
			},
			cache: 'no-store',
			next: { revalidate: 7200 },
		},
	);

	const data = await response.json();

	return data;
};

const MainPage = async (country_code: any) => {
	const newsData = await getLatestNews(country_code);

	const { articles } = newsData;

	console.log('NEWS DATA------', articles);
	return (
		<div>
			<header className='mx-auto w-3/4 h-auto pt-4 text-2xl text-center text-slate-700'>
				<div className='leading-10 text-'>
					<h2>
						Click on a country to read the latest tech news from that country.
					</h2>
				</div>
			</header>
			<div className='mx-auto sm:px-6 sm:py-8 flex flex-wrap justify-center items-center'>
				<div className='grid gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-4'>
					{COUNTRY_CODES.map((item) => {
						return (
							<>
								<div key={item.country}>
									<div className='w-64 shadow-lg shadow-slate-500 border-gray-300 aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200'>
										<h2></h2>
										<Cards>
											<CardItem title={item.country} />
										</Cards>
										<Link href={`/`}>
											<Image
												className='h-64 w-full object-cover object-center hover:opacity-50 transition delay-100'
												src={item.flagSrc}
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

export default MainPage;
