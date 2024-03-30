import Hero from "@/components/Sections/Hero";
import MyServices from "@/components/Sections/OurServices.tsx";
import Portfolio from "@/components/Sections/Portfolio";
import Spacer from "@/components/Spacer/Spacer";
import PastClients from "@/components/Sections/PastClients";
import OurProcess from "@/components/Sections/OurProcess";
import Idea from "@/components/Sections/Idea";

export default function Home() {
	return (
		<main>
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
		</main>
	);
}
