import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const fontMontserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400'],
	display: 'block',
	variable: '--font-montserrat',
});

export const metadata: Metadata = {
	title: 'My App',
	description: 'My App',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${fontMontserrat.variable} min-h-[100dvh] font-montserrat`}>{children}</body>
		</html>
	);
}
