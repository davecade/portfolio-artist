import React from "react";
import styles from "./ServiceCard.module.scss";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

type Props = {
	image: string;
	name: string;
	description: string;
	onClick: () => void;
};

const ServiceCard = ({ image, name, description, onClick }: Props) => {
	return (
		<div className={styles.service_container} onClick={onClick}>
			<div className={styles.image_container}>
				<Image
					className={styles.image}
					src={image}
					alt={name}
					width={328}
					height={598}
				/>
				<MdArrowOutward className={styles.arrow_icon} size={40} />
			</div>
			<div className={styles.text_container}>
				<h2 className={styles.name}>{name}</h2>
				<p className={styles.description}>{description}</p>
			</div>
		</div>
	);
};

export default ServiceCard;