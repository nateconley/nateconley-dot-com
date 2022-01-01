import styles from './index.module.scss';
import Code from '../components/home/code';
import Food from '../components/home/food';
import { GET_CODE, GET_FOOD } from '../queries';
import client from '../apollo-client';
import Image from 'next/image';
import heroImage from '../public/hero-image.png';
import Head from 'next/head';

function HomePage( { codePosts, foodPosts } ) {
	return (
	<>
		<Head>
			<meta name="description" content="Nate Conley is a Web Developer and Passionate Home Cook"/>
		</Head>
		<div className={ styles.hero }>
			<Image
				src={ heroImage }
				alt="Tall bamboo ferns and other foliage with a tall hibiscus tree in the background"
				className={ styles.hero }
			/>
		</div>
		<div>
			<h1>Hello, I'm Nate.</h1>
			<h2>Web Developer and Passionate Home Cook</h2>
			<p>Welcome to my site. I'll share my experience writing code and cooking food at home.</p>
			<hr />
			<div className={ styles.postSections }>
				<Code posts={ codePosts } viewAllClassName={ styles.viewAll } />
				<Food posts={ foodPosts } viewAllClassName={ styles.viewAll } />
			</div>
		</div>
	</>
	);
}

export async function getStaticProps( context ) {

	const codeQuery = await client.query( {
		query: GET_CODE,
		variables: {
			num: 4,
		},
	} );

	const foodQuery = await client.query( {
		query: GET_FOOD,
		variables: {
			num: 4,
		},
	} );

	return {
		props: {
			codePosts: codeQuery.data.posts.nodes,
			foodPosts: foodQuery.data.foods.nodes,
		},
	};
}

export default HomePage;
