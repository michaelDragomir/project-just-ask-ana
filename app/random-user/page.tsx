// 'use client';

// import { useEffect, useState } from 'react';

async function fetchUsers() {
	const response = await fetch('https://randomuser.me/api/');
	const data = await response.json();
	return data;
}

const RandomUserHomePage = async () => {
	const getUsers = await fetchUsers();
	const { results } = getUsers;
	// const [users, setUsers] = useState<any>([]);

	// useEffect(() => {
	// 	const fetchUsers = async () => {
	// 		const response = await fetch('https://randomuser.me/api/');

	// 		if (!response.ok) {
	// 			throw new Error('nope!');
	// 		}

	// 		const data = response.json();

	// 		setUsers(data);
	// 	};

	// 	fetchUsers();
	// }, []);

	console.log('!!!!', results[0].gender);

	return (
		<>
			<div>hello</div>
		</>
	);
};

export default RandomUserHomePage;
