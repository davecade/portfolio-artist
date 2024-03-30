import React from "react";
import "./PastClients.scss";
import ClientBox from "./ClientBox";
import { clients } from "@/data";

const PastClients = () => {
	return (
		<div className="past_clients_container">
			<h1 className="heading">Past clients</h1>
			<p className="description">
				Lorem ipsum dolor sit amet consectetur in quisque varius eget turpis.
			</p>
			<div className="clients_container">
				{clients.map((client) => (
					<ClientBox key={client.id} image={client.image} />
				))}
			</div>
		</div>
	);
};

export default PastClients;
