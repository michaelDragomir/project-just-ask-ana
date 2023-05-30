'use client';

import Link from 'next/link';

const Test = () => {
	return (
		<>
			<div className='py-6 text-center flex justify-center items-center'>
				<Link
					className='uppercase rounded-lg bg-yellow hover:bg-darkGrey transition delay-100 p-2 mr-8'
					href='/'
				>
					testing
				</Link>
				<Link
					className='uppercase rounded-lg bg-yellow hover:bg-darkGrey transition delay-100 p-2'
					href='/'
				>
					blah
				</Link>
			</div>
		</>
	);
};

export default Test;
