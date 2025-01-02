import styles from './MainCard.module.scss'

export default function MainCard() {
	return (
		<>
			<div className={styles.containerCard}>
				<div className={styles.imgCard}>
					<img src='../image/def.jpg' alt='' />
				</div>
				<div className={styles.contentCard}>
					<div className={styles.titleCard}>
						<p>Title</p>
					</div>
					<div className={styles.descriptionCard}>
						<p>Description</p>
					</div>
				</div>
			</div>
		</>
	)
}
