import Link from 'next/link';
import styles from './Post.module.scss';

function Post( { title } ) {
	return (
		<article className={ styles.post }>
			<h4>{ title }</h4>
		</article>
	);
}

export default Post;
