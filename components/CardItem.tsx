'use client';

const CardItem = (props: any) => {
	const { title } = props;
	return (
		<>
			<div>
				<div className='bg-gray-200'>
					<div className='text-slate-500 text-lg text-center font-sans py-1.5'>
						{title}
					</div>
				</div>
			</div>
		</>
	);
};

export default CardItem;
