import Link from 'next/link';
import Post from '../Post';

function Food( { posts, viewAllClassName } ) {
	return (
		<section>
			<h3>Posts on Food</h3>
			{ posts.map( post => {
				return (
					<Post
						key={ post.id }
						post={ post }
						slugBase="food"
						showExcerpt={ false }
					/>
				);
			} ) }
			<p className={ viewAllClassName }>
				<Link href="/food">
					<a>View All Posts on Food</a>
				</Link>
			</p>
		</section>
	);
}

export default Food;
