import React, { useMemo } from "react";
import styles from "./ProcessCard.module.scss";
import { FaChevronDown } from "react-icons/fa";
import Spacer from "@/components/Spacer/Spacer";

type ProcessCardProps = {
	rank: string;
	title: string;
	description: string;
};

const ProcessCard = ({ rank, title, description }: ProcessCardProps) => {
	const boxShaowStyles = useMemo(() => {
		if (rank === "01") return styles.box_shadow_01;

		if (rank === "02") return styles.box_shadow_02;

		if (rank === "03") return styles.box_shadow_03;
	}, [rank]);

	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<div className={styles.left_content}>
					<h2 className={styles.rank}>{rank}</h2>
					<Spacer gap={"xsmall"} />
					<div className={styles.title_container}>
						<h1 className={styles.title}>{title}</h1>
						<FaChevronDown size={30} className={styles.chevron} />
					</div>
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.right_content}></div>
			</div>
		</div>
	);
};

export default ProcessCard;
