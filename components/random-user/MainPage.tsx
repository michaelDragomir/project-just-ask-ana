'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Modal from './Modal';
import Image from 'next/image';
import Link from 'next/link';

enum SortingDirection {
	ASCENDING = 'ASCENDING',
	DESCENDING = 'DESCENDING',
	UNSORTED = 'UNSORTED',
}

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

	const USERS_PER_PAGE = 5;
	const MAX_PAGES = Math.ceil(users.length / USERS_PER_PAGE);

	const { headers, data } = flattenedLocations;

	const userPage = (currentPage - 1) * USERS_PER_PAGE;
	const userPageItems = users.slice(userPage, userPage + USERS_PER_PAGE);
	const pageNumbers = Array.from({ length: MAX_PAGES }, (v, i: any) => i + 1);

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
		(location: Location[]) => {
			const data = [];
			for (const { street, city, state, country, postcode } of location)
				data.push({
					street_name: street.name,
					street_number: street.number,
					city: city,
					state: state,
					country: country,
					postcode: postcode,
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
		if (currentPage <= 1) {
			return;
		}
		setCurrentPage((prev: any) => prev - 1);
	};

	console.log('USERS', users);

	return (
		<>
			{modalOpen && <Modal />}
			<h4 className='mb-3'>
				This API paginates users, fetches data, sorts by headers, and searches
				for specific items.
			</h4>
			<div className='flex justify-center flex-col items-center space-x-2'>
				<ul className='flex'>
					{userPageItems.map((user: any, idx: number) => (
						<li key={user.phone} className='animate-slide p-4 pb-0'>
							<Link href='/random-user/user-profile'>
								<Image
									src={user.picture.thumbnail}
									width={50}
									height={50}
									alt='user picture'
								/>
								<div>{user.name.first}</div>
							</Link>
						</li>
					))}
				</ul>
				<div className='mb-5'>
					<div
						className={`${
							currentPage === 1 ? 'text-gray-400' : 'text-gray-700'
						} p-4 inline-flex items-center gap-2 rounded-md`}
					>
						<button onClick={previousPageOnClickHandler}>« Previous</button>
					</div>
					{pageNumbers.map((num: any, idx: any) => (
						<div
							key={idx}
							className={`${
								num === currentPage ? 'bg-gray-600 text-white' : 'text-gray-500'
							} h-3 p-4 inline-flex items-center text-sm font-medium rounded-full`}
						>
							<button onClick={() => setCurrentPage(num)}>{num}</button>
						</div>
					))}
					<div
						className={`${
							currentPage === MAX_PAGES ? 'text-gray-400' : 'text-gray-700'
						} p-4 inline-flex items-center gap-2 rounded-md`}
					>
						<button onClick={nextPageOnClickHandler}>Next »</button>
					</div>
				</div>
			</div>
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
			<table className='mx-auto table-fixed border-collapse border-spacing-2 border-slate-500'>
				<thead>
					<tr className='bg-slate-400'>
						{headers.map((location: any, idx: number) => (
							<th
								key={idx}
								className='border-slate-600 border px-7 cursor-default'
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
