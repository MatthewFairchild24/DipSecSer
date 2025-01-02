import styles from './AboutCompany.module.scss'

export default function AboutCompany() {
	return (
		<>
			<section>
				<div className={styles.containerAC}>
					<div className={styles.contentAC}>
						<div className={styles.textAC}>
							<p>
								Компания "Secret Service" — это надежный партнер в сфере
								проектирования зданий и сооружений, который предлагает
								инновационные решения для создания уникальных архитектурных
								объектов. Мы специализируемся на разработке проектов различной
								сложности, от жилых и коммерческих зданий до специализированных
								сооружений.
							</p>
						</div>
						<div className={styles.stackImgAC}>
							<div className={styles.backCon}></div>
							<img src='../image/main.jpg' alt='' className={styles.image} />
							<img
								src='../image/company3.jpg'
								alt=''
								className={styles.imageOverlay}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
