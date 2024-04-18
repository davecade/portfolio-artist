import Image from "next/image";
import React from "react";
import "./ClientBox.scss";

type Props = {
	image: string;
	className?: string;
};

const ClientBox = ({ image, className }: Props) => {
	return (
		<div className={`client_box_container ${className}`}>
			<div className="border">
				<div className="image_container">
					<Image
						alt={"client's name and logo"}
						src={image}
						fill
						quality={100}
						
					/>
				</div>
			</div>
		</div>
	);
};

export default ClientBox;
