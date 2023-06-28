'use client';

import { useState, useEffect, useRef } from 'react';
import SearchResultsTabs from '@/components/NewsAPI/SearchResultsTabs';
import { SlMagnifier } from 'react-icons/sl';

const MainNewsPage = () => {
	const [newsArticles, setNewsArticles] = useState<any>([]);
	const [inputFieldValue, setInputFieldValue] = useState<string>('');
	const [tabItem, setTabItem] = useState<string>('popularity');

	const popularityRef = useRef(false);

	const enodedURLValue = encodeURIComponent(
		inputFieldValue.replace(/\s+/g, '+'),
	);

	useEffect(() => {
		const getNewsByPopularity = async (queries: any) => {
			console.log(
				'URL WITH PARAMS---',
				`https://newsapi.org/v2/everything?q=${queries}&domains=cnn.com,msnbc.com&sortBy=${tabItem}`,
			);
			const response = await fetch(
				`https://newsapi.org/v2/everything?q=${queries}&domains=cnn.com,msnbc.com&sortBy=${tabItem}`,
				{
					headers: {
						'x-api-key': '373a44e44cde4b79bca78c553bcead34',
					},
					next: { revalidate: 7200 },
				},
			);
			const { articles } = await response.json();

			setNewsArticles(articles);

			return articles;
		};

		if (!popularityRef.current) {
			getNewsByPopularity(enodedURLValue);
			popularityRef.current = true;
		}
	}, [tabItem, inputFieldValue]);

	const onChangeValueHandler = (e: any) => {
		popularityRef.current = false;
		const { value } = e.target;

		const inputvalue = value;
		setInputFieldValue(inputvalue);
	};

	const handleTabClick = (selectedTab: any) => {
		setTabItem(selectedTab);
	};

	return (
		<>
			<div>
				<input
					required
					className=' mx-auto placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
					placeholder='Search...'
					type='text'
					value={inputFieldValue}
					onChange={(e) => onChangeValueHandler(e)}
				/>
				<button className='relative' type='submit'>
					<SlMagnifier className='w-4 h-4 absolute bottom-7 left-[70px] text-slate-400' />
				</button>
				<SearchResultsTabs handleTabClick={handleTabClick} />
			</div>
			<div className='pt-9 mx-auto inline-block text-left'>
				<ul>
					{newsArticles.map((item: any, idx: any) => (
						<li key={idx}>{item.title}</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default MainNewsPage;
