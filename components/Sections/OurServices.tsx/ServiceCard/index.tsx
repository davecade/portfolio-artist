"use client";
import React from "react";
import "./ServiceCard.scss";
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
		<div className="service_container" onClick={handleClick}>
			<div className="image_container">
				<Image
					className="image"
					src={image}
					alt={name}
					fill
					// layout="responsive"
				/>
				<MdArrowOutward className="arrow_icon" size={40} />
			</div>
			<div className="text_container">
				<h2 className="name">{name}</h2>
				<p className="description">{description}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
