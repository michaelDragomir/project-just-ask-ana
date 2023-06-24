'use client';

import { useState, useEffect } from 'react';
import SearchResultsTabs from '@/components/NewsAPI/SearchResultsTabs';
import { SlMagnifier } from 'react-icons/sl';

const MainNewsPage = () => {
	const [popularNewsArticles, setPopularNewsArticles] = useState<any>([]);
	const [inputFieldValue, setInputFieldValue] = useState<string>('');

	const enodedURLValue = encodeURIComponent(
		inputFieldValue.replace(/\s+/g, '+'),
	);

	const getNewsByPopularity = async (queries: any) => {
		console.log(
			'URL WITH PARAMS---',
			`https://newsapi.org/v2/everything?q=${queries}&domains=cnn.com,msnbc.com&sortBy=popularity`,
		);
		const response = await fetch(
			`https://newsapi.org/v2/everything?q=${queries}&domains=cnn.com,msnbc.com&sortBy=popularity`,
			{
				headers: {
					'x-api-key': '373a44e44cde4b79bca78c553bcead34',
				},
				next: { revalidate: 7200 },
			},
		);
		const { articles } = await response.json();

		setPopularNewsArticles(articles);

		return articles;
	};

	const search = (e: any) => {
		e.preventDefault();

		if (!inputFieldValue.length) return;

		console.log('inside search', inputFieldValue);

		getNewsByPopularity(enodedURLValue);
		setInputFieldValue('');
	};

	console.log('articles-POPULAR', popularNewsArticles);
	console.log('inputFieldValue', inputFieldValue);

	return (
		<>
			<div>
				<input
					required
					className=' mx-auto placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
					placeholder='Search...'
					type='text'
					value={inputFieldValue}
					onChange={(e) => setInputFieldValue(e.target.value)}
				/>
				<button className='relative' type='submit' onClick={search}>
					<SlMagnifier className='w-4 h-4 absolute bottom-7 left-[70px] text-slate-400' />
				</button>
				<SearchResultsTabs />
			</div>
		</>
	);
};

export default MainNewsPage;
