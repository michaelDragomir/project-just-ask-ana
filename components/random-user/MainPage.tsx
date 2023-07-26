'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Modal from './Modal';

enum SortingDirection {
	ASCENDING = 'ASCENDING',
	DESCENDING = 'DESCENDING',
	UNSORTED = 'UNSORTED',
}

const MAX_PAGES = 3;
const USERS_PER_PAGE = 5;

const MainPage = () => {
	type Location = any;

	const hasMounted = useRef(false);
	const [inputFieldValue, setInputFieldValue] = useState<string>('');
	const [users, setUsers] = useState<any>([]);
	const [currentPage, setCurrentPage] = useState<any>(1);
	const [modalOpen, setmodalOpen] = useState<any>(false);
	const [sortingDirection, setSortingDirection] = useState<any>({});
	const [flattenedLocations, setFlattenedLocations] = useState<any>({
		headers: [],
		data: [],
	});
	const { headers, data } = flattenedLocations;

	const userPage = (currentPage - 1) * USERS_PER_PAGE;
	const userPageItems = users.slice(userPage, userPage + USERS_PER_PAGE);

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
			for (const { street, timezone, ...rest } of locations)
				data.push({
					...rest,
					street_name: street.name,
					number: street.number,
				});
			const flattenedLocationHeaders = getObjectKeys(data[0]);
			return { headers: flattenedLocationHeaders, data };
		},
		[getObjectKeys],
	);

	const fetchPeople = async () => {
		const response = await fetch('/api/random-user');

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

	const nextPageOnClickHandler = () => {
		if (currentPage !== MAX_PAGES) {
			setCurrentPage((prev: any) => prev + 1);
		}
		return;
	};

	const previousPageOnClickHandler = () => {
		setCurrentPage((prev: any) => prev - 1);
	};

	return (
		<>
			<nav className='flex items-center space-x-2'>
				<a
					className='text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md'
					href='#'
				>
					<span aria-hidden='true'>«</span>
					<button onClick={previousPageOnClickHandler}>Previous</button>
				</a>
				<a
					className='w-10 h-10 bg-blue-500 text-white p-4 inline-flex items-center text-sm font-medium rounded-full'
					href='#'
					aria-current='page'
				>
					1
				</a>
				<a
					className='w-10 h-10 text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full'
					href='#'
				>
					2
				</a>
				<a
					className='w-10 h-10 text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full'
					href='#'
				>
					3
				</a>
				<a
					className='text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md'
					href='#'
				>
					<button onClick={nextPageOnClickHandler}>Next</button>
					<span aria-hidden='true'>»</span>
				</a>
			</nav>
			{userPageItems.map((user: any, idx: number) => (
				<div key={idx}>{user.name.first}</div>
			))}
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
			{/* do anther table and paginate some users..display page number..when clicked. takes them to more info */}
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
