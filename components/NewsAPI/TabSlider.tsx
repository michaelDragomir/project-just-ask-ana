'use client';

import { useState } from 'react';

const TabSlider = ({ tabItems, onClick }: { tabItems: any; onClick: any }) => {
	const [activeTab, setActiveTab] = useState<any>(tabItems[0].name);

	const handleTabClick = (tabItem: any) => {
		setActiveTab(tabItem);
		onClick(tabItem);
	};

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
							className={`flex items-center gap-x-2 py-2 border-b px-2 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium ${
								activeTab === tabItems[idx].name
									? 'border-sky-600 text-sky-600'
									: 'border-white text-gray-500'
							}`}
							onClick={() => handleTabClick(item.name)}
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
