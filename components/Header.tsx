'use client';

import Link from 'next/link';

const Header = () => {
	return (
		<>
			<div className='py-6 text-center flex justify-center items-center'>
				<Link
					className='uppercase rounded-lg bg-lightGrey hover:bg-darkGrey transition delay-100 p-2 mr-8 border border-slate-500'
					href='https://github.com/michaelDragomir/project-just-ask-ana'
					target='_blank'
				>
					project repo
				</Link>
				<Link
					className='uppercase rounded-lg bg-lightGrey hover:bg-darkGrey transition delay-100 p-2 border border-slate-500'
					href='/'
				>
					resume
				</Link>
			</div>
		</>
	);
};

export default Header;
