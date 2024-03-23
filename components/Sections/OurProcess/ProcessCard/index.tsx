"use client";

import React, { useMemo, useState } from "react";
import styles from "./ProcessCard.module.scss";
import { FaChevronDown } from "react-icons/fa";
import Spacer from "@/components/Spacer/Spacer";

type ProcessCardProps = {
	rank: string;
	title: string;
	description: string;
	onClick: () => void;
};

const ProcessCard = ({
	rank,
	title,
	description,
	onClick,
}: ProcessCardProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const boxShaowStyles = useMemo(() => {
		if (rank === "01") return styles.box_shadow_01;

		if (rank === "02") return styles.box_shadow_02;

		if (rank === "03") return styles.box_shadow_03;
	}, [rank]);

	const handleClick = () => {
		setIsOpen((prev) => !prev);
		onClick();
	};

	return (
		<div
			className={`${styles.container} ${boxShaowStyles} ${
				isOpen ? styles.background_grey : ""
			}`}
			onClick={handleClick}
		>
			<div className={styles.left}>
				<div className={styles.left_content}>
					<h2 className={styles.rank}>{rank}</h2>
					<Spacer gap={"xsmall"} />
					<div className={styles.title_container}>
						<h1 className={styles.title}>{title}</h1>
						<FaChevronDown
							size={30}
							className={`${styles.chevron} ${
								isOpen ? styles.rotate_chevron : ""
							}`}
						/>
					</div>
				</div>
			</div>
			<div
				className={`${styles.right} ${isOpen ? "" : styles.close_description}`}
			>
				<div className={styles.right_content}>
					<p className={styles.description}>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default ProcessCard;
