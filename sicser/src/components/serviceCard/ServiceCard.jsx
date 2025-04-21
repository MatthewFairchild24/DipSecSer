import styles from './ServiceCard.module.scss'
import Button from '../button/Button'

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
					<div className={styles.buttonContainer}>{children}</div>
				</div>
			</div>
		</>
	)
}
