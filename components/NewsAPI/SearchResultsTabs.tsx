'use client';

import TabSlider from './TabSlider';
import {
	AiOutlineFire,
	AiTwotoneFire,
	AiFillRead,
	AiOutlineRead,
	AiOutlineCalendar,
	AiFillCalendar,
} from 'react-icons/ai';

const tabItems = [
	{
		icon: <AiOutlineFire className='w-5 h-5' />,
		iconFilled: <AiTwotoneFire className='w-5 h-5' />,
		name: 'popularity',
	},
	{
		icon: <AiOutlineRead className='w-5 h-5' />,
		iconFilled: <AiFillRead className='w-5 h-5' />,
		name: 'relevancy',
	},
	{
		icon: <AiOutlineCalendar className='w-5 h-5' />,
		iconFilled: <AiFillCalendar className='w-5 h-5' />,
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
