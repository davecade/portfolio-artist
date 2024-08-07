import React from "react";
import Heading from "../../Heading";
import "./FollowMe.scss";
// import ProjectCard from "./ProjectCard";
// import PageLink from "../../PageLink";

const FollowMe = () => {
	return (
		<div className="follow_me_container">
			<div className="content">
				<div className="follow_me_heading_description_container">
					<Heading
						text={"Follow my work"}
						lineRight
						lineLeft
						className="follow_me_heading"
					/>
					<p className="description">
						Lorem ipsum dolor sit amet consectetur in quisque varius eget turpis
						sollicitudin purus arcu morbi lorem lacus sit.
					</p>
				</div>

				{/* <div className="portfolio_projects_container">
					<div className="top">
						<ProjectCard
							size={"large"}
							image={"/images/projects/futuristic-city.jpg"}
							href={""}
						/>
						<div className="top_right">
							<ProjectCard
								size={"medium"}
								image={"/images/projects/sunset-city.jpg"}
								href={""}
							/>
							<div className="top_right_bottom">
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
					<div className="bottom">
						<div className="bottom_left">
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
				<div className="all_projects_button_container">
					<PageLink text={"Browse All Projects"} href={""} />
				</div> */}
			</div>
		</div>
	);
};

export default FollowMe;
