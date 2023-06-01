'use client';

import { useState, useEffect, useCallback } from 'react';

const MainPage = () => {
	type Location = any;

	const [users, setUsers] = useState<any>([]);
	const [flattenedLocations, setFlattenedLocations] = useState<any>({
		headers: [],
		data: [],
	});

	const { headers, data } = flattenedLocations;

	const getObjectKeys = useCallback((obj: any) => {
		let objectKeys: string[] = [];

		Object.keys(obj).forEach((objectKey) => {
			const value = obj[objectKey];
			if (typeof value !== 'object') {
				objectKeys.push(objectKey);
			} else {
				objectKeys = [...objectKeys, ...getObjectKeys(value)];
			}
		});
		return objectKeys;
	}, []);

	const flattenLocationObject = useCallback(
		(locations: Location[]) => {
			const data = [];
			for (const { street, coordinates, timezone, ...rest } of locations)
				data.push({
					...rest,
					name: street.name,
					number: street.number,
					latitude: coordinates.latitude,
					longitude: coordinates.longitude,
				});
			const flattenedLocationHeaders = getObjectKeys(data[0]);
			return { headers: flattenedLocationHeaders, data };
		},
		[getObjectKeys],
	);

	useEffect(() => {
		const fetchPeople = async () => {
			const response = await fetch('https://randomuser.me/api/?results=3');
			const data = await response.json();
			const { results } = data;
			setUsers(results);

			const ourFlattenedLocations = flattenLocationObject(
				results.map(({ location }: Location) => location),
			);
			setFlattenedLocations(ourFlattenedLocations);
		};
		fetchPeople();
	}, [flattenLocationObject]);

	return (
		<>
			<table className='mx-auto table-fixed border-collapse border-separate border-spacing-2 border border-slate-500'>
				<thead>
					<tr>
						{headers.map((location: any, idx: any) => (
							<th className='border-slate-600' key={idx}>
								{location}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((item: any, idx: any) => (
						<tr key={idx}>
							{headers.map((header: any, idx: any) => (
								<td className='border border-slate-700' key={idx}>
									{item[header]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default MainPage;
