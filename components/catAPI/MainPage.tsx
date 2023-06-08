'use client';

import Image from 'next/image';

const MainPage = ({ data }: any) => {
	console.log('DATA CLIENT index', data[0]);
	console.log('DATA CLIENT SIDE', data);
	return (
		<div>
			<ul>
				{data.map((item: any) => {
					const { id, url, width, height } = item;
					return (
						<>
							<h1>{id}</h1>
							<Image src={url} width={500} height={333} alt='cat' />
							<h1>{width}</h1>
							<h1>{height}</h1>
						</>
					);
				})}
			</ul>
		</div>
	);
};

export default MainPage;
