"use client";

import React from "react";
import Heading from "../Heading";
import styles from "./Portfolio.module.scss";
import ActionLink from "../ActionLink";
import ServiceCard from "../ServiceCard";
import { services } from "@/data";
import ProjectCard from "../ProjectCard";

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

				<div className={styles.portfolio_projects_container}>
					<div className={styles.top}>
						<ProjectCard size={"large"} image={"/images/futuristic-city.jpg"} />
						<div className={styles.top_right}>
							<ProjectCard size={"medium"} image={"/images/sunset-city.jpg"} />
							<div className={styles.top_right_bottom}>
								<ProjectCard
									size={"small"}
									image={"/images/enchanted-forest.png"}
								/>
								<ProjectCard
									size={"small"}
									image={"/images/beautiful-woman.png"}
								/>
							</div>
						</div>
					</div>
					<div className={styles.bottom}>
						<div className={styles.bottom_left}>
							<ProjectCard
								size={"small"}
								image={"/images/enchanted-tree.png"}
							/>
							<ProjectCard
								size={"small"}
								image={"/images/space-exploration.png"}
							/>
						</div>
						<ProjectCard size={"medium"} image={"/images/house-hill.jpg"} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
