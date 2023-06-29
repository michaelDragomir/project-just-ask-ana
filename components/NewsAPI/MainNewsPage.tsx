'use client';

import { useState, useEffect, useRef } from 'react';
import SearchResultsTabs from '@/components/NewsAPI/SearchResultsTabs';
import { SlMagnifier } from 'react-icons/sl';

const MainNewsPage = () => {
	const [popularArticles, setPopularArticles] = useState<any>([]);
	const [relevantArticles, setRelevantArticles] = useState<any>([]);
	const [latestArticles, setLatestArticles] = useState<any>([]);

	const popRef = useRef(false);
	const relRef = useRef(false);
	const latestRef = useRef(false);

	console.log('popRef', popRef.current);
	console.log('relRef', relRef.current);
	console.log('latestRef', latestRef.current);

	const [inputFieldValue, setInputFieldValue] = useState<string>('');
	const [activeTab, setActiveTab] = useState<string>('popularity');

	const enodedURLValue = encodeURIComponent(
		inputFieldValue.replace(/\s+/g, '+'),
	);

	const getNewsArticles = async (queries: any) => {
		console.log(
			'URL WITH PARAMS---',
			`https://newsapi.org/v2/everything?q=${queries}&domains=cnn.com,msnbc.com&sortBy=${activeTab}`,
		);

		const response = await fetch(
			`https://newsapi.org/v2/everything?q=${queries}&domains=cnn.com,msnbc.com&sortBy=${activeTab}`,
			{
				headers: {
					'x-api-key': '373a44e44cde4b79bca78c553bcead34',
				},
				next: { revalidate: 7200 },
			},
		);
		const { articles } = await response.json();

		switch (activeTab) {
			case 'popularity':
				if (!popRef.current) {
					setPopularArticles(articles);
					relRef.current = true;
				}
				break;
			case 'relevancy':
				if (!relRef.current) {
					setRelevantArticles(articles);
					relRef.current = true;
				}
				break;
			case 'publishedAt':
				if (!latestRef.current) {
					setLatestArticles(articles);
					latestRef.current = true;
				}
				break;
			default:
				return null;
		}
	};

	useEffect(() => {
		getNewsArticles(enodedURLValue);
	}, [activeTab, inputFieldValue]);

	const onChangeValueHandler = (e: any) => {
		const { value } = e.target;
		setInputFieldValue(value);
	};

	const handleTabClick = (selectedTab: any) => {
		popRef.current = false;
		relRef.current = false;
		latestRef.current = false;

		setActiveTab(selectedTab);
	};

	const displayArticles = () => {
		switch (activeTab) {
			case 'popularity':
				return popularArticles.map((item: any, idx: any) => (
					<li key={idx}>{item.title}</li>
				));
			case 'relevancy':
				return relevantArticles.map((item: any, idx: any) => (
					<li key={idx}>{item.title}</li>
				));
			case 'publishedAt':
				return latestArticles.map((item: any, idx: any) => (
					<li key={idx}>{item.title}</li>
				));
			default:
				return null;
		}
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
				<ul>{displayArticles()}</ul>
			</div>
		</>
	);
};

export default MainNewsPage;
