import React from "react";
import styles from "./ProcessCard.module.scss";

type ProcessCardProps = {
	rank: number;
	title: string;
	description: string;
};

const ProcessCard = ({ rank, title, description }: ProcessCardProps) => {
	return <div className={styles.container}>ProcessCard</div>;
};

export default ProcessCard;
