import Heading from "@/components/Heading";
import React from "react";
import styles from "./OurProcess.module.scss";
import PageLink from "@/components/PageLink";
import ProcessCard from "./ProcessCard";

const OurProcess = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.heading_action_link_container}>
					<div className={styles.left_side}>
						<Heading text={"Our process"} size={"medium"} lineRight />
					</div>
					<div className={styles.right_side}>
						<PageLink text={"Contact me"} bold href={""} />
					</div>
				</div>
				<div style={{ width: "100%" }}>
					<ProcessCard />
				</div>
			</div>
		</div>
	);
};

export default OurProcess;
