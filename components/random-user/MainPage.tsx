'use client';

import { useState, useEffect, useCallback } from 'react';

// const HEADERS = [
// 	'Sort By:',
// 	'city',
// 	'state',
// 	'country',
// 	'postcode',
// 	'street name',
// 	'number',
// 	'latitude',
// 	'longitude',
// ];

const MainPage = () => {
	type Location = any;

	// make it clickable to select a row - takes you to user specific data.
	// add a modal - saying..click on header to sort..click on a row to take you to specific user
	const [inputFieldValue, setInputFieldValue] = useState<string>('');
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
			throw new Error('Problem fetching data');
		}

		const data = await response.json();
		const { results } = data;
		setUsers(results);

		const getFlattenedLocations = flattenLocationObject(
			results.map(({ location }: Location) => location),
		);

		setFlattenedLocations(getFlattenedLocations);
	};

	const getfilteredRows = (rows: any[], searchInputValue: string) => {
		return rows.filter((row: any) => {
			return Object.values(row).some((text: any) =>
				('' + text).toLowerCase().includes(searchInputValue),
			);
		});
	};

	const sortingOptions = headers.map((item: any) => (
		<option value={item} key={item}>
			{item}
		</option>
	));

	//getting corect data sort.
	// it overrides original array..so need to make a copy of it...

	//make a copy of the ne fetchedHeaders and new data.
	//if  value of item[idx] = sortingHeaders[idx]

	const sortData = () => {};

	const sortColumn = (sortKey: any) => {
		const flattenedLocationsCopy = {
			headers: [...flattenedLocations.headers],
			data: [...flattenedLocations.data],
		};
		const { data } = flattenedLocationsCopy;

		const test = data.map((item: any) => item[sortKey]);
		const sortTest = test.sort();
		console.log('----sortTest----', test);
		console.log('!!!!####', headers);
	};

	useEffect(() => {
		fetchPeople();
	}, []);

	const refetchDataHandler = () => {
		fetchPeople();
	};

	return (
		<>
			<div className='border'>
				<label className='mr-2' htmlFor='locations'>
					Sort by:
				</label>
				<select id='location' onClick={() => console.log('hello')}>
					{sortingOptions}
				</select>
			</div>
			<input
				className='mr-3'
				type='text'
				value={inputFieldValue}
				onChange={(e) => setInputFieldValue(e.target.value)}
				placeholder='search table'
			></input>
			<button
				type='button'
				className='mb-3 uppercase rounded-lg bg-neutral-400 hover:bg-darkGrey transition delay-100 p-2'
				onClick={refetchDataHandler}
			>
				Refetch Data
			</button>
			<table className='mx-auto table-fixed border-collapse border-spacing-2 border-slate-500'>
				<thead>
					<tr className='bg-slate-400'>
						{headers.map((location: any, idx: number) => (
							<th className='border-slate-600 border px-7' key={idx}>
								{location}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{getfilteredRows(data, inputFieldValue).map(
						(item: any, idx: number) => (
							<tr key={idx}>
								{headers.map((header: any, idx: any) => (
									<td className='border border-slate-600' key={idx}>
										{item[header]}
									</td>
								))}
							</tr>
						),
					)}
				</tbody>
			</table>
		</>
	);
};

export default MainPage;
