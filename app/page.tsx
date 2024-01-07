import Image from "next/image";
import styles from "./page.module.scss";
import Head from "next/head";
import Hero from "./components/Hero/Hero";

export default function Home() {
	return (
		<>
			<Head>
				<title>Portfolio Artist</title>
				<meta name="description" content="Homepage of an Artist's Portfolio" />
			</Head>
			<Hero />
			<footer>{/* Footer content */}</footer>
		</>
	);
}
