const CatInfo = ({ data }: { data: any }) => {
	console.log('!!!!', data[0].breeds[0].name);
	return (
		<>
			<div>{data[0].breeds[0].name}</div>
			<div>{data[0].breeds[0].description}</div>
			<div>{data[0].breeds[0].temperament}</div>
		</>
	);
};

export default CatInfo;
