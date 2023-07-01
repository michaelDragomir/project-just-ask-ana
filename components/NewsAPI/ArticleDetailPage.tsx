const ArticleDetailPage = ({ context }: any) => {
	const {
		searchParams: { title, author, description, publishedAt, content },
	} = context;

	return (
		<>
			<div>Title: {title}</div>
			<div> by: {author}</div>
			<div>Description: {description}</div>
			<div>Published: {publishedAt}</div>
			<div>Content: {content}</div>
		</>
	);
};

export default ArticleDetailPage;
