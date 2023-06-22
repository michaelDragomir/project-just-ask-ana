import TabSlider from './TabSlider';

const TABS = ['ALL', 'POPULAR', 'RELAVANT', 'LATEST ARTICLES'];
const SearchResultsTabs = () => {
	return (
		<>
			<div className=''>
				<TabSlider TabItems={TABS} />
			</div>
		</>
	);
};

export default SearchResultsTabs;
