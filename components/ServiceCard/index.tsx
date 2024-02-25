"use client";
import React from "react";
import styles from "./ServiceCard.module.scss";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

type Props = {
	image: string;
	name: string;
	description: string;
	href: string;
};

const ServiceCard = ({ image, name, description, href }: Props) => {
	const handleClick = () => {
		// use href to navigate to the service
		console.log("Navigating to: ", href);
	};
	return (
		<div className={styles.service_container} onClick={handleClick}>
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
