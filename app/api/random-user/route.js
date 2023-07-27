import { NextResponse } from 'next/server';

export const GET = async (req, res) => {
	try {
		const response = await fetch('https://randomuser.me/api/?results=20');

		const data = await response.json();
		return NextResponse.json(data);
	} catch (error) {
		return new Response('no data', { status: 500 });
	}
};
