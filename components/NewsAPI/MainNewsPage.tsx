'use client';

import { useState, useEffect } from 'react';
import SearchResultsTabs from '@/components/NewsAPI/SearchResultsTabs';

const MainNewsPage = () => {
	return (
		<>
			<div>
				<header className='mx-auto w-3/4 h-auto pt-4 text-2xl text-center text-slate-700 mb-7'>
					<label className='relative block'>
						<input
							className=' mx-auto placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
							placeholder='Search for anything...'
							type='text'
						/>
					</label>
				</header>
				<SearchResultsTabs />
			</div>
		</>
	);
};

export default MainNewsPage;
