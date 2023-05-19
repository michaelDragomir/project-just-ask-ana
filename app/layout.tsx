import './globals.scss';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Just Ask Ana',
	description:
		'A website that you can go to and learn about different things that happen in the state like laws, education, health, and other important stuff.',
	icons: {
		icon: {
			url: '/favicon.ico',
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
			<body className={inter.className}>{children}</body>
		</html>
	);
}
