export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div className='border-2 border-red'>
				<h1>Test</h1>
				{children}
			</div>
		</>
	);
}
