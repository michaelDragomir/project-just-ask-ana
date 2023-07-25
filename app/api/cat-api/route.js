import { NextResponse } from 'next/server';

export const GET = async (req, res) => {
	try {
		const response = await fetch('https://api.thecatapi.com/v1/breeds', {
			headers: {
				'x-api-key':
					'live_d7Zz8FWOCt9MQqOtmoBNTMS1R31Q2Yn6RAVcjf2z2guhPU2pQ14Z0jcfum5Evw7I',
			},
			cache: 'no-store',
		});

		const data = await response.json();
		return NextResponse.json(data);
	} catch (error) {
		return new Response('no data', { status: 500 });
	}
};
