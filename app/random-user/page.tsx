async function fetchUsers() {
	const response = await fetch('https://randomuser.me/api/?results=3');
	const data = await response.json();
	return data;
}

const RandomUserHomePage = async () => {
	const getUsers = await fetchUsers();
	const { results } = getUsers;

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
