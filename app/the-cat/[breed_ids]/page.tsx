import CatBreedPage from '@/components/catAPI/CatBreedPage';
import { Suspense } from 'react';

const CatPage = (context: { context: any }) => {
	console.log('context', context);
	return (
		<>
			<div className='text-center'>
				<Suspense fallback={<div>Loading Cat Info...</div>}>
					<CatBreedPage context={context} />
				</Suspense>
			</div>
		</>
	);
};

export default CatPage;
