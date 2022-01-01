import Link from 'next/link';
import Image from 'next/image';
import styles from './Post.module.scss';

function Post( { post, slugBase, showExcerpt = true } ) {
	return (
		<article className={ styles.post }>
			{ post.featuredImage.node.uri &&
				<div>
					<Image
						src={ `https://backend.nateconley.com${ post.featuredImage.node.uri }` }
						alt={ post.featuredImage.node.altText }
						width="300"
						height="200"
						layout="responsive"
					/>
				</div>
			}
			<div>
				<h4>{ post.title }</h4>
				{ showExcerpt &&
					<div
						dangerouslySetInnerHTML={{ __html: post.excerpt }}
					/>
				}
				<p>
					<Link href={ `/${ slugBase }/${ post.slug }` }>
						<a>Continue Reading</a>
					</Link>
				</p>
			</div>
		</article>
	);
}

export default Post;
