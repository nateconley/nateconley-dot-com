import client from '../../apollo-client';
import Single from '../../components/Single';
import { GET_SINGLE_CODE } from '../../queries';

function Code( { post } ) {
	return (
		<div>
			<Single post={ post }/>
		</div>
	);
}

Code.getInitialProps = async ( context ) => {

	const { data } = await client.query( {
		query: GET_SINGLE_CODE,
		variables: {
			slug: context.query.slug,
		},
	} );

	return {
		post: data.postBy,
	};

}

export default Code;
