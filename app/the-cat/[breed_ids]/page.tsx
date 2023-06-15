import CatBreedPage from '@/components/catAPI/CatBreedPage';
import { Suspense } from 'react';
import Link from 'next/link';

const CatPage = (context: { context: any }) => {
	return (
		<>
			<div className='text-center'>
				<Link href='/the-cat/'>Back to Cat Page</Link>
				<Suspense fallback={<div>Loading Cat Info...</div>}>
					<CatBreedPage context={context} />
				</Suspense>
			</div>
		</>
	);
};

export default CatPage;
