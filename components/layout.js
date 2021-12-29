import Navbar from './navbar';
import Footer from './footer';

function Layout({ children }) {
	return (
		<>
			<p className="skip-to-content"><a href="#main">Skip to Content</a></p>
			<Navbar/>
			<main id="main">{children}</main>
			<Footer/>
		</>
	);
}

export default Layout;
