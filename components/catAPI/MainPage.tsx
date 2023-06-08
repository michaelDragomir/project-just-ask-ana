'use client';

import Image from 'next/image';

const MainPage = ({ data }: any) => {
	console.log('DATA CLIENT index', data[0]);
	console.log('DATA CLIENT SIDE', data);
	return (
		<>
			<div className='mx-auto w-3/4 max-h-full pt-4 text-xl text-center border-orange-400 border-2'>
				<div className='border-fuchsia-700 border-2 w-3/4'>
					<ul>
						{data.map((item: any) => {
							const { id, url, width, height } = item;
							return (
								<div className='flex border-black border-2'>
									<Image src={url} width={50} height={33} alt='cat' />
									{id}
									<h1>{width}</h1>
									<h1>{height}</h1>
								</div>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
};

export default MainPage;
