const getCountryLatestNews = async (country: any) => {
	const response = await fetch(
		`https://newsapi.org/v2/top-headlines?${country}`,
		{
			headers: {
				'x-api-key': '373a44e44cde4b79bca78c553bcead34',
			},
			next: { revalidate: 7200 },
		},
	);

	const data = await response.json();

	return data;
};

const MainPage = async ({ country }: any) => {
	const countryData = await getCountryLatestNews(country);

	const { articles } = countryData;

	console.log('!!!!NEWSPAGE----DATA', countryData);

	return (
		<>
			<div>
				<ul>
					{articles.map((article: any) => (
						<li>{article.description}</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default MainPage;
