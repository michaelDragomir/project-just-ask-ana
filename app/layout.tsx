import '@/styles/globals.scss';
import { Metadata } from 'next';
import Header from '@/components/Header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Just Ask Ana',
	description:
		'A website that you can go to and learn about different things that happen in California like laws, education, health, and other important stuff.',
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
		<html lang='en'>
			<body className='test'>
				<Header />
				{children}
			</body>
		</html>
	);
}
