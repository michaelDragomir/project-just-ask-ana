import CatBreedPage from '@/components/catAPI/CatBreedPage';

const CatPage = ({ params: { breed_ids } }: { params: any }) => {
	return (
		<>
			<div className='text-center'>
				<CatBreedPage breed_ids={breed_ids} />
			</div>
		</>
	);
};

export default CatPage;
