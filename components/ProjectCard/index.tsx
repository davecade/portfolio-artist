import React from "react";
import styles from "./ProjectCard.module.scss";
import Image from "next/image";
import ActionLink from "../ActionLink";

type Props = {
	size: "small" | "medium" | "large";
	image: string;
	onClick: () => void;
};

const ProjectCard = ({ size, image, onClick }: Props) => {
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

	return (
		<div
			className={styles.container}
			style={{
				height,
				width,
			}}
			onClick={onClick}
		>
			<Image
				className={styles.image}
				src={image}
				alt="project"
				width={width}
				height={height}
			/>
			<div className={styles.action_link_container}>
				<ActionLink text={"View Project"} onClick={onClick} bold />
			</div>
		</div>
	);
};

export default ProjectCard;
