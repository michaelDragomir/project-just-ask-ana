import { Suspense } from 'react';
import Link from 'next/link';

import ArticleDetailPage from '@/components/NewsAPI/ArticleDetailPage';

const Test = (context: any) => {
	console.log('------P------', context);
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
					<ArticleDetailPage context={context} />
				</Suspense>
			</div>
		</>
	);
};

export default Test;
