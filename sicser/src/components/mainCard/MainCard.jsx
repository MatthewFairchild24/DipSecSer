import styles from './MainCard.module.scss'

export default function MainCard({
	image,
	title,
	description,
	children,
	style,
}) {
	return (
		<>
			<div className={styles.containerCard} style={style}>
				<div className={styles.imgCard}>
					<img src={image} alt={title} />
				</div>
				<div className={styles.contentCard}>
					<div className={styles.titleCard}>
						<p>{title}</p>
					</div>
					<div className={styles.descriptionCard}>
						<p>{description}</p>
					</div>
					{children}
				</div>
			</div>
		</>
	)
}
