import React from "react";
import styles from "./ProjectCard.module.scss";
import Image from "next/image";

type Props = {
	size: "small" | "medium" | "large";
	image: string;
};

const ProjectCard = ({ size, image }: Props) => {

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

	return <div className={styles.container}>
		<Image className={styles.image} src={image} alt="project" width={width} height={height} />
	</div>;
};

export default ProjectCard;
