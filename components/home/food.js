import Link from 'next/link';
import Post from './Post';

function Food( { posts } ) {
	return (
		<section>
			<h3>Posts on Food</h3>
			{ posts.map( post => {
				return <Post title={ post.title } />
			} ) }
			<Link href="/food">
				<a>View All Posts on Food</a>
			</Link>
		</section>
	);
}

export default Food;
