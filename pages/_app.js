import Head from 'next/head';
import '../css/global.scss';
import Layout from '../components/layout';

function App( { Component, pageProps } ) {
	return <>
		<Head>
			<title>Nate Conley</title>
		</Head>
		<Layout>
			<Component {...pageProps}/>
		</Layout>
	</>;

}

export default App;
