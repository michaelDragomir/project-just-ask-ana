'use client';

import TabSlider from './TabSlider';
import { SlBookOpen, SlFire, SlCalender } from 'react-icons/sl';

const tabItems = [
	{
		icon: <SlFire className='w-5 h-5' />,
		name: 'popularity',
	},
	{
		icon: <SlBookOpen className='w-5 h-5' />,
		name: 'relevancy',
	},
	{
		icon: <SlCalender className='w-5 h-5' />,
		name: 'publishedAt',
	},
];
const SearchResultsTabs = ({ handleTabClick }: { handleTabClick: any }) => {
	return (
		<>
			<div className=''>
				<TabSlider tabItems={tabItems} onClick={handleTabClick} />
			</div>
		</>
	);
};

export default SearchResultsTabs;
