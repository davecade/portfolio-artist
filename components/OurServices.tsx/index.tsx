"use client";

import React from "react";
import Heading from "../Heading";
import styles from "./OurServices.module.scss";
import ActionLink from "../ActionLink";
import ServiceCard from "../ServiceCard";
import { services } from "@/data";

const MyServices = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.heading_action_link_container}>
					<div className={styles.left_side}>
						<Heading text={"Our Services"} size={"medium"} />
					</div>
					<div className={styles.right_side}>
						<ActionLink text={"Browse all services"} onClick={() => {}} />
					</div>
				</div>
				<div className={styles.services_container}>
					{services.map((service, index) => {
						return (
							<ServiceCard
								key={index}
								image={service.image}
								name={service.name}
								description={service.description}
								onClick={() => {}}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default MyServices;
