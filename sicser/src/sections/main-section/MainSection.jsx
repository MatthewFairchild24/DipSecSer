import styles from './MainSection.module.scss'

import MainCard from '../../components/mainCard/MainCard'

import React, { useState, useEffect } from 'react'
import useApiUrl from '../../hooks/useApiUrl'

export default function MainSection() {
	const [cardsData, setCardsData] = useState([])
	const [images, setImages] = useState([])
	const { getApiUrl } = useApiUrl()

	const styleMiddleCard = {
		backgroundColor: 'rgb(146, 146, 146)',
	}

	useEffect(() => {
		fetch(getApiUrl('Advantages'))
			.then((response) => {
				if (!response.ok) {
					throw new Error('Connection is falled!')
				}
				return response.json()
			})
			.then((data) => {
				setCardsData(data)
			})
			.catch((error) => {
				console.error('Error on database connection', error)
			})

		fetch(getApiUrl('Galleries'))
			.then((response) => {
				if (!response.ok) {
					throw new Error('Connetction is falled!')
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
			<main>
				<section id='MainSection' className={styles.containerForImg}>
					<div className={styles.imgBack}>
						<div className={styles.containerContent}>
							<div className={styles.containerTitle}>
								<h3>Счастье.Строительство.Комфорт.</h3>
							</div>
							<div className={styles.containerDesc}>
								<h1>Строим будущее, создаем комфорт!</h1>
							</div>

							{/* <Button style={styleButton}>
								<a href='#'>Наши услуги</a>
							</Button> */}
						</div>
					</div>
					<div className={styles.sectionCard}>
						{cardsData.map((card, index) => (
							<MainCard
								key={index}
								image={getImagePathById(card.galleryId, images)}
								title={card.title}
								description={card.description}
								style={index === 1 ? styleMiddleCard : {}}
							/>
						))}

						{/* <MainCard></MainCard>
						<MainCard style={styleMiddleCard}></MainCard>
						<MainCard></MainCard> */}
					</div>
				</section>
			</main>
		</>
	)
}
