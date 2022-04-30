import {Footer} from "../components/Footer";
import {Header} from "../components/Header";

import Head from "next/head";

export default function Layout({children}) {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700&display=swap" />
				<link rel="shortcut icon" type="image/png" href="/favicon.png" />
			</Head>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
