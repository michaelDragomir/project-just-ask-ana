const TabSlider = ({ TabItems }: { TabItems: any }) => {
	return (
		<>
			<div>
				{TabItems.map((item: any, index: any) => (
					<div className=''>
						<button type='button' className='' key={`tab-slider-tab-${index}`}>
							{item}
						</button>
					</div>
				))}
			</div>
		</>
	);
};

export default TabSlider;
