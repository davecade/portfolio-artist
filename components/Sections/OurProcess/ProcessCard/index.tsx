"use client";

import React, { useMemo, useState } from "react";
import "./ProcessCard.scss";
import { FaChevronDown } from "react-icons/fa";
import Spacer from "@/components/Spacer/Spacer";

type ProcessCardProps = {
	rank: string;
	title: string;
	description: string;
	onClick: () => void;
};
// hello
const ProcessCard = ({
	rank,
	title,
	description,
	onClick,
}: ProcessCardProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const boxShaowStyles = useMemo(() => {
		if (rank === "01") return "box_shadow_01";
		if (rank === "02") return "box_shadow_02";
		if (rank === "03") return "box_shadow_03";
	}, [rank]);

	const handleClick = () => {
		setIsOpen((prev) => !prev);
		onClick();
	};

	return (
		<div
			className={`process_card_container ${boxShaowStyles} ${
				isOpen ? "background_grey" : ""
			}`}
			onClick={handleClick}
		>
			<div className="left">
				<div className="left_content">
					<h2 className="rank">{rank}</h2>
					<Spacer gap={"xsmall"} />
					<div className="title_container">
						<h1 className="title">{title}</h1>
						<FaChevronDown
							size={30}
							className={`chevron ${isOpen ? "rotate_chevron" : ""}`}
						/>
					</div>
				</div>
			</div>
			<div className={`right ${isOpen ? "" : "close_description"}`}>
				<div className="right_content">
					<p className="description">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default ProcessCard;
