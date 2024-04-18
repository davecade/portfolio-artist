"use client";
import React from "react";
import Heading from "../../Heading";
import "./OurServices.scss";
import PageLink from "../../PageLink";
import ServiceCard from "./ServiceCard";
import { services } from "@/data";

const OurServices = () => {
	return (
		<div className="our_services_container">
			<div className="content">
				<div className="heading_action_link_container">
					<div className="left_side">
						<Heading
							text={"Our Services"}
							lineRight
							className="our_services_left_side_heading"
						/>
					</div>
					<div className="right_side">
						<PageLink text={"Browse all services"} href={""} />
					</div>
				</div>
				<div className="services_list">
					{services.map((service, index) => (
						<ServiceCard
							key={index}
							image={service.image}
							name={service.name}
							description={service.description}
							href={""}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default OurServices;
