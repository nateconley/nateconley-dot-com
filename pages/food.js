import client from '../apollo-client';
import { GET_FOOD } from '../queries';
import Head from 'next/head';
import Post from '../components/Post';
import styles from './Archive.module.scss';

function Food( { posts } ) {

	const title = 'Posts on Food';

	return (
		<>
			<Head>
				<title>Nate Conley | { title }</title>
				<meta name="description" content={ title }/>
			</Head>
			<div>
				<h1>{ title }</h1>
				<hr/>
				<div className={ styles.postList }>
					{ posts.map( post => {
						return (
							<Post
								key={ post.id }
								post={ post }
								slugBase="food"
							/>
						);
					} ) }
				</div>
			</div>
		</>
	);
}

export async function getStaticProps( context ) {

	const { data } = await client.query( {
		query: GET_FOOD,
		variables: {
			num: 8,
		},
	} );

	return {
		props: {
			posts: data.foods.nodes,
		},
	};
}

export default Food;
