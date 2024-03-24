import Head from "next/head";
import Hero from "@/components/Sections/Hero";
import MyServices from "@/components/Sections/OurServices.tsx";
import Portfolio from "@/components/Sections/Portfolio";
import Spacer from "@/components/Spacer/Spacer";
import PastClients from "@/components/Sections/PastClients";
import OurProcess from "@/components/Sections/OurProcess";
import Idea from "@/components/Sections/Idea/Idea";

export default function Home() {
	return (
		<>
			<Head>
				<title>Portfolio Artist</title>
				<meta name="description" content="Homepage of an Artist's Portfolio" />
			</Head>
			<Hero />
			<Spacer gap="medium" />
			<PastClients />
			<Spacer gap="xlarge" />
			<MyServices />
			<Spacer gap="medium" />
			<Portfolio />
			<Spacer gap="medium" />
			<OurProcess />
			<Spacer gap="xlarge" />
			<Idea />
		</>
	);
}
