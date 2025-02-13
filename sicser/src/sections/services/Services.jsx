import styles from './Services.module.scss'

import Button from '../../components/button/Button'
import ServiceCard from '../../components/serviceCard/ServiceCard'

import React, { useState, useEffect } from 'react'

export default function Services() {
	const [serviceData, setServiceData] = useState([])
	const [images, setImages] = useState([])

	const styleButton = {
		backgroundColor: '#d9d9d9',
		padding: '8px',
		margin: '0',
	}

	useEffect(() => {
		fetch('https://localhost:7263/api/Services')
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

		fetch('https://localhost:7263/api/Galleries')
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
			<section className={styles.sectionService}>
				<div className={styles.contentS}>
					<div className={styles.titleS}>
						<h1>Наши услуги</h1>
					</div>
					<div className={styles.containerCard}>
						{serviceData.map((service, index) => (
							<ServiceCard
								key={index}
								image={getImagePathById(service.galleryId, images)}
								title={service.title}
								description={service.description}
							/>
						))}
					</div>
					{/* <div className={styles.containerCard}>
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
					</div> */}
				</div>
			</section>
		</>
	)
}
