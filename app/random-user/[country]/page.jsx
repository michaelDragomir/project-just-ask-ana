import UniqueUserPage from '@/components/random-user/UserPage';
import { Suspense } from 'react';
import Link from 'next/link';

const UserPage = (params) => {
	const { country } = params;

	return (
		<>
			<Link href='/random-user' className=''>
				Back to Table
			</Link>
			<Suspense>
				<UniqueUserPage country={country} />
			</Suspense>
		</>
	);
};

export default UserPage;
