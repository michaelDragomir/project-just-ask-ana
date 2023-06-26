'use client';

import { useState } from 'react';

const TabSlider = ({ tabItems }: { tabItems: any }) => {
	const [activeTab, setActiveTab] = useState<any>(tabItems[0].name);

	console.log('ACTIVE TAB', activeTab);

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
							key={idx}
							// aria-selected={activeTab == idx ? true : false}
							// aria-controls={`tabpanel-${idx + 1}`}
							className={`flex items-center gap-x-2 py-2 border-b px-2 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium ${
								activeTab === tabItems[idx].name
									? 'border-sky-600 text-sky-600'
									: 'border-white text-gray-500'
							}`}
							onClick={() => setActiveTab(tabItems[idx].name)}
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
