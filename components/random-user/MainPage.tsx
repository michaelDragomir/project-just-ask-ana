'use client';

import { useState, useEffect, useCallback } from 'react';

const MainPage = () => {
	type Location = any;

	// add a search button that filters for that specific search value
	// make it clickable to select a row - takes you to user specific data.
	// add a modal - saying..click on header to sort..click on a row to take you to specific user
	// refactor this code..granularize

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
					street_name: street.name,
					number: street.number,
					latitude: coordinates.latitude,
					longitude: coordinates.longitude,
				});
			const flattenedLocationHeaders = getObjectKeys(data[0]);
			return { headers: flattenedLocationHeaders, data };
		},
		[getObjectKeys],
	);

	const fetchPeople = async () => {
		const response = await fetch('https://randomuser.me/api/?results=15');
		if (!response.ok) {
			throw new Error('no fetchy');
		}
		const data = await response.json();
		const { results } = data;
		setUsers(results);
		const getFlattenedLocations = flattenLocationObject(
			results.map(({ location }: Location) => location),
		);
		setFlattenedLocations(getFlattenedLocations);
	};

	useEffect(() => {
		fetchPeople();
	}, []);

	const refectchDataHandler = () => {
		fetchPeople();
	};

	return (
		<>
			<button type='button' onClick={refectchDataHandler}>
				Refectch Data!
			</button>
			<table className='mx-auto table-fixed border-collapse border-spacing-2 border-slate-500'>
				<thead>
					<tr className='bg-slate-400'>
						{headers.map((location: any, idx: any) => (
							<th className='border-slate-600 border px-7' key={idx}>
								{location}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((item: any, idx: any) => (
						<tr key={idx}>
							{headers.map((header: any, idx: any) => (
								<td className='border border-slate-600' key={idx}>
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
