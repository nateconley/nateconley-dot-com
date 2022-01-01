import client from '../../apollo-client';
import Single from '../../components/Single';
import { GET_SINGLE_FOOD } from '../../queries';

function Food( { post } ) {
	return (
		<div>
			<Single post={ post }/>
		</div>
	);
}

Food.getInitialProps = async ( context ) => {

	const { data } = await client.query( {
		query: GET_SINGLE_FOOD,
		variables: {
			slug: context.query.slug,
		},
	} );

	return {
		post: data.foodBy,
	};

}

export default Food;
