import styles from './Services.module.scss'

import Button from '../../components/button/Button'
import ServiceCard from '../../components/serviceCard/ServiceCard'

export default function Services() {
	const styleButton = {
		backgroundColor: '#d9d9d9',
		padding: '8px',
		margin: '0',
	}

	return (
		<>
			<section className={styles.sectionService}>
				<div className={styles.contentS}>
					<div className={styles.titleS}>
						<h1>Наши услуги</h1>
					</div>
					<div className={styles.containerCard}>
						<ServiceCard>
							<Button style={styleButton}>Подробнее</Button>
						</ServiceCard>

						<ServiceCard>
							<Button style={styleButton}>Подробнее</Button>
						</ServiceCard>

						<ServiceCard>
							<Button style={styleButton}>Подробнее</Button>
						</ServiceCard>
					</div>
					<div className={styles.containerCard}>
						<ServiceCard>
							<Button style={styleButton}>Подробнее</Button>
						</ServiceCard>

						<ServiceCard>
							<Button style={styleButton}>Подробнее</Button>
						</ServiceCard>

						<ServiceCard>
							<Button style={styleButton}>Подробнее</Button>
						</ServiceCard>
					</div>
				</div>
			</section>
		</>
	)
}
