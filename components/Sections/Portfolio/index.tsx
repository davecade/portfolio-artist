import React from "react";
import Heading from "../../Heading";
import styles from "./Portfolio.module.scss";
import ProjectCard from "./ProjectCard";
import PageLink from "../../PageLink";

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
						<ProjectCard
							size={"large"}
							image={"/images/projects/futuristic-city.jpg"}
							href={""}
						/>
						<div className={styles.top_right}>
							<ProjectCard
								size={"medium"}
								image={"/images/projects/sunset-city.jpg"}
								href={""}
							/>
							<div className={styles.top_right_bottom}>
								<ProjectCard
									size={"small"}
									image={"/images/projects/enchanted-forest.png"}
									href={""}
								/>
								<ProjectCard
									size={"small"}
									image={"/images/projects/beautiful-woman.png"}
									href={""}
								/>
							</div>
						</div>
					</div>
					<div className={styles.bottom}>
						<div className={styles.bottom_left}>
							<ProjectCard
								size={"small"}
								image={"/images/projects/enchanted-tree.png"}
								href={""}
							/>
							<ProjectCard
								size={"small"}
								image={"/images/projects/space-exploration.png"}
								href={""}
							/>
						</div>
						<ProjectCard
							size={"medium"}
							image={"/images/projects/house-hill.jpg"}
							href={""}
						/>
					</div>
				</div>
				<div className={styles.all_projects_button_container}>
					<PageLink text={"Browse All Projects"} href={""} />
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
