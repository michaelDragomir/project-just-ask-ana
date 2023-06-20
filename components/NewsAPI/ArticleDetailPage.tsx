const ArticleDetailPage = ({ context }: any) => {
	const {
		searchParams: { title, author, description, publishedAt, content },
	} = context;

	console.log('CONTEXT-------ATP', title);

	return (
		<>
			<div>{title}</div>
			<div>{author}</div>
			<div>{description}</div>
			<div>{publishedAt}</div>
			<div>{content}</div>
		</>
	);
};

export default ArticleDetailPage;
