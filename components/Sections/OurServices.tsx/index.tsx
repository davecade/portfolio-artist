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
					{services.map((service, index) => {
						if (windowWidth > 980) {
							return (
								<ServiceCard
									key={index}
									image={service.image}
									name={service.name}
									description={service.description}
									href={""}
								/>
							);
						}

						if (windowWidth <= 980) {
							return (
								<>
									<div className="service_card_container_small">
										{index % 2 === 1 && (
											<ServiceCard
												key={index}
												image={service.image}
												name={service.name}
												description={service.description}
												href={""}
											/>
										)}
									</div>
									<div className="service_card_container_small">
										{index % 2 === 0 && (
											<ServiceCard
												key={index}
												image={service.image}
												name={service.name}
												description={service.description}
												href={""}
											/>
										)}
									</div>
								</>
							);
						}
					})}
				</div>
			</div>
		</div>
	);
};

export default OurServices;
