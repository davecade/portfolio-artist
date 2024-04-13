"use client";

import React from "react";
import "./PastClients.scss";
import ClientBox from "./ClientBox";
import { clients } from "@/data";
import useWindowWidth from "@/hooks/useWindowWidth";

const PastClients = () => {
	const windowWidth = useWindowWidth();

	return (
		<div className="past_clients_container">
			<div className="past_clients_content">
				<h1 className="heading">Past clients</h1>
				<p className="description">
					Lorem ipsum dolor sit amet consectetur in quisque varius eget turpis.
				</p>
				<div className="clients_container">
					{windowWidth > 1000 &&
						clients.map((client) => (
							<ClientBox key={client.id} image={client.image} />
						))}
					{windowWidth <= 1000 && windowWidth > 560 && (
						<div className="flex_center_width_full_column">
							<div className="flex_center_width_full">
								{clients
									.filter((client, index) => index < 3)
									.map((client) => (
										<ClientBox
											key={client.id}
											image={client.image}
											className="past_client_box"
										/>
									))}
							</div>

							<div className="flex_center_width_full">
								{clients
									.filter((client, index) => index > 2)
									.map((client) => (
										<ClientBox
											key={client.id}
											image={client.image}
											className="past_client_box"
										/>
									))}
							</div>
						</div>
					)}
					{windowWidth <= 560 && (
						<div className="flex_center_width_full_column">
							<div className="flex_center_width_full">
								{clients
									.filter((client, index) => index < 2)
									.map((client) => (
										<ClientBox
											key={client.id}
											image={client.image}
											className="past_client_box"
										/>
									))}
							</div>

							<div className="flex_center_width_full">
								{clients
									.filter((client, index) => index > 1 && index < 4)
									.map((client) => (
										<ClientBox
											key={client.id}
											image={client.image}
											className="past_client_box"
										/>
									))}
							</div>
							<div className="flex_center_width_full">
								{clients
									.filter((client, index) => index === 4)
									.map((client) => (
										<ClientBox
											key={client.id}
											image={client.image}
											className="past_client_box"
										/>
									))}
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default PastClients;
