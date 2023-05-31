async function fetchUsers() {
	const response = await fetch('https://randomuser.me/api/');
	const data = await response.json();
	return data;
}

//TO DO:
//create an typscript interface

const RandomUserHomePage = async () => {
	const getUsers = await fetchUsers();
	const { results } = getUsers;

	console.log('####', results);

	const flattenObject = (obj: any) => {
		let flattened: any[] = [];

		Object.keys(obj).forEach((key) => {
			const value = obj[key];

			if (
				typeof value === 'object' &&
				value !== null &&
				!Array.isArray(value)
			) {
				Object.assign(flattened, flattenObject(value));
			} else {
				flattened[key] = value;
			}
		});

		console.log('flattened', flattened);

		return flattened;
	};

	flattenObject(results);

	return (
		<>
			<div>
				{results.map((item: any) => {
					return <div key={item.name.first}>{item.name.first}</div>;
				})}
			</div>
		</>
	);
};

export default RandomUserHomePage;
