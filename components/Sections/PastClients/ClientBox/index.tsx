import Image from "next/image";
import React from "react";
import styles from "./ClientBox.module.scss";

type Props = {
	image: string;
};

const ClientBox = ({ image }: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.border}>
				<Image
					alt={"clients name and logo"}
					src={image}
					width={100}
					height={100}
					layout="responsive"
				/>
			</div>
		</div>
	);
};

export default ClientBox;
