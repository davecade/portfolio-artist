import Head from "next/head";
import Hero from "@/components/Hero";
import MyServices from "@/components/OurServices.tsx";
import Portfolio from "@/components/Portfolio";
import Spacer from "@/components/Spacer/Spacer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Portfolio Artist</title>
				<meta name="description" content="Homepage of an Artist's Portfolio" />
			</Head>
			<Hero />
			<Spacer size="medium" />
			<MyServices />
			<Spacer size="medium" />
			<Portfolio />
		</>
	);
}
