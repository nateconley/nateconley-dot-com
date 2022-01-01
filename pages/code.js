import client from '../apollo-client';
import { GET_CODE } from '../queries';
import Head from 'next/head';
import Post from '../components/Post';

function Code( { posts } ) {

	const title = 'Posts on Code';

	return (
		<>
			<Head>
				<title>Nate Conley | { title }</title>
				<meta name="description" content={ title }></meta>
			</Head>
			<div>
				<h1>{ title }</h1>
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

export async function getStaticProps( context ) {

	const { data } = await client.query( {
		query: GET_CODE,
		variables: {
			num: 8,
		},
	} );

	return {
		props: {
			posts: data.posts.nodes,
		},
	};
}

export default Code;
