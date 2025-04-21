import styles from './Services.module.scss'

import ServiceCard from '../../components/serviceCard/ServiceCard'

import { useState, useEffect } from 'react'
import useApiUrl from '../../hooks/useApiUrl'
import { Link } from 'react-router-dom'

export default function Services() {
	const [serviceData, setServiceData] = useState([])
	const [images, setImages] = useState([])
	const { getApiUrl } = useApiUrl()

	const styleButton = {
		backgroundColor: '#d9d9d9',
		padding: '8px',
		margin: '0',
	}

	useEffect(() => {
		fetch(getApiUrl('Services'))
			.then((response) => {
				if (!response.ok) {
					throw new Error('Connection is falled!')
				}
				return response.json()
			})
			.then((data) => {
				setServiceData(data)
			})
			.catch((error) => {
				console.error('Error database connection', error)
			})

		fetch(getApiUrl('Galleries'))
			.then((response) => {
				if (!response.ok) {
					throw new Error('Connection is falled!')
				}
				return response.json()
			})
			.then((data) => {
				setImages(data)
			})
			.catch((error) => {
				console.error('Error on database connection', error)
			})
	}, [])

	const getImagePathById = (id, images) => {
		const image = images.find((img) => img.id === id)

		return image ? image.imagePath : ''
	}

	return (
		<>
			<section id='Services' className={styles.sectionService}>
				<div className={styles.contentS}>
					<div className={styles.titleS}>
						<h1>Наши услуги</h1>
					</div>
					<div className={styles.containerCard}>
						{serviceData.map((service, index) => (
							<div className={styles.card} key={index}>
								<ServiceCard
									image={getImagePathById(service.galleryId, images)}
									title={service.title}
									description={service.description}
								>
									<Link to={`/service/${service.id}`}>
										<button style={styleButton}>Подробнее</button>
									</Link>
								</ServiceCard>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
