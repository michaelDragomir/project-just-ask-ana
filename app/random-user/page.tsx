import MainPage from '@/components/random-user/MainPage';
// async function fetchUsers() {
// 	const response = await fetch('https://randomuser.me/api/');
// 	const data = await response.json();
// 	const { results } = data;
// 	return results;
// }

//TO DO:
//create an typscript interface and fix that error.
// build a table out.
// flatten certain objects
const RandomUserHomePage = () => {
	// const getUsers = await fetchUsers();

	// const flattenObject = (obj: any) => {
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
	// };

	// flattenObject(getUsers);

	return (
		<>
			<div>
				<MainPage />
			</div>
		</>
	);
};

export default RandomUserHomePage;
