import client from '../apollo-client';
import { GET_CODE, GET_CODE_BACKWARD } from '../queries';
import Head from 'next/head';
import Link from 'next/link';
import Post from '../components/Post';
import styles from './Archive.module.scss';

function Code( { posts, pageInfo, edges } ) {

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
				<div className={ styles.postList }>
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
				{ ( pageInfo.hasPreviousPage || pageInfo.hasNextPage ) &&
					<nav className={ styles.pagination }>
						<ul>
						{ pageInfo.hasPreviousPage &&
							<li>
								<Link href={ `/code?before=${ edges[0].cursor }` }>
									<a>Previous Page</a>
								</Link>
							</li>
						}
						{ pageInfo.hasNextPage &&
							<li>
								<Link href={ `/code?after=${ edges[ edges.length - 1 ].cursor }` }>
									<a>Next Page</a>
								</Link>
							</li>
						}
						</ul>
					</nav>
				}
			</div>
		</>
	);
}

Code.getInitialProps = async( context ) => {

	const before = 'before' in context.query ? context.query.before: '';
	const after  = 'after' in context.query ? context.query.after: '';

	const query = 'before' in context.query ? GET_CODE_BACKWARD : GET_CODE;

	const { data } = await client.query( {
		query: query,
		variables: {
			num   : 6,
			before: before,
			after : after,
		},
	} );

	return {
		posts   : data.posts.nodes,
		pageInfo: data.posts.pageInfo,
		edges   : data.posts.edges,
	};
}

export default Code;
