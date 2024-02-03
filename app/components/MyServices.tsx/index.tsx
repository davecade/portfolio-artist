"use client";

import React from "react";
import Heading from "../Heading";
import styles from "./MyServices.module.scss";
import ActionLink from "../ActionLink";

const MyServices = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.heading_action_link_container}>
					<div className={styles.left_side}>
						<Heading text={"My Services"} size={"medium"} />
					</div>
					<div className={styles.right_side}>
						<ActionLink text={"Browse all services"} onClick={() => {}} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyServices;
