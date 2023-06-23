'use client';

import { useState } from 'react';

const TabSlider = ({ tabItems }: { tabItems: any }) => {
	const [activeTab, setActiveTab] = useState<any>(0);

	// const test = (item: any) => {
	// 	setActiveTab(item);
	// 	console.log('handleclick', activeTab);
	// };

	return (
		<>
			<div className='px-4 md:px-8 w-full flex justify-center'>
				<ul
					role='tablist'
					className='max-w-screen-xl mx-auto flex items-center gap-x-6 overflow-x-auto text-sm'
				>
					{tabItems.map((item: any, idx: any) => (
						<button
							role='tab'
							aria-selected={activeTab == idx ? true : false}
							aria-controls={`tabpanel-${idx + 1}`}
							className={`flex items-center gap-x-2 py-2 border-b px-2 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium ${
								activeTab == idx
									? 'border-indigo-600 text-indigo-600'
									: 'border-white text-gray-500'
							}`}
							onClick={() => setActiveTab(idx)}
						>
							{item.icon}
							{item.name}
						</button>
					))}
				</ul>
			</div>
		</>
	);
};

export default TabSlider;
