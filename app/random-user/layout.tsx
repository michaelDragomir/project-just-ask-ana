import '@/styles/globals.scss';
import { Metadata } from 'next';
import Test from '@/components/random-user/Test';

export const metadata: Metadata = {
	title: 'Just Ask Ana',
	description:
		'A full stack Next.js project focused on real world patterns of fetching, manipulating and displaying data.',
	icons: {
		icon: {
			url: '/icon.svg',
			type: 'image/svg',
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		// <html lang='en'>
		<div>
			<body className='bg-passionBlue'>
				<Test />
				{children}
			</body>
		</div>
		// </html>
	);
}
