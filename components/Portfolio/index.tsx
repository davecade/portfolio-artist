"use client";

import React from "react";
import Heading from "../Heading";
import styles from "./Portfolio.module.scss";
import ActionLink from "../ActionLink";
import ServiceCard from "../ServiceCard";
import { services } from "@/data";

const Portfolio = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.portfolio_heading_description_container}>
					<Heading text={"Portfolio"} size={"medium"} lineRight lineLeft />
					<p className={styles.description}>
						Lorem ipsum dolor sit amet consectetur in quisque varius eget turpis
						sollicitudin purus arcu morbi lorem lacus sit.
					</p>
				</div>

				<div className={styles.portfolio_projects_container}></div>
			</div>
		</div>
	);
};

export default Portfolio;
