import Cards from '@/components/Cards';
import CardItem from '@/components/CardItem';
import styles from '@/styles/page.module.scss';
import { DUMMYDATA } from '@/dummyData';

const HomePage = () => {
	return (
		<>
			<div className='bg-white'>
				<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
					<div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8'>
						{DUMMYDATA.map((item) => {
							return (
								<div key={item.title} className='group'>
									<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7'>
										<h2 className='text-2xl font-bold tracking-tight text-gray-900'>
											{item.title}
										</h2>
										<img
											src='https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg'
											alt='Tall slender porcelain bottle with natural clay textured body and cork stopper.'
											className='h-full w-full object-cover object-center group-hover:opacity-75'
										/>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
