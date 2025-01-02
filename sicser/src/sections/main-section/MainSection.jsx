import styles from './MainSection.module.scss'
import Button from '../../components/button/Button'
import MainCard from '../../components/mainCard/MainCard'

export default function MainSection() {
	const styleButton = {
		padding: '0.5rem',
		backgroundColor: 'rgba(217, 217, 217, 1)',
		marginTop: '3rem',
	}
	const styleMiddleCard = {
		backgroundColor: 'rgba(112, 112, 112, 1)',
	}

	return (
		<>
			<main>
				<section className={styles.containerForImg}>
					<div className={styles.imgBack}>
						<div className={styles.containerContent}>
							<div className={styles.containerTitle}>
								<h3>Счастье.Строительство.Комфорт.</h3>
							</div>
							<div className={styles.containerDesc}>
								<h1>Строим будущее, создаем комфорт!</h1>
							</div>

							<Button style={styleButton}>
								<a href='#'>Наши услуги</a>
							</Button>
						</div>
					</div>
					<div className={styles.sectionCard}>
						<MainCard></MainCard>
						<MainCard style={styleMiddleCard}></MainCard>
						<MainCard></MainCard>
					</div>
				</section>
			</main>
		</>
	)
}
