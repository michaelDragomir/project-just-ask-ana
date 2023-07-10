import moment from 'moment';

const ArticleDetailPage = ({ context }: any) => {
	const {
		searchParams: { title, author, description, publishedAt, content },
	} = context;

	const sanitizedPublishedDate = moment(publishedAt).format('MMMM Do YYYY');

	return (
		<div className=''>
			<div>Title: {title}</div>
			<div> by: {author}</div>
			<div>Description: {description}</div>
			<div>Published: {sanitizedPublishedDate}</div>
			<div>Content: {content}</div>
		</div>
	);
};

export default ArticleDetailPage;
