import Image from 'next/image';
import styles from './Single.module.scss';
import Head from 'next/head';

function Single({ post }) {

	const dateObj = new Date( post.date );
	const dateString = new Intl.DateTimeFormat(
		'en-US',
		{
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		}
	).format( dateObj );

	return (
		<>
			<Head>
				<title>Nate Conley | { post.title }</title>
				<meta name="description" content={ post.excerpt }/>
			</Head>
			<div className={ styles.post }>
				<h1>{ post.title }</h1>
				<p>{ dateString }</p>
				{ post.featuredImage.node.uri &&
					<div className={ styles.featuredImage }>
						<Image
							src={ `https://backend.nateconley.com${ post.featuredImage.node.uri }` }
							alt={ post.featuredImage.node.altText }
							width="1800"
							height="1200"
							layout="responsive"
						/>
					</div>
				}
				<div
					dangerouslySetInnerHTML={{ __html: post.content }}
				/>
			</div>
		</>
	);
}

export default Single;
