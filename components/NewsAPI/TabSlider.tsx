'use client';

import { useState } from 'react';
import cx from 'classnames';

const TabSlider = ({ tabItems }: { tabItems: any }) => {
	const [activeTab, setActiveTab] = useState<any>(tabItems[0]);

	const handleTabClick = (item: any) => {
		setActiveTab(item);
		console.log(activeTab);
	};

	return (
		<>
			<div className='w-full relative flex flex-row justify-center'>
				{tabItems.map((item: any, index: any) => (
					<div className='pr-6' key={`tab-slider-tab-${index}`}>
						<button
							type='button'
							className={`relative hover:border-b-2 border-sky-500 ${
								tabItems[index] === activeTab ? 'border-b-2 border-sky-900' : ''
							}`}
							key={`tab-slider-tab-${index}`}
							onClick={() => handleTabClick(item)}
						>
							{item}
						</button>
					</div>
				))}
			</div>
		</>
	);
};

export default TabSlider;
