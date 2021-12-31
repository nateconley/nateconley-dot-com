import styles from './About.module.scss';

function About() {
	return (
		<div>
			<h1>About Me</h1>

			<ul className={ styles.postNav }>
				<li>
					<a href="#web-developer">Web Developer Nate</a>
				</li>
				<li>
					<a href="#home-cook">Home Cook Nate</a>
				</li>
			</ul>

			<p>I'm Nate, a web developer and passionate home cook based on the Big Island of Hawaii.</p>
			<p>I am also a husband, dog lover, and I love to swim, snorkel, and explore this beautiful island.</p>

			<h2 id="web-developer">Web Developer Nate</h2>
			<p>I have been working as an agency developer since 2016. While I started out primarily working with front end technologies, agency work has exposed me to the full stack, working with WordPress APIs, PHP, and MySQL.</p>

			<h3>Front-End Web Development</h3>
			<p>I have experience crafting front ends using the following technologies:</p>
			<ul>
				<li>Semantic Markup</li>
				<li>CSS, Scss</li>
				<li>React.js</li>
				<li>jQuery</li>
			</ul>
			<p>My approach is to consider the user and how they will navigate an interface. I approach front-end development with accessibility in mind.</p>

			<h3>WordPress Development</h3>
			<p>I have experience with all aspects of WordPress development, including:</p>
			<ul>
				<li>Theme Development</li>
				<li>Plugin Development</li>
				<li>Block Development</li>
				<li>Extending the REST API</li>
			</ul>
			<p>I have experience in building custom solutions and extending existing solutions.</p>
			<p>When working with WordPress, my approach is to find logical solutions for clients. Sometimes this means configuring off-the-shelf plugins, but other times this means creating abstraction layers over existing APIs.</p>

			<h3>Other Technologies</h3>
			<p>This site is built using the Next.js framework, which has been a joy to work with. For posts, this site queries a WordPress backend via GraphQL (using the amazin WP GraphQL plugin).</p>
			<p>I have experience working with git in a collaborative environment.</p>
			<p>For build tooling, I tend to reach for Parcel nowadays when I need to configure from scratch.</p>

			<hr />

			<h2 id="home-cook">Home Cook Nate</h2>
			<p>I started cooking as a kid, using the toaster and microwave to make some of my favorite childhood snacks. Throught the years I have binged food-related content and have started collecting cookbooks, appliances, and other cooking gear.</p>
			<p>I love everything from Julia Child and Jacques Pepin recipes, to cooking brisket or pizza outdoors.</p>

		</div>
	);
}

export default About;