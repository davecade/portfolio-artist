import Image from "next/image";
import React from "react";
import styles from "./Idea.module.scss";
import Heading from "@/components/Heading";
import PageLink from "@/components/PageLink";

const Idea = () => {
	return (
		<div className={styles.container}>
			<div className={styles.container}>
				<Image
					src="/images/idea/illustrator_forest.jpg"
					className={styles.image}
					fill
					quality={100}
					alt="idea"
				/>
				<main className={styles.main_hero_content}>
					<div className={styles.heading_container}>
						<Heading text={"Have an idea?"} size={"medium"} lineRight />
					</div>
					<div className={styles.heading_container}>
						<Heading text={"Lets work."} size={"xlarge"} />
					</div>

					<div className={styles.title_description_container}>
						<p className={styles.title_description}>
							Lorem ipsum dolor sit amet consectetur in quisque varius eget
							turpis sollicitudin purus arcu morbi lorem lacus sit in tellus
							dolor eget.
						</p>
					</div>
					<div className={styles.action_link_container}>
						<PageLink
							bold
							text={"Contact Us"}
							marginRight={"small"}
							href={""}
						/>
						<PageLink
							marginLeft={"small"}
							text={"Browse Portfolio"}
							href={""}
						/>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Idea;
