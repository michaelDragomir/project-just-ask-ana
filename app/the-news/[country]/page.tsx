import { Suspense } from 'react';
import Link from 'next/link';

import NewsPage from '@/components/NewsAPI/NewsPage';

const NewsContentPage = ({
	params: { country },
}: {
	params: { country: string };
}) => {
	console.log('country!!!!!INSIDE DYNAMIC', country);

	const urlDecode = decodeURIComponent(country.replace(/\+/g, ' '));

	console.log('urlDecode!!!!!INSIDE DYNAMIC', urlDecode);

	return (
		<>
			<div className='text-center'>
				<div className='mb-4'>
					<Link
						className='mx-auto border border-sky-500 rounded-lg bg-sky-100 w-40 mb-2 p-2'
						href='/the-news/'
					>
						Back to News Page
					</Link>
				</div>
				<Suspense fallback={<div>Loading News Info...</div>}>
					<NewsPage country={urlDecode} />
				</Suspense>
			</div>
		</>
	);
};

export default NewsContentPage;
