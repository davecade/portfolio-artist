import Head from "next/head";
import Hero from "@/components/Sections/Hero";
import MyServices from "@/components/Sections/OurServices.tsx";
import Portfolio from "@/components/Sections/Portfolio";
import Spacer from "@/components/Spacer/Spacer";
import PastClients from "@/components/Sections/PastClients";

export default function Home() {
	return (
		<>
			<Head>
				<title>Portfolio Artist</title>
				<meta name="description" content="Homepage of an Artist's Portfolio" />
			</Head>
			<Hero />
			<Spacer size="medium" />
			<PastClients />
			<Spacer size="xlarge" />
			<MyServices />
			<Spacer size="medium" />
			<Portfolio />
		</>
	);
}
