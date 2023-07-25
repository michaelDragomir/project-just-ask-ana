import { NextResponse } from 'next/server';

export const GET = async (req, { params }) => {
	const { queries, activeTab } = params;

	try {
		const response = await fetch(
			`https://newsapi.org/v2/everything?q=${queries}&${activeTab}`,
			{
				headers: {
					'x-api-key': process.env.NEWS_API_KEY,
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
