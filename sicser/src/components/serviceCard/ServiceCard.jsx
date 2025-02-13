import styles from './ServiceCard.module.scss'

export default function ServiceCard({ image, title, description, children }) {
	return (
		<>
			<div className={styles.containerCard}>
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
