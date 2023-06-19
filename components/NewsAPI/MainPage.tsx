'use client';

import { useEffect, useState } from 'react';

const MainPage = () => {
	const [latestNews, setLatestNews] = useState<any>([]);

	const { articles } = latestNews;

	useEffect(() => {
		const getLatestNews = async () => {
			const response = await fetch(
				'https://newsapi.org/v2/top-headlines?country=us',
				{
					headers: {
						'x-api-key': '373a44e44cde4b79bca78c553bcead34',
					},
					cache: 'no-store',
					next: { revalidate: 7200 },
				},
			);

			const data = await response.json();

			setLatestNews(data);
			return data;
		};
		getLatestNews();
	}, []);

	console.log('latest', latestNews);
	console.log('articles', articles);

	return (
		<div>
			{articles.map((item: any) => (
				<li>{item.title}</li>
			))}
		</div>
	);
};

export default MainPage;
