import styles from './MainSection.module.scss'
import Button from '../../components/button/Button'
import MainCard from '../../components/mainCard/MainCard'

import React, { useState, useEffect } from 'react'

export default function MainSection() {
	const [cardsData, setCardsData] = useState([])
	const [images, setImages] = useState([])

	const styleButton = {
		padding: '0.5rem',
		backgroundColor: 'rgba(217, 217, 217, 1)',
		marginTop: '3rem',
	}
	const styleMiddleCard = {
		backgroundColor: 'rgba(112, 112, 112, 1)',
	}

	useEffect(() => {
		fetch('https://localhost:7263/api/Advantages')
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

		fetch('https://localhost:7263/api/Galleries')
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

	const getImagePathById = (id) => {
		const image = images.find((img) => img.galleryId === id)

		return image ? image.imagePath : ''
	}

	const getCard = (card) => {
		console.log(card)
		return
	}

	getCard(cardsData)

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
						{cardsData.map((card, index) => (
							<MainCard
								key={index}
								image={getImagePathById(card.galleryId)}
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
