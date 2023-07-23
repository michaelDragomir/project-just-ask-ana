import { NextResponse } from 'next/server';

export const GET = async (req, { params }) => {
	const { queries, activeTab } = params;

	try {
		const response = await fetch(
			`https://newsapi.org/v2/everything?q=${queries}&sortBy=${activeTab}`,
			{
				headers: {
					'x-api-key': '373a44e44cde4b79bca78c553bcead34',
				},
				next: { revalidate: 3600 },
			},
		);
		const data = await response.json();

		return NextResponse.json(data);
	} catch (error) {
		return new Response('no data', { status: 500 });
	}
};
