"use client";

import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import ActionLink from "../ActionLink";
import Heading from "../Heading";

function Hero() {
	return (
		<div className={styles.container}>
			<Image
				src="/images/illustratior-bg-hero.jpg"
				alt="hero"
				fill={true}
				quality={100}
				className={styles.hero_image}
				style={{ objectFit: "cover" }}
			/>
			<main className={styles.main_hero_content}>
				<div className={styles.heading_container}>
					<Heading text={"Koi Spirit"} size={"large"} lineRight />
				</div>
				<h2 className={styles.title_service}>Digital Art X Game Development</h2>
				<div className={styles.title_description_container}>
					<p className={styles.title_description}>
						Lorem ipsum dolor sit amet consectetur in quisque varius eget turpis
						sollicitudin purus arcu morbi lorem lacus sit in tellus dolor eget.
					</p>
				</div>
				<div className={styles.action_link_container}>
					<ActionLink
						bold
						text={"Contact Us"}
						marginRight={"small"}
						onClick={() => {}}
					/>
					<ActionLink
						marginLeft={"small"}
						text={"Browse Portfolio"}
						onClick={() => {}}
					/>
				</div>
			</main>
		</div>
	);
}

export default Hero;
