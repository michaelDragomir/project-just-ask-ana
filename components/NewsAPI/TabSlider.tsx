const TabSlider = ({ TabItems }: { TabItems: any }) => {
	return (
		<>
			<div className='w-full relative flex flex-row justify-center'>
				{TabItems.map((item: any, index: any) => (
					<div className='pr-6'>
						<button
							type='button'
							className='hover:border-b-2 border-sky-500'
							key={`tab-slider-tab-${index}`}
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
