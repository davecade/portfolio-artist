"use client";

import Heading from "@/components/Heading";
import React from "react";
import "./OurProcess.scss";
import PageLink from "@/components/PageLink";
import ProcessCard from "./ProcessCard";

const OurProcess = () => {
	return (
		<div className="our_process_container">
			<div className="content">
				<div className="heading_action_link_container">
					<div className="left_side">
						<Heading text={"Our process"} size={"medium"} lineRight />
					</div>
					<div className="right_side">
						<PageLink text={"Contact me"} bold href={""} />
					</div>
				</div>
				<div className="process_card_list">
					<ProcessCard
						rank={"01"}
						title={"Project idea"}
						description={
							"Lorem ipsum dolor sit amet consectetur amet at sed tristique rutrum eget neque rhoncus augue interdum eget id molestie bibendum metus fames eget sem habitant fermentum semper purus justo tellus est nibh tellus eget amet tincidunt nullam."
						}
						onClick={() => {}}
					/>
					<ProcessCard
						rank={"02"}
						title={"Brainstorming"}
						description={
							"Lorem ipsum dolor sit amet consectetur amet at sed tristique rutrum eget neque rhoncus augue interdum eget id molestie bibendum metus fames eget sem habitant fermentum semper purus justo tellus est nibh tellus eget amet tincidunt nullam."
						}
						onClick={() => {}}
					/>
					<ProcessCard
						rank={"03"}
						title={"Execution"}
						description={
							"Lorem ipsum dolor sit amet consectetur amet at sed tristique rutrum eget neque rhoncus augue interdum eget id molestie bibendum metus fames eget sem habitant fermentum semper purus justo tellus est nibh tellus eget amet tincidunt nullam."
						}
						onClick={() => {}}
					/>
				</div>
			</div>
		</div>
	);
};

export default OurProcess;
