import styles from './MainCard.module.scss'

export default function MainCard() {
	return (
		<>
			<section>
				<div className={styles.containerCard}>
					<div className={styles.imgCard}>
						<img src='' alt='' />
					</div>
					<p>Title</p>
					<p>Description</p>
				</div>
			</section>
		</>
	)
}
