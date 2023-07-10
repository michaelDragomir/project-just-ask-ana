import moment from 'moment';

const ArticleDetailPage = ({ context }: any) => {
	const {
		searchParams: { title, author, description, publishedAt, content },
	} = context;

	const sanitizedPublishedDate = moment(publishedAt).format('MMMM Do YYYY');

	return (
		<div className='border-2 border-slate-400 rounded-md p-3 max-w-[75%] max-w-2xl mx-auto'>
			<div className='lg:col-span-2 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl'>
				<p className='text-base font-semibold leading-7 text-indigo-600'>
					{author} | {sanitizedPublishedDate}
				</p>
				<h2 className='mt-2 font-bold text-gray-900 text-3xl'>{title}</h2>
				<p className='mt-6 text-xl text-gray-700'>{description}</p>
				<div className='mt-6 leading-7 text-gray-700'>{content}</div>
			</div>
		</div>
	);
};

export default ArticleDetailPage;
