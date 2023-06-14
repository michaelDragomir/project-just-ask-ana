import CatBreedPage from '@/components/catAPI/CatBreedPage';

const CatPage = (context: { context: any }) => {
	console.log('context', context);
	return (
		<>
			<div className='text-center'>
				<CatBreedPage context={context} />
			</div>
		</>
	);
};

export default CatPage;
