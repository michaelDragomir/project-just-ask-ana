const getLatestNews = async () => {
	const response = await fetch(
		'https://newsapi.org/v2/top-headlines?country=us',
		{
			headers: {
				'x-api-key': '373a44e44cde4b79bca78c553bcead34',
			},
			cache: 'no-store',
			next: { revalidate: 7200 },
		},
	);

	const data = await response.json();

	return data;
};

const MainPage = async () => {
	const newsData = await getLatestNews();

	const { articles } = newsData;

	console.log('NEWS DATA------', articles);
	return (
		<div>
			{articles.map((item: any) => (
				<li>{item.title}</li>
			))}
		</div>
	);
};

export default MainPage;
