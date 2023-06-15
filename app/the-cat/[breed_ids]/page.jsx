import CatBreedPage from '@/components/catAPI/CatBreedPage';
import { Suspense } from 'react';
import Link from 'next/link';

const CatPage = (context) => {
	return (
		<>
			<div className='text-center'>
				<div className='mb-4'>
					<Link
						className='mx-auto border border-sky-500 rounded-lg bg-sky-100 w-40 mb-2 p-2'
						href='/the-cat/'
					>
						Back to Cat Page
					</Link>
				</div>
				<Suspense fallback={<div>Loading Cat Info...</div>}>
					<CatBreedPage context={context} />
				</Suspense>
			</div>
		</>
	);
};

export default CatPage;
