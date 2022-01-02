import Link from 'next/link';
import Image from 'next/image';
import styles from './Post.module.scss';
import { formatDate } from '../helpers';

function Post( { post, slugBase, showExcerpt = true } ) {
	return (
		<article className={ styles.post }>
			{ post.featuredImage.node.uri &&
				<div>
					<Image
						src={ `https://backend.nateconley.com${ post.featuredImage.node.uri }` }
						alt={ post.featuredImage.node.altText }
						width="450"
						height="300"
						layout="responsive"
					/>
				</div>
			}
			<div>
				<h4>{ post.title }</h4>
				<p className={ styles.date }><small>{ formatDate( post.date ) }</small></p>
				{ showExcerpt &&
					<div
						className={ styles.excerpt }
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
