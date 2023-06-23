import Link from 'next/link';

// const getCountryLatestNews = async (country: any) => {
// 	const response = await fetch(
// 		`https://newsapi.org/v2/everything?q=technology+entertainment&sortBy=popularity`,
// 		{
// 			headers: {
// 				'x-api-key': '373a44e44cde4b79bca78c553bcead34',
// 			},
// 			next: { revalidate: 7200 },
// 		},
// 	);

// 	const data = await response.json();

// 	return data;
// };

const MainPage = async ({ country }: any) => {
	// const countryData = await getCountryLatestNews(country);

	// const { articles } = countryData;

	return (
		<>
			<div>
				{/* <ul>
					{articles.map((article: any) => (
						<Link
							href={{
								pathname: `/the-news/${country}/technology`,
								query: {
									...article,
								},
							}}
						>
							<li>{article.description}</li>
						</Link>
					))}
				</ul> */}
			</div>
		</>
	);
};

export default MainPage;
