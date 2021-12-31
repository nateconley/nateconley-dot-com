import Link from 'next/link';
import Post from './Post';
import { homeCode } from '../../queries';
import client from '../../apollo-client';

function Code( { posts } ) {
	return (
		<section>
			<h3>Posts on Code</h3>
			{ posts.map( post => {
				return <Post key={ post.id } title={ post.title } />
			} ) }
			<Link href="/code">
				<a>View All Posts on Code</a>
			</Link>
		</section>
	);
}

export default Code;
