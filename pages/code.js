import client from '../apollo-client';
import { GET_CODE } from '../queries';
import Head from 'next/head';
import Post from '../components/Post';

function Code( { posts } ) {
	return (
		<>
			<Head>
				<title>Nate Conley | Posts on Code</title>
			</Head>
			<div>
				<h1>Posts on Code</h1>
				<hr/>
				{ posts.map( post => {
					return (
						<Post
							key={ post.id }
							post={ post }
							slugBase="code"
						/>
					);
				} ) }
			</div>
		</>
	);
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
