import Link from 'next/link';
import styles from './Footer.module.scss';
import GitHub from './icons/github';
import Instagram from './icons/instagram';
import LinkedIn from './icons/linkedin';
import Twitter from './icons/twitter';

function Footer() {
	return <footer className={ styles.footer }>
		<div className={ styles.top }>
			<h3>Nate Conley</h3>
			<nav>
				<ul>
					<li>
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href="/code">
							<a>Code</a>
						</Link>
					</li>
					<li>
						<Link href="/food">
							<a>Food</a>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<a>About</a>
						</Link>
					</li>
					<li>
						<Link href="/contact">
							<a>Contact</a>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
		<div className={ styles.bottom }>
			<p>&copy; { new Date().getFullYear() } <strong>Nate Conley</strong></p>
			<nav>
				<ul>
					<li>
						<a href="https://www.linkedin.com/in/nate-conley-503464224/" target="_blank" rel="me">
							<LinkedIn/>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/nate_conley123/" target="_blank" rel="me">
							<Instagram/>
						</a>
					</li>
					<li>
						<a href="https://github.com/nateconley" target="_blank" rel="me">
							<GitHub/>
						</a>
					</li>
					<li>
						<a href="https://twitter.com/NateConley123" target="_blank" rel="me">
							<Twitter/>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</footer>;
}

export default Footer;
