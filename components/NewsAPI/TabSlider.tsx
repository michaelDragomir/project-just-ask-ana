'use client';

import { useState } from 'react';

const TabSlider = ({ tabItems }: { tabItems: any; handleTabClick: any }) => {
	const [activeTab, setActiveTab] = useState<any>(tabItems[0]);

	const test = (item: any) => {
		setActiveTab(item);
		console.log('handleclick', activeTab);
	};

	return (
		<>
			<div className='w-full relative flex flex-row justify-center'>
				{tabItems.map((item: any, index: any) => {
					console.log('inside', item);
					return (
						<div className='pr-6' key={`tab-slider-tab-${index}`}>
							<button
								type='button'
								className={`relative hover:border-b-2 border-sky-500 ${
									tabItems[index] === activeTab
										? 'border-b-2 border-sky-900'
										: ''
								}`}
								key={item.index}
								onClick={() => test(item)}
							>
								{item}
							</button>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default TabSlider;
