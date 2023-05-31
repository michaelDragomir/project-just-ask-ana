'use client';

import { useState, useEffect } from 'react';

// async function fetchUsers() {
// 	const response = await fetch('https://randomuser.me/api/');
// 	const data = await response.json();
// 	const { results } = data;
// 	return results;
// }

//TO DO:
//create an typscript interface and fix that error.
// build a table out.

const MainPage = () => {
	type Location = any;
	const [users, setUsers] = useState<any>([]);
	const [flattenedLocations, setFlattenedLocations] = useState({
		headers: [],
		data: [],
	});

	console.log('-----users-----', users);
	console.log('-----flattenedLocations-----', flattenedLocations);

	const flattenLocationObject = (locations: Location[]) => {
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
		return { header: flattenedLocationHeaders, data };
	};

	const getObjectKeys = (obj: any) => {
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
	};

	// const flattenObject = useCallback((obj: any) => {
	// 	let flattened: any[] = [];

	// 	Object.keys(obj).forEach((key) => {
	// 		const value = obj[key];

	// 		if (
	// 			typeof value === 'object' &&
	// 			value !== null &&
	// 			!Array.isArray(value)
	// 		) {
	// 			Object.assign(flattened, flattenObject(value));
	// 		} else {
	// 			flattened[key] = value;
	// 		}
	// 	});

	// 	console.log('flattened', flattened);

	// 	return flattened;
	// }, []);

	useEffect(() => {
		const fetchPeople = async () => {
			const response = await fetch('https://randomuser.me/api/?results=3');
			const data = await response.json();
			const { results } = data;
			setUsers(data);

			const ourFlattenedLocations = flattenLocationObject(
				results.map(({ location }) => location),
			);
			setFlattenedLocations(ourFlattenedLocations);
		};
		fetchPeople();
	}, []);

	return (
		<>
			<div>
				{/* {users.map((item: any) => {
					return <div key={item.city}>{item.location.city}</div>;
				})} */}
				<table className='table-auto'>
					<thead>
						<tr>
							<th>Song</th>
							<th>Artist</th>
							<th>Year</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
							<td>Malcolm Lockyer</td>
							<td>1961</td>
						</tr>
						<tr>
							<td>Witchy Woman</td>
							<td>The Eagles</td>
							<td>1972</td>
						</tr>
						<tr>
							<td>Shining Star</td>
							<td>Earth, Wind, and Fire</td>
							<td>1975</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
};

export default MainPage;
