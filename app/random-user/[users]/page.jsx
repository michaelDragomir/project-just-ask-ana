'use client';
import UniqueUserPage from '@/components/random-user/UserPage';
import { Suspense, use } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const UserPage = ({ params }) => {
	const { users } = params;
	console.log('!!!USERS', users);
	const router = useRouter();
	console.log('!!!router', router.query);
	return (
		<>
			<Link href='/random-user' className=''>
				Back to Table
			</Link>
			<Suspense>
				<UniqueUserPage />
			</Suspense>
		</>
	);
};

export default UserPage;
