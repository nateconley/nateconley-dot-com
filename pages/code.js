import client from '../apollo-client';
import { GET_CODE } from '../queries';

function Code( { posts } ) {
	return <div>
		<h1>Code</h1>
		{ posts.map( post => {
			return <h2 key={ post.id }>{ post.title }</h2>
		} ) }
	</div>;
}

Code.getInitialProps = async () => {

	const { data } = await client.query( {
		query: GET_CODE,
		variables: {
			num: 8,
		},
	} );

	return {
		posts: data.posts.nodes,
	};
}

export default Code;
