import Image from "next/image";
import styles from "./page.module.scss";
import Head from "next/head";
import Hero from "./components/Hero";
import MyServices from "./components/OurServices.tsx";

export default function Page() {
	return (
		<>
			<Head>
				<title>Portfolio Artist</title>
				<meta name="description" content="Homepage of an Artist's Portfolio" />
			</Head>
			<Hero />
			<MyServices />
			<footer>{/* Footer content */}</footer>
		</>
	);
}
