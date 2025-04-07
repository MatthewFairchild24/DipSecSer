import styles from './AboutCompany.module.scss'
import React, { useState, useEffect } from 'react'

export default function AboutCompany() {
	const [images, setImages] = useState([])
	const [filtAC, setFiltAC] = useState([])
	const [filtAC1, setFiltAC1] = useState([])

	useEffect(() => {
		const fetchImages = async () => {
			try {
				const response = await fetch('https://localhost:7263/api/Galleries')
				const data = await response.json()
				setImages(data)
			} catch (error) {
				console.error('Error fetching images: ', error)
			}
		}
		fetchImages()
	}, [])

	useEffect(() => {
		const foundAC = images.filter((image) => image.name === 'AboutCompany')
		const foundAC1 = images.filter((image) => image.name === 'AboutCompany1')
		setFiltAC(foundAC)
		setFiltAC1(foundAC1)
	}, [images])

	return (
		<>
			<section id='AboutCompany'>
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
							{filtAC.length > 0 ? (
								filtAC.map((image, index) => (
									<img
										key={index}
										src={image.imagePath}
										alt='image'
										className={styles.image}
									/>
								))
							) : (
								<p>Loading image ...</p>
							)}

							{/* <img
								src='../image/static/AbCom.jpg'
								alt=''
								className={styles.image}
							/> */}
							{filtAC1.length > 0 ? (
								filtAC1.map((image, index) => (
									<img
										key={index}
										src={image.imagePath}
										alt='image'
										className={styles.imageOverlay}
									></img>
								))
							) : (
								<p>Loading image ... </p>
							)}
							{/* <img
								src='../image/static/AbCom1.jpg'
								alt=''
								className={styles.imageOverlay}
							/> */}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
