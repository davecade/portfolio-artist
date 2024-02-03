"use client";

import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import ActionLink from "../ActionLink/ActionLink";

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
				<div className={styles.title_first_line}>
					<h1 className={styles.title_company}>Koi Spirit</h1>
					<div className={styles.title_line}></div>
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
						paddingRight={"small"}
						onClick={() => {}}
					/>
					<ActionLink
						paddingLeft={"small"}
						text={"Browse Portfolio"}
						onClick={() => {}}
					/>
				</div>
			</main>
		</div>
	);
}

export default Hero;
