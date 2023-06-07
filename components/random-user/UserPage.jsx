'use client';

// async function getData() {
// 	const response = await fetch(`https://randomuser.me/api/?results=15`, {
// 		cache: 'no-store',
// 	});
// 	if (!response.ok) {
// 		throw new Error('Failed to fetch data');
// 	}

// 	const data = await response.json();

// 	return data;
// }

const UserPage = async ({ users }) => {
	// const data = await getData();
	// const { results } = data;

	// const allCountries = [];

	// for (const key in results) {
	// 	allCountries.push({
	// 		country: results[key].location.country,
	// 	});
	// }

	// const useBycountry = allCountries.find(
	// 	(location) => location.country !== country,
	// );

	console.log('users', users);
	// console.log('useBycountry', useBycountry);

	return (
		<>
			<h1>hello</h1>
			{/* {results.map((item, idx) => {
				return (
					<div key={idx}>
						<h1>{item.location.country}</h1>
					</div>
				);
			})} */}
		</>
	);
};

export default UserPage;
