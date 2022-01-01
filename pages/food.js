import client from '../apollo-client';
import { GET_FOOD } from '../queries';
import Head from 'next/head';
import Post from '../components/Post';

function Food( { posts } ) {
	return (
		<>
			<Head>
				<title>Nate Conley | Posts on Food</title>
			</Head>
			<div>
				<h1>Posts on Food</h1>
				<hr/>
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
		</>
	);
}

Food.getInitialProps = async () => {

	const { data } = await client.query( {
		query: GET_FOOD,
		variables: {
			num: 8,
		},
	} );

	return {
		posts: data.foods.nodes,
	};
}

export default Food;
