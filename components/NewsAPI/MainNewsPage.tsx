'use client';

import { useState, useEffect, useRef } from 'react';
import SearchResultsTabs from '@/components/NewsAPI/SearchResultsTabs';
import Link from 'next/link';

const MainNewsPage = () => {
	const [popularArticles, setPopularArticles] = useState<any>([]);
	const [relevantArticles, setRelevantArticles] = useState<any>([]);
	const [latestArticles, setLatestArticles] = useState<any>([]);
	const [inputFieldValue, setInputFieldValue] = useState<string>('');
	const [activeTab, setActiveTab] = useState<string>('popularity');

	const popRef = useRef(false);
	const relRef = useRef(false);
	const latestRef = useRef(false);

	const enodedURLValue = encodeURIComponent(
		inputFieldValue.replace(/\s+/g, '+'),
	);

	const fetchNews = async (queries: any) => {
		const response = await fetch(`/api/news/${queries}+us/sortBy=${activeTab}`);
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
		fetchNews(enodedURLValue);
	}, [activeTab]);

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

	const handleSubmitFormClick = async (e: any) => {
		e.preventDefault();
		fetchNews(enodedURLValue);
	};

	const displayArticles = () => {
		switch (activeTab) {
			case 'popularity':
				return popularArticles.map((item: any, idx: any) => {
					return (
						<li className='pb-2' key={idx}>
							<Link
								href={{
									pathname: `/the-news/popular-article=${encodeURIComponent(
										item.title.replace(/\+/g, ' '),
									)}`,
									query: { ...item },
								}}
							>
								{item.title}
							</Link>
						</li>
					);
				});
			case 'relevancy':
				return relevantArticles.map((item: any, idx: any) => (
					<li className='pb-2' key={idx}>
						<Link
							href={{
								pathname: `/the-news/relevant-article=${item.title}`,
								query: { ...item },
							}}
						>
							{item.title}
						</Link>
					</li>
				));
			case 'publishedAt':
				return latestArticles.map((item: any, idx: any) => (
					<li className='pb-2' key={idx}>
						<Link
							href={{
								pathname: `/the-news/latest-article=${item.title}`,
								query: { ...item },
							}}
						>
							{item.title}
						</Link>
					</li>
				));
			default:
				return null;
		}
	};

	if (!popularArticles || !relevantArticles || !latestArticles) {
		return null;
	}

	return (
		<>
			<form
				onSubmit={handleSubmitFormClick}
				noValidate
				className='py-6 text-center flex justify-center items-center'
			>
				<input
					required
					className='placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
					placeholder='Search...'
					type='text'
					value={inputFieldValue}
					onChange={(e) => onChangeValueHandler(e)}
				/>
				<button
					type='submit'
					className='rounded-lg border border-gray-700 bg-gray-700 px-3 py-2 ml-4 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-gray-900 hover:bg-gray-900 focus:ring focus:ring-gray-200 disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300'
				>
					Search
				</button>
			</form>
			<SearchResultsTabs handleTabClick={handleTabClick} />
			<p className='mb-2 font-semibold'>Scroll to reveal more articles</p>
			<div className='mx-auto inline-block text-left overflow-y-auto h-[32rem] border-4 border-slate-400 rounded-md p-3 min-w-[60%]'>
				<ul className='list-disc pl-3'>{displayArticles()}</ul>
			</div>
		</>
	);
};

export default MainNewsPage;
