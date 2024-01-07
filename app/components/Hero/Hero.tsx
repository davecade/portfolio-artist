import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";

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
				<h1>Hello there, I'm Dave Cadelina</h1>
				<p className={styles.intro}>an Artist from Sydney</p>
			</main>
		</div>
	);
}

export default Hero;
