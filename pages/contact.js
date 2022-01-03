import Head from 'next/head';
import styles from './Contact.module.scss';

function Contact() {
	return (
		<>
			<Head>
				<title>Nate Conley | Contact</title>
				<meta name="description" content="Contact Nate Conley"/>
			</Head>
			<div>
				<h1>Contact</h1>
				<div className={ styles.contactCols }>
					<div>
						<p>Hello! I am not currently taking on development freelance projects or contract work. Feel free to reach out for other purposes.</p>
						<p>You can find me on social media:</p>
						<ul>
							<li>
								<a href="https://www.linkedin.com/in/nate-conley-503464224/" target="_blank" rel="me">LinkedIn</a>
							</li>
							<li>
								<a href="https://www.instagram.com/nate_conley123/" target="_blank" rel="me">Instagram</a>
							</li>
							<li>
								<a href="https://github.com/nateconley" target="_blank" rel="me">GitHub</a>
							</li>
							<li>
								<a href="https://twitter.com/NateConley123" target="_blank" rel="me">Twitter</a>
							</li>
						</ul>
					</div>
					<div>
						<form className={ styles.form } method="POST" name="contact" action="/success" data-netlify="true">
							<p>
								<label htmlFor="contact-name" name="name">Name <span className={ styles.required } title="Required Field">*</span></label>
								<input name="name" id="contact-name" type="text" placeholder="Name" required="true"/>
							</p>
							<p>
								<label htmlFor="contact-email">Email <span className={ styles.required } title="Required Field">*</span></label>
								<input name="email" id="contact-email" type="email" placeholder="Email" required="true"/>
							</p>
							<div>
								<label htmlFor="contact-message">Message <span className={ styles.required } title="Required Field">*</span></label>
								<textarea placeholder="Message" name="message" id="contact-message" cols="30" rows="10" required="true"></textarea>
							</div>
							<input type="submit" value="Send" />
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;
