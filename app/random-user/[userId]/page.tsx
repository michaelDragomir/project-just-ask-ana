const UserPage = ({ params }: { params: any }) => {
	return (
		<>
			<div className='text-center'>{params.city}</div>
		</>
	);
};

export default UserPage;
