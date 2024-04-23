"use client";
import React from "react";
import Heading from "../../Heading";
import "./OurServices.scss";
import PageLink from "../../PageLink";
import ServiceCard from "./ServiceCard";
import { services } from "@/data";
import useWindowWidth from "@/hooks/useWindowWidth";

const OurServices = () => {
	const windowWidth = useWindowWidth();

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
					{windowWidth > 980 &&
						services.map((service, index) => {
							return (
								<ServiceCard
									key={index}
									image={service.image}
									name={service.name}
									description={service.description}
									href={""}
								/>
							);
						})}

					{windowWidth <= 980 && (
						<div className="service_card_two_column_container">
							<div className="service_card_container_small">
								{services[0] && (
									<ServiceCard
										key={0}
										image={services[0].image}
										name={services[0].name}
										description={services[0].description}
										href={""}
									/>
								)}
								{services[1] && (
									<ServiceCard
										key={1}
										image={services[1].image}
										name={services[1].name}
										description={services[1].description}
										href={""}
									/>
								)}
							</div>
							<div className="service_card_container_small">
								{services[2] && (
									<ServiceCard
										key={2}
										image={services[2].image}
										name={services[2].name}
										description={services[2].description}
										href={""}
									/>
								)}
								{services[3] && (
									<ServiceCard
										key={3}
										image={services[3].image}
										name={services[3].name}
										description={services[3].description}
										href={""}
									/>
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default OurServices;
