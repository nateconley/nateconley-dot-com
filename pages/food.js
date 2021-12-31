import { useQuery } from "@apollo/client";
import client from '../apollo-client';
import { GET_FOOD } from '../queries';

function Food( { posts } ) {
	return <div>
		<h1>Food</h1>
		{ posts.map( post => {
			return <h2 key={ post.id }>{ post.title }</h2>
		} ) }
	</div>;
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
