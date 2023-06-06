'use client';

async function getData(country) {
	const response = await fetch(`https://randomuser.me/api/?country=${country}`);
	if (!response.ok) {
		throw new Error('Failed to fetch data');
	}

	const data = await response.json();
	console.log('**data**', data);

	return data;
}

const UserPage = async ({ country }) => {
	const data = await getData(country);
	const { results } = data;

	console.log('----results----', results[0].location.country);

	const test = results.map((item) => item.location.country);
	console.log('--test--', test);

	return (
		<>
			<h2>{results[0].location.country}</h2>
			<h2>{results[0].location.city}</h2>
			<h2>{results[0].location.state}</h2>
			<h2>{results[0].location.postcode}</h2>
			<h2>{results[0].location.street.name}</h2>

			{/* <p>{repo.description}</p> */}
			{/* <div className='card-stats'>
				<div className='card-stat'>
					<FaStar />
					<span>{repo.stargazers_count}</span>
				</div>
				<div className='card-stat'>
					<FaCodeBranch />
					<span>{repo.forks_count}</span>
				</div>
				<div className='card-stat'>
					<FaEye />
					<span>{repo.watchers_count}</span>
				</div>
			</div> */}
		</>
	);
};

export default UserPage;
