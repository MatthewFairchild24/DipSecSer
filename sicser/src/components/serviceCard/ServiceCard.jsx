import styles from './ServiceCard.module.scss'

export default function ServiceCard({ children }) {
	return (
		<>
			<div className={styles.containerCard}>
				<div className={styles.imgCard}>
					<img src='../image/static/def.jpg' alt='' />
				</div>
				<div className={styles.contentCard}>
					<div className={styles.titleCard}>
						<p>Title</p>
					</div>
					<div className={styles.descriptionCard}>
						<p>Description</p>
					</div>
					{children}
				</div>
			</div>
		</>
	)
}
