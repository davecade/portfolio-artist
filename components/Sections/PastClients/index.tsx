import React from "react";
import styles from "./PastClients.module.scss";
import ClientBox from "./ClientBox";
import { clients } from "@/data";

const PastClients = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Past clients</h1>
			<p className={styles.description}>
				Lorem ipsum dolor sit amet consectetur in quisque varius eget turpis.
			</p>
			<div className={styles.clients_container}>
				{clients.map((client) => {
					return <ClientBox key={client.id} image={client.image} />;
				})}
			</div>
		</div>
	);
};

export default PastClients;
