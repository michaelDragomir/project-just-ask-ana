'use client';

import Link from 'next/link';

const Header = () => {
	return (
		<>
			<header className='mx-auto w-full h-auto pt-4 text-2xl text-center text-lightGrey'>
				<div className='leading-10 text-'>
					<h2>
						A comprehensive Next.js project that explores practical data
						patterns across the full stack.
					</h2>
					<p>Next.js - TypeScript - Mongo - GraphQL - TailwindCSS</p>
				</div>
			</header>
			<div className='py-6 text-center flex justify-center items-center'>
				<Link
					className='uppercase rounded-lg bg-lightGrey hover:bg-darkGrey transition delay-100 p-2 mr-8'
					href='/'
				>
					project repo
				</Link>
				<Link
					className='uppercase rounded-lg bg-lightGrey hover:bg-darkGrey transition delay-100 p-2'
					href='/'
				>
					resume
				</Link>
			</div>
		</>
	);
};

export default Header;
