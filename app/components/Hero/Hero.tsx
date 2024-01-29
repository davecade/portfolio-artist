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
				<div className={styles.title_first_line}>
					<h1 className={styles.title_greeting}>Koi Spirit</h1>
					<div className={styles.title_line}></div>
				</div>
				{/* <h1 className={styles.title_name}>Rhyss Labo</h1> */}
				<h2 className={styles.title_profession_location}>
					Digital Art X Game Development
				</h2>
			</main>
		</div>
	);
}

export default Hero;
