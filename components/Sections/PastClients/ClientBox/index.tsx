import Image from "next/image";
import React from "react";
import "./ClientBox.scss";

type Props = {
	image: string;
};

const ClientBox = ({ image }: Props) => {
	return (
		<div className="client_box_container">
			<div className="border">
				<Image
					alt={"client's name and logo"}
					src={image}
					height={100}
					width={100}
					layout="responsive"
				/>
			</div>
		</div>
	);
};

export default ClientBox;
