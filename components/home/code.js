import Link from 'next/link';
import Post from '../Post';

function Code( { posts, viewAllClassName } ) {
	return (
		<section>
			<h3>Posts on Code</h3>
			{ posts.map( post => {
				return (
					<Post
						key={ post.id }
						post={ post }
						slugBase="code"
						showExcerpt={ false }
					/>
				);
			} ) }
			<p className={ viewAllClassName }>
				<Link href="/code">
					<a>View All Posts on Code</a>
				</Link>
			</p>
		</section>
	);
}

export default Code;
