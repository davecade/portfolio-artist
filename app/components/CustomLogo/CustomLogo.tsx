import styles from "./CustomLogo.module.scss";

const CustomLogo = () => {
	return (
		<div className={styles.container}>
			<div className={`${styles.logo} ${styles.logo_part_1}`}></div>
			<div className={`${styles.logo} ${styles.logo_part_2}`}></div>
		</div>
	);
};

export default CustomLogo;
