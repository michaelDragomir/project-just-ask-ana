import { NextResponse } from 'next/server';

export const GET = async (req, { params }) => {
	const { selectedBreed, limit } = params;

	try {
		const response = await fetch(
			`https://api.thecatapi.com/v1/images/search?${selectedBreed}&${limit}`,
			{
				headers: {
					'x-api-key': process.env.CAT_API_KEY,
				},
				cache: 'no-store',
			},
		);
		const data = await response.json();
		return NextResponse.json(data);
	} catch (error) {
		return new Response('no data', { status: 500 });
	}
};
