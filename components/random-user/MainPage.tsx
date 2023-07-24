'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Modal from './Modal';

enum SortingDirection {
	ASCENDING = 'ASCENDING',
	DESCENDING = 'DESCENDING',
	UNSORTED = 'UNSORTED',
}

const MainPage = () => {
	type Location = any;

	const [inputFieldValue, setInputFieldValue] = useState<string>('');
	const [users, setUsers] = useState<any>([]);
	const [modalOpen, setmodalOpen] = useState<any>(false);
	const hasMounted = useRef(false);
	const [sortingDirection, setSortingDirection] = useState<any>({});
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
		const response = await fetch('/api/random-user');

		const data = await response.json();
		console.log('DATA', data);
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
				('' + text).toLowerCase().includes(searchInputValue.toLowerCase()),
			);
		});
	};

	const sortData = (
		data: any,
		sortKey: any,
		sortingDirection: SortingDirection,
	) => {
		data.sort((a: any, b: any) => {
			const sortA = a[sortKey];
			const sortB = b[sortKey];

			if (
				sortingDirection === SortingDirection.ASCENDING ||
				sortingDirection === SortingDirection.UNSORTED
			) {
				if (sortA < sortB) {
					return -1;
				}
				if (sortA > sortB) {
					return 1;
				}
				return 0;
			} else {
				if (sortA > sortB) {
					return -1;
				}
				if (sortA < sortB) {
					return 1;
				}
				return 0;
			}
		});
	};

	const getNextSortingDirection = (sortingDirection: SortingDirection) => {
		if (
			sortingDirection === SortingDirection.UNSORTED ||
			sortingDirection === SortingDirection.ASCENDING
		) {
			return SortingDirection.DESCENDING;
		}
		return SortingDirection.ASCENDING;
	};

	const sortColumn = (sortKey: any) => {
		const flattenedLocationsCopy = {
			...flattenedLocations,
			data: [...flattenedLocations.data],
		};
		const { data } = flattenedLocationsCopy;
		const currentSortingDirection = sortingDirection[sortKey];

		sortData(data, sortKey, currentSortingDirection);
		const nextSortingDirection = getNextSortingDirection(
			currentSortingDirection,
		);

		const newSortingDirections = { ...sortingDirection };

		newSortingDirections[sortKey] = nextSortingDirection;

		setFlattenedLocations(flattenedLocationsCopy);
		setSortingDirection(newSortingDirections);
	};

	useEffect(() => {
		fetchPeople();

		if (!hasMounted.current) {
			setTimeout(() => {
				setmodalOpen(true);
			}, 2000);

			hasMounted.current = true;
		}
	}, []);

	const refetchDataHandler = () => {
		fetchPeople();
	};

	return (
		<>
			{modalOpen && <Modal />}
			<input
				className='mr-3'
				type='text'
				value={inputFieldValue}
				onChange={(e) => setInputFieldValue(e.target.value)}
				placeholder='search table'
			/>
			<button
				type='button'
				className='mb-3 uppercase rounded-lg bg-neutral-400 hover:bg-darkGrey transition delay-100 p-2'
				onClick={refetchDataHandler}
			>
				Refetch Data
			</button>
			<h4 className='mb-3'>
				This API fetches data, sorts by headers, and searches for specific a
				location.
			</h4>
			<table className='mx-auto table-fixed border-collapse border-spacing-2 border-slate-500'>
				<thead>
					<tr className='bg-slate-400'>
						{headers.map((location: any, idx: number) => (
							<th
								className='border-slate-600 border px-7 cursor-default'
								key={idx}
								onClick={() => sortColumn(location)}
							>
								<button type='button'>{location}</button>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{getfilteredRows(data, inputFieldValue).map(
						(item: any, idx: number) => {
							return (
								<tr key={idx}>
									{headers.map((header: any, idx: any) => (
										<td className='border border-slate-600' key={idx}>
											{item[header]}
										</td>
									))}
								</tr>
							);
						},
					)}
				</tbody>
			</table>
		</>
	);
};

export default MainPage;
