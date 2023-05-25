import Cards from '@/components/Cards';
import CardItem from '@/components/CardItem';
import styles from '@/styles/page.module.scss';
import { DUMMYDATA } from '@/dummyData';

const HomePage = () => {
	console.log('@@@', DUMMYDATA);
	return (
		<>
			<div>
				<main className={styles.color}>
					<Cards>
						{DUMMYDATA.map((item) => {
							return <CardItem title={item.title} key={item.title} />;
						})}
					</Cards>
				</main>
			</div>
		</>
	);
};

export default HomePage;
