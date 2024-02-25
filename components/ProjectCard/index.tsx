"use client";

import React from "react";
import styles from "./ProjectCard.module.scss";
import Image from "next/image";
import PageLink from "../PageLink";

type Props = {
	size: "small" | "medium" | "large";
	image: string;
	href: string;
};

const ProjectCard = ({ size, image, href }: Props) => {
	const width = (() => {
		switch (size) {
			case "small":
				return 328;
			case "medium":
				return 656;
			case "large":
				return 656;
			default:
				return 656;
		}
	})();

	const height = (() => {
		switch (size) {
			case "small":
				return 328;
			case "medium":
				return 328;
			case "large":
				return 656;
			default:
				return 656;
		}
	})();

	const handleClick = () => {
		// use onClick to navigate to the project
		console.log("Navigating to: ", href);
	};

	return (
		<div
			className={styles.container}
			style={{
				height,
				width,
			}}
			onClick={handleClick}
		>
			<Image
				className={styles.image}
				src={image}
				alt="project"
				width={width}
				height={height}
			/>
			<div className={styles.action_link_container}>
				<PageLink text={"View Project"} href={""} bold />
			</div>
		</div>
	);
};

export default ProjectCard;
