'use client';

import TabSlider from './TabSlider';

const TABS = ['ALL', 'POPULAR', 'RELAVANT', 'LATEST ARTICLES'];
const SearchResultsTabs = ({ handleTabClick }: { handleTabClick: any }) => {
	return (
		<>
			<div className=''>
				<TabSlider tabItems={TABS} handleTabClick={handleTabClick} />
			</div>
		</>
	);
};

export default SearchResultsTabs;
