"use client";

import React from "react";
import Heading from "../Heading";
import styles from "./MyServices.module.scss";
import ActionLink from "../ActionLink";

const MyServices = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<Heading text={"My Services"} size={"medium"} />
				<div
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "flex-end",
						alignItems: "center",
					}}
				>
					<ActionLink text={"Browse all services"} onClick={() => {}} />
				</div>
			</div>
		</div>
	);
};

export default MyServices;
